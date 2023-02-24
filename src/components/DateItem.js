import React, { useEffect, useState } from "react";
import ShiftItem from "./ShiftItem";

function DateItem(props) {
  const [dateitemdata, setData] = useState([]);

  useEffect(() => {
    setData(props.data ? props.data : []);
  }, [props.data]);

  return (
    <div className="card w-50 bg-slate-500 rounded-md">
      <figure>
        <div className="h-10 w-full text-black">
          <h1 className="font-bold">{props.day}</h1>
        </div>
      </figure>
      {dateitemdata.map((item, i) => {
        return <ShiftItem data={item} key={i} />;
      })}
    </div>
  );
}

export default DateItem;
