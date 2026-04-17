import { useEffect, useState } from "react";
import CasperDongGuImage from "@/assets/casper-donggu-default.png";

const MainPage = () => {
  const [start, setStart] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 80);
    }, 140);

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-screen items-center justify-center overflow-hidden">
      <div
        className={`transition-all duration-7000 ease-linear
        ${
          start
            ? "translate-x-0 translate-y-0 scale-100"
            : "translate-x-160 -translate-y-140 scale-10"
        }`}
      >
        <img
          src={CasperDongGuImage}
          className={`w-70 h-70 scale-100 ${shake ? "translate-y-px" : ""}`}
        />
      </div>
    </div>
  );
};

export default MainPage;
