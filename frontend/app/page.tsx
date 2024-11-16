import Spills from "./components/spills/Spills";
import Timer from "./components/timer/Timer";
import TimersList from "./components/timers-list/TimersList";

export default function Home() {
  return <>
    <div className="wrapper">
      <TimersList/>
      <Timer/>
      <Spills/>
    </div>
  </>;
}
