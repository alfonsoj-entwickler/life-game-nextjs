import { useEffect, useState } from "react";

type windowSize = {
    width: number | undefined;
    height: number | undefined;
    isMobile: boolean;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: undefined,
    height: undefined,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 1024,
      });
    }
    window.addEventListener("load", handleResize);
    handleResize();
  }, []);
  return windowSize;
};

export default useWindowSize;
