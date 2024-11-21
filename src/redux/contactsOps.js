import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://673ee7e8a9bc276ec4b63317.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            console.log(`Attempting to delete contact with ID: ${contactId}`);
            const response = await axios.delete(`/contacts/${contactId}`);
            console.log('Response:', response.data);
            return response.data;
        } catch (e) {
            console.error(
                `Failed to delete contact with ID ${contactId}:`,
                e.message
            );
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
