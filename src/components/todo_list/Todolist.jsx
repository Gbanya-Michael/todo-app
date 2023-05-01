import React from "react";
import "./Todolist.scss";

export default function Todolist() {
  return (
    <>
      <div className="Todolist">
        <div className="Todolist__row">
          <div className="Todolist__item">Buy new laptop</div>
          <div className="Todolist__delete">Del</div>
        </div>
        <div className="Todolist__row">
          <div className="Todolist__item">Make codehance project</div>
          <div className="Todolist__delete">Del</div>
        </div>
        <div className="Todolist__row">
          <div className="Todolist__item">Revise research work</div>
          <div className="Todolist__delete">Del</div>
        </div>
      </div>
    </>
  );
}
