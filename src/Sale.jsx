// שימוש ב
// Hooks:
// use state, use context

import React from "react";
import { useState, useContext, createContext, useEffect } from "react";

const Context1 = createContext();

const Sale = () => {
  const [eat, setEat] = useState(" :24 hours");

  return (
    <Context1.Provider value={eat} className="sales">
      <br />
      <br />
      <br />
      <h5>using hooks:</h5>
      <h1>For LIMITED time {eat}</h1>
      <What5 />
      <br />
      <br />
      <br />
      <br />
    </Context1.Provider>
  );
};

const What4 = () => {
  const [count, setCount] = useState(86400);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 100);
  });

  return <h3>The sale finish in: {count} secounds</h3>;
};

const What5 = () => {
  const eatWhat = useContext(Context1);

  return (
    <>
      <h1> This is the last call {eatWhat}</h1>
      <What4 />
    </>
  );
};

export default Sale;
