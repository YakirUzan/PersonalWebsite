import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function DockItem({
  children,
  className = "",
  href,
  label,
  iconColor,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);
  const mouseDistance = useTransform(mouseX, (value) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };

    return value - rect.x - baseItemSize / 2;
  });
  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/90 shadow-md outline-none focus-visible:ring-2 focus-visible:ring-white ${className}`.trim()}
    >
      {Children.map(children, (child) =>
        cloneElement(child, { isHovered, iconColor }),
      )}
    </motion.a>
  );
}

function DockLabel({ children, className = "", isHovered }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`absolute -top-6 left-1/2 w-fit whitespace-nowrap rounded-md border border-white/20 bg-[#120F17] px-2 py-0.5 text-xs text-white ${className}`.trim()}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.span>
      ) : null}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "", iconColor }) {
  return (
    <span
      className={`flex items-center justify-center ${className}`}
      style={{ color: iconColor }}
    >
      {children}
    </span>
  );
}

function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 46,
  distance = 120,
  panelHeight = 38,
  dockHeight = 76,
  baseItemSize = 28,
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [dockHeight, magnification],
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="relative flex max-w-full items-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`flex w-fit items-end gap-4 rounded-2xl border border-white/30 bg-white/10 px-2.5 pb-1.5 ${className}`.trim()}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Social links"
      >
        {items.map((item) => (
          <DockItem
            key={item.label}
            href={item.url}
            label={item.label}
            iconColor={item.color}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Dock;
