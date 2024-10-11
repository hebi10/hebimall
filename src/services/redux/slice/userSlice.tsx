import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { decodeJWT } from 'src/hooks/useDecodedToken';
import { instance as axios } from 'src/services/api';
import { LoginCredentials, UserData, UserState } from 'src/type/userType';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// 비동기 Thunk 액션 생성
export const loginUser = createAsyncThunk<UserData, LoginCredentials, { rejectValue: string }>(
  '/auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      return response.data as UserData;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue(err.response.data.message);
      } else {
        return thunkAPI.rejectWithValue('예기치 않은 오류가 발생했습니다.');
      }
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getMydata(state, action: PayloadAction<UserData>) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        const token = action.payload.token;
        if (token) {
          localStorage.setItem('token', token);
          decodeJWT(token);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? '로그인 실패';
      });
  },
});

export const { getMydata, logout } = userSlice.actions;

export default userSlice.reducer;
