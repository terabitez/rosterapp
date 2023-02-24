import moment from "moment/moment";

function ShiftItem(props) {
  return (
    <div className="card w-50  bg-slate-400 shadow-xl rounded-md m-2">
      <div className="card-body text-black">
        <p>{moment(props.data.datestring).format("MMMM DD")}</p>
        <h2 className="card-title">{props.data.employee_name}</h2>
        <p>{props.data.role.name}</p>
        <p>start: {props.data.start_time}</p>
        <p>end: {props.data.end_time}</p>
      </div>
    </div>
  );
}

export default ShiftItem;
