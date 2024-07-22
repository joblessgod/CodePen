import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
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
  }, [data, error]);
  return (
    <>
      <Toaster richColors position="bottom-right" theme="system" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}
