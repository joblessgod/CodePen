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
import { handleError } from "../../utils/handleError";
import { useSignupMutation } from "../../redux/slices/api";
import { toast } from "sonner";
import { updateCurrentUser, updateLoggedIn } from "../../redux/slices/appSlice";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";

const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function Login() {
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function handleSignup(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await signup(values).unwrap();
      dispatch(updateCurrentUser(response));
      dispatch(updateLoggedIn(true));
      navigate("/");
      toast.success("Successfully created an account!");
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
                Create an account
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSignup)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem className="space-y-4 md:space-y-6">
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Username"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-4 md:space-y-6">
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            placeholder="Email"
                            {...field}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white "
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
                            disabled={isLoading}
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
                  <div className="flex items-start justify-between">
                    <div className="flex items-center h-5">
                      <div className="flex gap-1">
                        <Input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          checked
                          title="You can't disabled it!"
                          className=" w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">
                          Remember me
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    loading={isLoading}
                    disabled={isLoading}
                    className="w-full text-white bg-primary-600"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Log in
                    </Link>
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
