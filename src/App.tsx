import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";
import { useGetUserDetailsQuery } from "./redux/slices/api";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateLoggedIn } from "./redux/slices/appSlice";
import AllRoutes from "./AllRoutes";
import ServerLoading from "./components/ServerLoading";

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

  const [isApiLoading, setIsApiLoading] = useState(false);

  useEffect(() => {
    setIsApiLoading(false);
    console.log("before time");
    console.log(isApiLoading);

    setTimeout(function () {
      setIsApiLoading(prevState => {
        console.log("after time");
        console.log(prevState);
        return true;
      });
    }, 2000);
  }, []);

  return (
    <>
      <>
        <Toaster richColors position="bottom-right" theme="system" />
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AllRoutes />
        </ThemeProvider>
      </>
    </>
  );
}
