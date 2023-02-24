import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import EmployeeCard from "./EmployeeCard";


function MainBoard() {
  const [employees, setEmployees] = useState([]);
  const [roles, setRoles] = useState([]);
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    let endpoints = [
      "./mock_data/employees.json",
      "./mock_data/roles.json",
      "./mock_data/shifts.json",
    ];

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread((_employees, _roles, _shifts) => {
        setEmployees(_employees.data);
        setRoles(_roles.data);
        setShifts(_shifts.data);
      })
    );
  }, []);

  const getShitfData = () => {
    let data = [];
    console.log(shifts);
    for (let i = 0; i < shifts.length; i++) {
      const name = employees.find((p) => p.id === shifts[i].employee_id);
      const role = roles.find((p) => p.id === shifts[i].role_id);
      const st = moment(shifts[i].start_time);
      const et = moment(shifts[i].end_time);
      const date = moment(st).format("YYYY-MM-DD");
      const starttime = moment(st).format("HH:mm");
      const endttime = moment(et).format("HH:mm");
      const day = moment(st).day();

      data.push({
        employee_name: name.first_name + " " + name.last_name,
        start_time: starttime,
        datestring: date,
        day: day,
        role: role,
        end_time: endttime,
        shit_id: shifts[i].id,
        break_duration: shifts[i].break_duration,
      });
    }

    return data;
  };

  const employeeSelected = (id) => {
    // update calendar items here
    console.log(id);
  };

  const getEmployeeCards = () => {
    let cards = [];

    for (let i = 0; i < employees.length; i++) {
      let data = {
        empid: employees[i].id,
        name: employees[i].first_name + " " + employees[i].last_name,
      };

      cards.push(
        <EmployeeCard
          data={data}
          key={i}
          onClick={(_data) => employeeSelected(_data)}
        />
      );
    }

    return cards;
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Show Employees
        </label>

        <Calendar shifts={getShitfData()} />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-slate-600  text-black">
          {getEmployeeCards()}
        </ul>
      </div>
    </div>
  );
}

export default MainBoard;
