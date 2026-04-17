import { useState, useEffect } from "react";

export const useAnimation = () => {
  const [start, setStart] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 80);
    }, 140);
    return () => clearInterval(interval);
  }, [start]);

  return { start, shake };
};
