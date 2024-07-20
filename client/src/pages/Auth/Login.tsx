import Header from "../../components/Header";
import "../pageStyle/grid.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/slices/api";
import { handleError } from "../../utils/handleError";
import { useDispatch } from "react-redux";
import { updateCurrentUser, updateLoggedIn } from "../../redux/slices/appSlice";

const formSchema = z.object({
  userId: z.string(),
  password: z.string(),
});
export default function Signup() {
  const [login, { isloading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "user",
      password: "user1234",
    },
  });

  async function handleLogin(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      const response = await login(values).unwrap();
      dispatch(updateCurrentUser(response));
      dispatch(updateLoggedIn(true));
      navigate("/");
      console.log(response);
    } catch (error) {
      handleError(error);
    }
  }
  return (
    <>
      <Header />

      <section className="h-[calc(100dvh-60px)] grid-bg">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="/codepen_logo.png"
              alt="codepen_logo"
            />
            Code Pen
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleLogin)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="userId"
                    render={({ field }) => (
                      <FormItem className="space-y-4 md:space-y-6">
                        <FormControl>
                          <Input
                            required
                            disabled={isloading}
                            placeholder="Username or Email"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white "
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            required
                            disabled={isloading}
                            type="password"
                            placeholder="Password"
                            {...field}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    loading={isloading}
                    className=" w-full text-white bg-primary-600"
                    type="submit"
                  >
                    Log in
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
