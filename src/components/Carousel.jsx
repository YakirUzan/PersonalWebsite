import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const CONTAINER_PADDING = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

function CarouselItem({
  item,
  index,
  itemWidth,
  trackItemOffset,
  x,
  transition,
}) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

  return (
    <motion.figure
      className="relative m-0 flex aspect-9/16 shrink-0 cursor-grab overflow-hidden rounded-[18px] border border-white/12 bg-white/10 shadow-[0_16px_30px_rgba(0,0,0,0.24)] active:cursor-grabbing"
      style={{
        width: itemWidth,
        rotateY,
      }}
      transition={transition}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="h-full w-full object-cover"
        draggable="false"
      />
    </motion.figure>
  );
}

function Carousel({
  items,
  baseWidth = 360,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}) {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const [availableWidth, setAvailableWidth] = useState(baseWidth);
  const [position, setPosition] = useState(loop ? 1 : 0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const safeItems = items ?? [];
  const containerWidth = Math.max(
    220,
    Math.min(baseWidth, availableWidth || baseWidth),
  );
  const itemWidth = containerWidth - CONTAINER_PADDING * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop || safeItems.length === 0) {
      return safeItems;
    }

    return [safeItems[safeItems.length - 1], ...safeItems, safeItems[0]];
  }, [safeItems, loop]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(([entry]) => {
      setAvailableWidth(entry.contentRect.width);
    });

    resizeObserver.observe(wrapper);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) {
      return undefined;
    }

    const container = containerRef.current;
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) {
      return undefined;
    }

    if (pauseOnHover && isHovered) {
      return undefined;
    }

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop && safeItems.length > 1 ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [safeItems, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      setPosition(1);
      x.set(-trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      const target = safeItems.length;
      setIsJumping(true);
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) {
      return;
    }

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    safeItems.length === 0
      ? 0
      : loop
        ? (position - 1 + safeItems.length) % safeItems.length
        : Math.min(position, safeItems.length - 1);

  if (safeItems.length === 0) {
    return null;
  }

  return (
    <div ref={wrapperRef} className="flex w-full justify-center">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/20 p-4"
        style={{ width: `${containerWidth}px` }}
      >
        <motion.div
          className="flex"
          drag={isAnimating ? false : "x"}
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${item.id}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
            />
          ))}
        </motion.div>

        <div className="mt-4 flex w-full justify-center">
          <div className="flex max-w-full flex-wrap justify-center gap-2 px-4">
            {safeItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                aria-label={`Show image ${index + 1}`}
                className={`h-2 w-2 cursor-pointer rounded-full border-0 p-0 transition-colors duration-150 ${
                  activeIndex === index ? "bg-white" : "bg-white/35"
                }`}
                animate={{ scale: activeIndex === index ? 1.2 : 1 }}
                onClick={() => setPosition(loop ? index + 1 : index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
