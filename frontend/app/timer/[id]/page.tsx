import TimerHeader from "@/app/components/timer/TimerHeader/TimerHeader";
import { NextPage } from "next";
import Timer from "../page";

interface TeaPageProps {
  params: {
    id: number;
  };
}

const TeaPage: NextPage<TeaPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <TimerHeader />
      <Timer />
    </div>
  );
};

export default TeaPage;
