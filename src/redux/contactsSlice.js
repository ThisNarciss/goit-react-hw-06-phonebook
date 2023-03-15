import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts: [],
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // Не використовував можливості бібліотеки Immer
  reducers: {
    addContact: {
      reducer(state, action) {
        return { ...state, contacts: [...state.contacts, action.payload] };
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
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
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
