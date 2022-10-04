import { FormEvent } from "react";

export type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onGetClick: () => void;
  onTextAreaChange: (value: string | null) => void;
  textAreaValue: string | number | undefined;
};

export const Form = ({
  onSubmit,
  onGetClick,
  onTextAreaChange,
  textAreaValue,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="tasks__form">
      <textarea
        value={textAreaValue}
        onChange={(e) => {
          onTextAreaChange(e.target.value);
        }}
      />
      <button type="submit">Добавить задачу</button>
      <button
        type="button"
        onClick={() => {
          onGetClick();
        }}
      >
        Добавить задачу ASYNC
      </button>
    </form>
  );
};
