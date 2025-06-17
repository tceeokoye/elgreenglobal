import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-green-700 to-emerald-900 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex space-x-2">
        <span
          className="w-4 h-4 bg-white rounded-full animate-bounce-slow"
          style={{ animationDelay: "-0.3s" }}
        />
        <span
          className="w-4 h-4 bg-white rounded-full animate-bounce-slow"
          style={{ animationDelay: "-0.15s" }}
        />
        <span className="w-4 h-4 bg-white rounded-full animate-bounce-slow" />
      </div>
    </div>
  );
};

export default Preloader;
