import * as React from "react";

const MOBILE_BREAKPOINT = 768; // Tailwind "md" breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Media query for max-width just below MOBILE_BREAKPOINT
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);

    // Set initial value
    onChange();

    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Return a boolean; defaults false until detected
  return !!isMobile;
}
