import {createSlice} from '@reduxjs/toolkit';

// 컴포넌트 전체에서 공유할 수 있는 전역 상태
const initialState = {
  name: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: builder => {},
});
