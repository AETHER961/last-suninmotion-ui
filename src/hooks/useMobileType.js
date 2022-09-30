import { useEffect, useState } from "react";

export default function useMobileType() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    window.screen.width < 500 ? setMobile(true) : setMobile(false);
    window.addEventListener("resize", () => {
      if (window.screen.width < 500) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  return { isMobile };
}
