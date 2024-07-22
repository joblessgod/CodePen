import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Compiler = lazy(() => import("./pages/Compiler"));
const Signup = lazy(() => import("./pages/Auth/Signup"));
const Login = lazy(() => import("./pages/Auth/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MyProfile = lazy(() => import("./pages/MyProfile"));
const Settings = lazy(() => import("./pages/Settings"));

export default function AllRoutes() {
  return (
    <Suspense
      fallback={
        <div>
          <Header />
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pen/:urlId?" element={<Compiler />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
