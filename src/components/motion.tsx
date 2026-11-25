import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ease, fadeUp } from "../lib/motion-utils";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Reveals its children one after another when the group scrolls into view. */
export function Stagger({ children, className, delay = 0, gap = 0.08, as = "div" }: {
  children: ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
  as?: "div" | "ul" | "section";
}) {
  const reduced = useReducedMotion();
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Component>
  );
}

export function Item({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" | "p" | "h2" }) {
  const Component = motion[as];
  return <Component className={className} variants={fadeUp}>{children}</Component>;
}

/** Counts up to `value` the first time it becomes visible. */
export function Counter({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);
  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, { duration: 1.4, ease, onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, reduced, value]);
  return <span ref={ref}>{display.toFixed(decimals)}{suffix}</span>;
}

