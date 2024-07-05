import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useWindowResize from "./useWindowResize";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { width } = useWindowResize();

  useEffect(() => {
    if (width <= 768) {
      setTheme("light");
    }
  }, [width, setTheme]);

  const toggleTheme = () => {
    if (width > 768) {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  };

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>{`Current theme is ${theme}`}</h1>
    </div>
  );
};

export default App;
