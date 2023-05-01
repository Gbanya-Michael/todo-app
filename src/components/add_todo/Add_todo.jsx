import React from "react";
import "./Add_todo.scss";

export default function Add_todo() {
  return (
    <>
      <div className="addtodo">
        <input
          className="addtodo__input"
          type="text"
          placeholder="Add a todo"
        />

        <button className="addtodo__button">+</button>
      </div>
    </>
  );
}
