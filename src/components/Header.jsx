/* eslint-disable no-unused-vars */
import kapbara from "../images/kapbara.jpg";
import { useState, useEffect } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <img src={kapbara} alt="k" />
      <h3>Result</h3>
      <span>Time: {now.toLocaleTimeString()}</span>
    </>
  );
}
