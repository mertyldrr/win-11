import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

export const DateTime = () => {
  const [time, setTime] = useState<Moment>(moment());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment()); // update state with current time every minute
    }, 1000);
    return () => clearInterval(interval); // clear interval on component unmount
  }, [time]);

  return (
    <div className="flex flex-col">
      <p className="text-sm">{moment(time).format("HH:mm")}</p>
      <p className="text-sm">{moment(time).format("DD/MM/YYYY")}</p>
    </div>
  );
};
