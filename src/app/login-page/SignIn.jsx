import React from "react";
import Input from "../../components/ui/forms/Input";
import Button from "../../components/ui/forms/Button";
import Checkbox from "../../components/ui/forms/Checkbox";
import { loginFormSchema } from "../../lib/zodSchema/login";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../lib/hooks/useApi";
import { toast } from "react-toastify";
import { useSetUserContext } from "../../components/context/LoggedInUserProvider";

const SignIn = ({ registrationState, setRegistrationState }) => {
  // hook for login
  const { mutate, isPending } = useLogin();

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      login_id: "",
      login_password: "",
      remember: false,
      ip_address: "182.93.95.159",
    },
  });

  // use context for storing the logged in user's detail
  const setUser = useSetUserContext();

  const onSubmit = (data) => {
    const { remember, ...formData } = data;

    mutate(formData, {
      onSuccess: (dataSuccess) => {
        form.reset();
        toast.success(dataSuccess?.data[0]?.return_msg);
        setUser(dataSuccess?.data[0])
      },
      onError: (error) => {
        console.log(error?.response?.data);
        toast.error(error?.response?.data?.message);
      },
    });
  };

  return (
    <div
      className={`w-full h-full px-3 sm:px-6 lg:px-10 absolute right-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        registrationState
          ? "opacity-0 translate-x-full"
          : "delay-300 translate-x-0 opacity-100"
      }`}
    >
      <h2 className="text-4xl font-bold text-black border-b-4 border-primary w-fit pb-1 text-primary">
        LOGIN
      </h2>
      <span className="mt-3 mb-4 text-center">
        Don't have an account yet?{" "}
        <button
          className="font-medium text-primary"
          onClick={() => setRegistrationState(true)}
        >
          Sign Up
        </button>
      </span>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          control={form.control}
          name="login_id"
          render={({ field }) => (
            <Input
              id="login_id"
              label="Email"
              placeholder="email"
              type="email"
              error={form?.formState?.errors?.login_id?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={form.control}
          name="login_password"
          render={({ field }) => (
            <Input
              id="login_password"
              label="Password"
              placeholder="password"
              type="password"
              error={form?.formState?.errors?.login_password?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={form.control}
          name="remember"
          render={({ field }) => (
            <Checkbox
              label="Remember me"
              id="remember"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />
        <Button
          label="Login"
          type="submit"
          className="w-full mt-8"
          loading={isPending}
          disabled={isPending}
        />
      </form>
    </div>
  );
};

export default SignIn;
