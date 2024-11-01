"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

type TChildren = {
  children: React.ReactNode;
};
const ReduxProvider: React.FC<TChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
