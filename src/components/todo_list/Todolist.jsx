import React from "react";
import "./Todolist.scss";

export default function Todolist() {
  return (
    <>
      <div className="Todolist">
        <div className="Todolist__row">
          <div className="Todolist__item">Buy New Laptop</div>
          <div className="Todolist__delete">Del</div>
        </div>
      </div>
    </>
  );
}
