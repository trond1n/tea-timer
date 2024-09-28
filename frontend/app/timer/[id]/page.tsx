import TimerHeader from "@/app/components/timer/TimerHeader/TimerHeader";
import { NextPage } from "next";
import Timer from "../page";

interface TimerPageProps {
  params: {
    id: number;
  };
}

const TimerPage: NextPage<TimerPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <TimerHeader />
      <Timer />
    </div>
  );
};

export default TimerPage;
