import React, { useState, useEffect } from "react";
import Main from "./Components/Main";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark').matches) {
        setTheme('dark')
    } else {
        setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="w-screen h-screen flex justify-center align-middle text-sm wrapper dark:text-white dark:bg-[#131419] bg-[#f6f5f8] font-normal tracking-wide">
      <div className="fixed w-screen h-screen z-40">
        {theme === 'light' ? 
        (<button className="absolute top-6 border-none text-[#4b0082] right-6 rounded-full px-4 py-2 border-2 switch-dark" onClick={handleThemeSwitch}>
          Dark Mode
        </button>) :
        (<button className="absolute top-6 border-none text-[#4b0082] right-6 rounded-full px-4 py-2 border-2 switch-light" onClick={handleThemeSwitch}>
          Light Mode
        </button>)
        }
      </div>
      <Main theme={theme}/>
    </div>
  );
};

export default App;
