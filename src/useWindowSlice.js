import { useState, useEffect } from 'react';

function useWindowSlice() {
  const [windowSlice, setWindowSlice] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSlice({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSlice;
}

export default useWindowSlice;
