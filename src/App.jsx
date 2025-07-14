import React, { createContext, useState, useEffect } from "react";
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
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [dataState, setDataState] = useState(data);
  const [colorScheme, setColorScheme] = useState(getSystemTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorScheme);
  }, [colorScheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setColorScheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const toggleActiveStatus = (names) => {
    setDataState((prevDatas) => {
      const updated = prevDatas.map((data) =>
        data.name === names ? { ...data, isActive: !data.isActive } : data
      );
      return updated;
    });
  };

  const activeData = dataState.filter((item) => item.isActive === true);
  const inActiveData = dataState.filter((item) => item.isActive === false);

  const removeExtension = (names) => {
    setDataState((preDatas) => {
      const updated = preDatas.filter((item) => item.name !== names);
      return updated;
    });
  };

  return (
    <DataContext.Provider
      value={{
        dataState,
        setDataState,
        colorScheme,
        setColorScheme,
        toggleColorScheme,
        toggleActiveStatus,
        removeExtension,
        activeData,
        inActiveData,
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
