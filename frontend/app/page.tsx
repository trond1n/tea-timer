"use client";
import { useState } from "react";
import Spills from "./components/spills/Spills";
import Timer from "./components/timer/Timer";
import TimersList from "./components/timers-list/TimersList";
import About from "./components/about/About";

export default function Home() {
  const [isShowAbout, setIsShowAbout] = useState<boolean>(true);
  return (
    <>
      <div className="wrapper">
        <TimersList />
        <Timer onOpen={() => setIsShowAbout(true)} />
        {isShowAbout ? (
          <About onClose={() => setIsShowAbout(false)} />
        ) : (
          <Spills />
        )}
      </div>
    </>
  );
}
