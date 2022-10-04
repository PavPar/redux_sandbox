import { Task } from "../features/todo/todoSlice";

export type TaskCardProps = {
  task: Task;
  onDeleteClick: (task: Task) => void;
};

export const TaskCard = ({ task, onDeleteClick }: TaskCardProps) => {
  return (
    <div className="task">
      <h2>{task.message}</h2>
      <p>{`id - ${task.id}`}</p>
      <button
        onClick={() => {
          onDeleteClick(task);
        }}
      >
        delete
      </button>
    </div>
  );
};
