import {createSlice} from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
  rememberEmail: any;
}

const initialState: State = {
  user: null,
  authToken: null,
  rememberEmail: null
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setRememberEmail: (state, action) => {
      state.rememberEmail = action.payload;
    },
  },
});

export const {setUser, setAuthToken,setRememberEmail } = userReducer.actions;

export default userReducer.reducer;
