import React, { createContext, useState } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Active from "./components/Active";
import Inactive from "./components/Inactive";
import All from "./components/All";
import data from "../data.json";
import ErrorPage from "./components/ErrorPage";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [dataState, setDataState] = useState(data);
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.setAttribute(
      "data-theme",
      colorScheme === "light" ? "dark" : "light"
    );
  };

  return (
    <DataContext.Provider
      value={{
        dataState,
        setDataState,
        colorScheme,
        setColorScheme,
        toggleColorScheme,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<All />} />
      <Route path="active" element={<Active />} />
      <Route path="inactive" element={<Inactive />} />
      <Route path="all" element={<All />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
};

export default App;
