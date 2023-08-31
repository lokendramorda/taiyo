// contactsSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Contact = {
  firstName: string;
  lastName: string;
  status: string;
};

type ContactsState = Contact[];

interface RootState {
  contacts: ContactsState;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [] as ContactsState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    editContact: (
      state,
      action: PayloadAction<{ index: number; updatedContact: Contact }>
    ) => {
      const { index, updatedContact } = action.payload;
      state[index] = updatedContact;
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

// Export actions and reducer from slice
export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// Export RootState type
export type { RootState };
