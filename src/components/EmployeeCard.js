import React from 'react'

function EmployeeCard(props) {

  const onSelected = ()=>{
    props.onClick(props.data.empid)
  }

  return (
    <div className="card card-side bg-slate-400 shadow-xl rounded-md m-2" onClick={onSelected}>
   
    <div className="card-body">
      <h2 className="card-title">{props.data.empid}</h2>
      <p>{props.data.name}</p>
    </div>

  </div>
  )
}

export default EmployeeCard
