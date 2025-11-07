import * as React from "react";

/**
 * A hook to determine if the current viewport is a mobile size.
 * @param {string} [query="(max-width: 768px)"] - The media query to use for mobile detection.
 * @returns {boolean} - `true` if the viewport matches the mobile query, `false` otherwise.
 */
export function useIsMobile(query: string = "(max-width: 768px)"): boolean {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    // Set the initial state
    updateIsMobile();

    // Add event listener for changes
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, [query]);

  return isMobile;
}
