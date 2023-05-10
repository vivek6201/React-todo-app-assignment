import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo:[],
}

export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    addTodo : (state,action)=>{
      state.todo.push(action.payload);
    },
    removeTodo:(state,action) =>{
      state.todo = state.todo.filter((todo) =>{
        return todo.id !== action.payload
      })
    },
    updateTodo : (state,action) =>{
      state.todo.forEach((todo,index) =>{
        if(todo.id === action.payload.id){
          todo.title = action.payload.title;
          todo.status = action.payload.status;
          todo.dueDate = action.payload.dueDate;
        }
      })
    }
  }
})

export const {removeTodo,addTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer