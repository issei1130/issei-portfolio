"use client";

import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  onMount?: boolean;
}) {
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "-80px" } };
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={revealVariants}
      transition={{ delay, duration: 0.7, ease: EASE }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  onMount = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  onMount?: boolean;
}) {
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "-60px" } };
  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}

export function HoverLift({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE } }}
    >
      {children}
    </motion.div>
  );
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

/**
 * Terminal-style character typing reveal, with a blinking cursor at the end.
 * This site's own motion signature (distinct from the client demos' line/focus reveals).
 */
export function TypeReveal({
  text,
  className,
  charClassName,
  speed = 0.028,
  startDelay = 0,
  as = "div",
  onMount = false,
}: {
  text: string;
  className?: string;
  charClassName?: string;
  speed?: number;
  startDelay?: number;
  as?: "div" | "h1" | "h2" | "p";
  onMount?: boolean;
}) {
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "-60px" } };
  const MotionTag = motion[as];
  const chars = Array.from(text);
  return (
    <MotionTag
      className={className}
      initial="hidden"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: speed, delayChildren: startDelay } },
      }}
      {...trigger}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className={charClassName}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        aria-hidden
        className="ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] bg-current align-middle"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
      />
    </MotionTag>
  );
}

/** A quiet grid of dots that drifts in, echoing a code/commit grid without being a mascot. */
export function CommitGrid({ className = "" }: { className?: string }) {
  const cols = 12;
  const rows = 6;
  const cells = Array.from({ length: cols * rows });
  return (
    <div className={`grid grid-cols-12 gap-1.5 ${className}`} aria-hidden>
      {cells.map((_, i) => {
        const active = (i * 37) % 11 < 3;
        return (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-[2px]"
            style={{ background: active ? "var(--brand)" : "var(--border-soft)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? [0.3, 1, 0.3] : 0.5 }}
            transition={
              active
                ? { duration: 2.6 + (i % 5) * 0.4, repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.2 }
                : { duration: 0.6, delay: i * 0.01 }
            }
          />
        );
      })}
    </div>
  );
}
