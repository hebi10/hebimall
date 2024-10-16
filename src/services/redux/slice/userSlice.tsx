import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { decodeJWT } from 'src/utils/decodeJWT';
import { instance as axios } from 'src/services/api';
import { LoginCredentials } from 'src/type/formType';
import { UserData, UserState } from 'src/type/userType';

const initialState: UserState = {
  user: null,
  decodedToken: null,
  loading: false,
  error: null,
};

// 비동기 Thunk 액션 생성
export const loginUser = createAsyncThunk<
  UserData,
  LoginCredentials,
  { rejectValue: string }
>(
  'user/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      return response.data as UserData;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      if (err.response && err.response.data && err.response.data.message) {
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
      state.decodedToken = null;
      state.error = null;
      localStorage.removeItem('token');
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
          const decoded = decodeJWT(token);
          if (decoded && decoded.exp * 1000 > Date.now()) {
            state.decodedToken = decoded;
            console.log('Decoded Token set in Redux:', decoded);
          } else {
            console.warn('Token is expired');
            localStorage.removeItem('token');
          }
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
