import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    contacts: [],
    clickedContact: undefined,
    status: 'idle', // for tracking fetch status
    error: null
};

// Async actions for fetching, adding, updating, and deleting contacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        return response.json();
    }
);

export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (updatedContact) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${updatedContact.id}`, {
            method: 'PUT', // Use 'PATCH' if you only want to update specific fields
            body: JSON.stringify(updatedContact),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        return response.json();
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`, {
            method: 'DELETE',
        });
        return contactId;
    }
);

// Slice definition
const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addClickedContact: (state, action) => {
            state.clickedContact = action.payload;
        },
        removeClickedContact: (state) => {
            state.clickedContact = undefined;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.push(action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                );
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
            });
    }
});

export const { addClickedContact, removeClickedContact } = contactSlice.actions;
export default contactSlice.reducer;
