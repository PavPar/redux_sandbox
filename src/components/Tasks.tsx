import { Task } from "../features/todo/todoSlice";
import { TaskCard } from "./TaskCard";
import { deleteTask } from "../features/todo/todoSlice";
import { useAppDispatch } from "../hooks";

export type TasksProps = {
  tasks: Task[];
};

export const Tasks = ({ tasks }: TasksProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="tasks__container">
      {tasks.map((task, idx) => (
        <TaskCard
          task={task}
          key={idx}
          onDeleteClick={(task) => {
            console.log(task);
            dispatch(deleteTask(task.id));
          }}
        />
      ))}
    </div>
  );
};
