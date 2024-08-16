import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appslice';

const appstore = configureStore({
    reducer: {
        data: appReducer,
    }
});

export default appstore;
