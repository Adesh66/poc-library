import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './slices/commonSlice';

const store = configureStore({
    reducer: {
        commonSlice: commonSlice,
        devTools: process.env.NODE_ENV !== 'production',
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['your/action/type'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                // Ignore these paths in the state
                ignoredPaths: ['items.dates'],
            },
        }),
});

export default store;
