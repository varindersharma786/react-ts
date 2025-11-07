import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type User = { email: string } | null;

interface AuthState {
  user: User;
  accessToken: string | null;
  status: "idle" | "checking" | "authenticated" | "unauthenticated";
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkingAuth: (state) => {
      state.status = "checking";
    },
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessToken: string }>
    ) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.status = "authenticated";
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.status = "unauthenticated";
    },
  },
});

export const { checkingAuth, setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
