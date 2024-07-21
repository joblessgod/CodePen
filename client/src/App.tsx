import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { useEffect } from "react";
import { useGetUserDetailsQuery } from "./redux/slices/api";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateLoggedIn } from "./redux/slices/appSlice";
import AllRoutes from "./AllRoutes";

export default function App() {
  const { data, error } = useGetUserDetailsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(updateCurrentUser(data));
      dispatch(updateLoggedIn(true));
    } else {
      dispatch(updateCurrentUser({}));
      dispatch(updateLoggedIn(false));
    }
    console.log(data);
    console.log(error);
  }, [data, error]);
  return (
    <>
      <Toaster richColors position="bottom-right" theme="system" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Header /> */}
        <AllRoutes/>
      </ThemeProvider>
    </>
  );
}
