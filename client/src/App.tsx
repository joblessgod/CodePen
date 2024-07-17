import { Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/Compiler";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

export default function App() {
  return (
    <>
      <Toaster richColors position="bottom-right" theme="system" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pen/" element={<Compiler />} />
          <Route path="/pen/:urlId" element={<Compiler />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
