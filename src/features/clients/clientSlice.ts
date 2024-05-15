import { Client } from "@/features/clients/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "@/lib/api";
import { FetchStatus } from "@/types";

interface ClientState {
  items: Client[];
  showCreate: boolean;
  page: number;
  status: FetchStatus;
  error: any;
}

const initialState: ClientState = {
  items: [],
  showCreate: false,
  page: 1,
  status: "idle",
  error: null,
};

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    return await api.get("/api/clients");
  },
);

const clientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    toggleCreateClientModal(state) {
      state.showCreate = !state.showCreate;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // @ts-ignore
      .addCase(
        fetchClients.fulfilled,
        (state, action: PayloadAction<Client[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        },
      )
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      });
  },
});

export const { toggleCreateClientModal } = clientSlice.actions;

export default clientSlice.reducer;