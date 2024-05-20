import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BreadCrumb } from "@/types";

interface ConfigState {
  headline: string;
  breadcrumbs: BreadCrumb[];
}

const initialState: ConfigState = {
  headline: "",
  breadcrumbs: [],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setHeadline: (state, action: PayloadAction<string>) => {
      state.headline = action.payload;
    },
    setBreadcrumbs: (state, action: PayloadAction<BreadCrumb[]>) => {
      state.breadcrumbs = action.payload;
    },
  },
});

export const { setHeadline, setBreadcrumbs } = configSlice.actions;

export default configSlice.reducer;
