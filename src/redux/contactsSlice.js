import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // Не використовував можливості бібліотеки Immer
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.items.push(payload);
        // return { ...state, items: [...state.items, payload] };
      },
      prepare(obj) {
        return {
          payload: {
            id: nanoid(),
            ...obj,
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      // return {
      //   ...state,
      //   items: state.items.filter(item => item.id !== payload),
      // };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
