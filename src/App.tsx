import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Tasks } from "./components/Tasks";

import { addTask, addTaskAsync } from "./features/todo/todoSlice";
import { useAppSelector, useAppDispatch } from "./hooks";

function App() {
  const [textAreaValue, setTextAreaValue] = useState<string | undefined>();

  const tasks = useAppSelector((state) => state.todotasks.tasks);
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(addTask(textAreaValue));
    console.log({
      id: 0,
      message: textAreaValue,
    });
    setTextAreaValue("");
  }

  return (
    <section className="tasks">
      <div>
        <Form
          onSubmit={handleSubmit}
          onTextAreaChange={(value) => {
            setTextAreaValue(value || undefined);
          }}
          textAreaValue={textAreaValue}
          onGetClick={() => {
            dispatch(addTaskAsync(textAreaValue || undefined));
          }}
        />
      </div>
      <Tasks tasks={tasks} />
    </section>
  );
}

export default App;
