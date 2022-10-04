import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: number;
  message: string | undefined;
};

export type TodoSliceState = {
  tasks: Task[];
};

const initialState: TodoSliceState = { tasks: [] };

function CounterDecorator(start: number) {
  let counter = start;
  return function wrapper() {
    return counter++;
  };
}

const nextId = CounterDecorator(0);

export const addTaskAsync = createAsyncThunk(
  "tasks/post",
  async (message: Task["message"]) => {
    return new Promise<Task>((res) => {
      setTimeout(() => {
        res({
          id: nextId(),
          message: message,
        } as Task);
      }, 2000);
    });
  }
);

export const todoSlice = createSlice({
  name: "todotasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task["message"]>) => {
      const newTask: Task = {
        id: nextId(),
        message: action.payload,
      };
      state.tasks = [...state.tasks, newTask];
    },
    deleteTask: (state, action: PayloadAction<Task["id"]>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTaskAsync.fulfilled, (state, action) => {
      state.tasks.push(action.payload);
    });
  },
});

export const { addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
