import { useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function RouteScroll() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map<string, number>());

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    const savedPositions = positions.current;
    const state = location.state as { scrollTo?: string } | null;
    const targetId = state?.scrollTo ?? (location.hash ? location.hash.slice(1) : null);
    const target = targetId ? document.getElementById(targetId) : null;
    if (navigationType === "POP" && savedPositions.has(location.key)) {
      window.scrollTo({ top: savedPositions.get(location.key), behavior: "instant" });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (location.hash) window.history.replaceState(window.history.state, "", location.pathname);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (navigationType !== "POP") {
      const focusTarget = target ?? document.querySelector<HTMLElement>("main");
      focusTarget?.setAttribute("tabindex", "-1");
      focusTarget?.focus({ preventScroll: true });
    }
    return () => { savedPositions.set(location.key, window.scrollY); };
  }, [location.key, location.pathname, location.hash, location.state, navigationType]);

  return null;
}
