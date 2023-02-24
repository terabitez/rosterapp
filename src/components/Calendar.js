import React, { useEffect, useState } from "react";
import DateItem from "./DateItem";

function Calendar(data) {
  const [shiftData, setShiftData] = useState({});

  const getShiftCards = (_dayta) => {
    let cards = [];

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    for (let i = 0; i < 7; i++) {
      cards.push(<DateItem key={i} data={shiftData[i]} day={daysOfWeek[i]} />);
    }

    return cards;
  };

  const parseShiftData = () => {
    let parsedData = {};
    const _shiftdata = data.shifts;

    for (let i = 0; i < _shiftdata.length; i++) {
      const day = _shiftdata[i].day;
      if (!parsedData[day]) parsedData[day] = [];

      parsedData[day].push(_shiftdata[i]);
    }

    return parsedData;
  };

  useEffect(() => {
    const pdata = parseShiftData();
    setShiftData(pdata);
  }, [data]);

  return (
    <div className="grid grid-cols-7 gap-1 m-4">{getShiftCards(shiftData)}</div>
  );
}

export default Calendar;
