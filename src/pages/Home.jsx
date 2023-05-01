import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Add_todo from "../components/add_todo/Add_todo";
import Todolist from "../components/todo_list/Todolist";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Add_todo />
        <Todolist />
      </Container>
    </>
  );
}
