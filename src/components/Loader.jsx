import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 16 + 12;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(onFinish, 350); // brief flash of 100% then go
      }
      setProgress(Math.min(value, 100));
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-overlay">
      <div className="loader-container">

        {/* Abstract Glowing Rings */}
        <div className="loader-rings">
          <div className="ring ring-outer"></div>
          <div className="ring ring-middle"></div>
          <div className="ring ring-inner"></div>
        </div>

        {/* Central Display */}
        <div className="loader-content">
          <div className="loader-brand">SNM</div>
          <div className="loader-progress">
            <span className="progress-number">{Math.floor(progress)}</span>
            <span className="progress-percent">%</span>
          </div>
          <div className="loader-status">
            {progress < 100 ? "System Booting..." : "Ready."}
          </div>
        </div>

      </div>
    </div>
  );
}
