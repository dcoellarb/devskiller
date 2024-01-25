import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const component = { id: action.payload.id, layout: action.payload.layout, values: {} };
      return {
        items: [...state.items, component], 
        currentlyEdited: component
      }
    },
    updateComponent: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let items = [...state.items]
      if (index >= 0) {
        items = [
          ...state.items.slice(0, index),
          {
            ...items[index],
            values: action.payload.data.values
          },
          ...state.items.slice(index + 1),
        ]
      }
      return {
        items,
        currentlyEdited: null
      }
    },
    removeComponent: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      let items = [...state.items]
      if (index >= 0) {
        items = [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1),
        ]
      }
      return {
        items,
        currentlyEdited: null
      }      
    },
    setEditedComponent: (state, action) => {
      return {
        ...state,
        currentlyEdited: action.payload.component
      }       
    },
  },
})

export const componentsActions = componentsSlice.actions
export const componentsReducer = componentsSlice.reducer
