import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function StaggeredMenu({
  title,
  subtitle,
  description,
  avatarUrl,
  items,
  socials,
  activeSection,
  onNavigate,
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const layerRefs = useRef([]);
  const itemRefs = useRef([]);
  const socialRefs = useRef([]);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const setLayerRef = (node, index) => {
    layerRefs.current[index] = node;
  };

  const setItemRef = (node, index) => {
    itemRefs.current[index] = node;
  };

  const setSocialRef = (node, index) => {
    socialRefs.current[index] = node;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([panelRef.current, ...layerRefs.current], {
        xPercent: 100,
        opacity: 1,
      });
      gsap.set(itemRefs.current, { yPercent: 120, rotate: 8 });
      gsap.set(socialRefs.current, { y: 18, opacity: 0 });
      gsap.set([titleRef.current, descriptionRef.current], {
        y: 18,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);

  const animateOpen = useCallback(() => {
    const layers = layerRefs.current.filter(Boolean);
    const itemsToAnimate = itemRefs.current.filter(Boolean);
    const socialsToAnimate = socialRefs.current.filter(Boolean);

    gsap.killTweensOf([
      panelRef.current,
      iconRef.current,
      titleRef.current,
      descriptionRef.current,
      ...layers,
      ...itemsToAnimate,
      ...socialsToAnimate,
    ]);

    const timeline = gsap.timeline();

    timeline
      .to(
        iconRef.current,
        { rotate: 45, duration: 0.35, ease: "power3.out" },
        0,
      )
      .to(
        layers,
        {
          xPercent: 0,
          duration: 0.5,
          ease: "power4.out",
          stagger: 0.07,
        },
        0,
      )
      .to(
        panelRef.current,
        {
          xPercent: 0,
          duration: 0.65,
          ease: "power4.out",
        },
        0.16,
      )
      .to(
        [titleRef.current, descriptionRef.current],
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.08,
        },
        0.35,
      )
      .to(
        itemsToAnimate,
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.85,
          ease: "power4.out",
          stagger: 0.09,
        },
        0.42,
      )
      .to(
        socialsToAnimate,
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.06,
        },
        0.62,
      );
  }, []);

  const animateClose = useCallback(() => {
    const layers = layerRefs.current.filter(Boolean);
    const itemsToAnimate = itemRefs.current.filter(Boolean);
    const socialsToAnimate = socialRefs.current.filter(Boolean);

    gsap.killTweensOf([
      panelRef.current,
      iconRef.current,
      titleRef.current,
      descriptionRef.current,
      ...layers,
      ...itemsToAnimate,
      ...socialsToAnimate,
    ]);

    const timeline = gsap.timeline({
      onComplete: () => {
        gsap.set(itemRefs.current, { yPercent: 120, rotate: 8 });
        gsap.set(socialRefs.current, { y: 18, opacity: 0 });
        gsap.set([titleRef.current, descriptionRef.current], {
          y: 18,
          opacity: 0,
        });
      },
    });

    timeline
      .to(
        iconRef.current,
        { rotate: 0, duration: 0.3, ease: "power3.inOut" },
        0,
      )
      .to(
        [panelRef.current, ...layers.reverse()],
        {
          xPercent: 100,
          duration: 0.36,
          ease: "power3.in",
          stagger: 0.04,
        },
        0,
      );
  }, []);

  const toggleMenu = () => {
    const nextOpen = !open;

    setOpen(nextOpen);

    if (nextOpen) {
      animateOpen();
      return;
    }

    animateClose();
  };

  const handleNavigate = (sectionKey) => {
    onNavigate(sectionKey);
    setOpen(false);
    animateClose();
  };

  return (
    <div className="relative z-40 h-20 w-full" data-app-no-scroll-proxy>
      <header className="relative z-50 flex h-full items-center justify-between border-b border-white/10 bg-black/35 px-4 backdrop-blur-md">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="h-12 w-12 shrink-0 rounded-full border-2 border-[#3b82f6] bg-cover bg-center shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: `url('${avatarUrl}')` }}
          />
          <div className="min-w-0">
            <h1 className="m-0 truncate text-lg font-medium text-white">
              {title}
            </h1>
            <p className="m-0 truncate text-sm font-medium text-[#3b82f6]">
              {subtitle}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggleMenu}
          className="inline-flex items-center gap-2 border-0 bg-transparent p-2 text-sm font-semibold text-white"
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span ref={iconRef} className="relative h-4 w-4" aria-hidden="true">
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rounded-full bg-current" />
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 rotate-90 rounded-full bg-current" />
          </span>
        </button>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {["#1d4ed8", "#2563eb"].map((color, index) => (
          <div
            key={color}
            ref={(node) => setLayerRef(node, index)}
            className="absolute inset-0"
            style={{ background: color }}
            aria-hidden="true"
          />
        ))}

        <aside
          ref={panelRef}
          className="absolute inset-0 flex h-full flex-col overflow-y-auto bg-[#05070d]/96 px-5 pt-28 pb-8 text-white backdrop-blur-xl"
        >
          <div className="overflow-hidden">
            <h2 ref={titleRef} className="m-0 text-4xl font-semibold">
              {title}
            </h2>
          </div>

          <p
            ref={descriptionRef}
            className="mt-4 mb-8 max-w-[36ch] text-sm leading-7 text-white/78"
          >
            {description}
          </p>

          <nav className="flex flex-col gap-2">
            {items.map((item, index) => (
              <div key={item.key} className="overflow-hidden">
                <button
                  ref={(node) => setItemRef(node, index)}
                  type="button"
                  onClick={() => handleNavigate(item.key)}
                  className={`flex w-full items-center justify-between border-0 bg-transparent px-0 py-3 text-left text-4xl font-semibold uppercase leading-none transition-colors ${
                    activeSection === item.key
                      ? "text-[#3b82f6]"
                      : "text-white hover:text-[#3b82f6]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-sm text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#93c5fd]">
              Socials
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social, index) => (
                <a
                  key={social.key}
                  ref={(node) => setSocialRef(node, index)}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white text-lg shadow-md"
                  style={{ color: social.color }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default StaggeredMenu;
