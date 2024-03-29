"use client";
import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import { store } from "@/redux/store/store";
import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

export const AppProviders: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
