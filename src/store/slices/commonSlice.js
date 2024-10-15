import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import { getFeaturedContent } from '@/services/apiservices';
//

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        updateLoading(state, { payload }) {
            return { ...state, loading: payload };
        },
        updateFeaturedList(state, { payload }) {
            return { ...state, featuredList: payload };
        },
    },
});
export const { updateLoading, updateFeaturedList } = commonSlice.actions;

export const commonSelector = (state) => state.commonSlice;
export default commonSlice.reducer;

function getHotelID() {
    const hotelID = localStorage.getItem(HOTEL_ID);
    if (hotelID) return hotelID;
    return '';
}

export function fetchFeaturedContent() {
    return async (dispatch) => {
        dispatch(updateLoading(true));
        try {
            const response = await getFeaturedContent();
            dispatch(updateFeaturedList(response));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(updateLoading(false));
        }
    };
}
