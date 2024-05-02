import React from "react";
import Input from "../../components/ui/forms/Input";
import Button from "../../components/ui/forms/Button";
import { Controller, useForm } from "react-hook-form";
import { registrationFormSchema } from "../../lib/zodSchema/login";
import { zodResolver } from "@hookform/resolvers/zod";

const Registration = ({ registrationState, setRegistrationState }) => {
  const form = useForm({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    form.reset()
    setRegistrationState(false)
  };

  return (
    <div
      className={`w-full h-full px-3 sm:px-6 lg:px-10 absolute right-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        registrationState
          ? "delay-300 translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-secondary border-b-4 border-secondary w-fit pb-1">
        Sign Up
      </h2>
      <span className="mt-3 mb-4 text-center">
        Already have an account?{" "}
        <button
          className="font-medium text-primary"
          onClick={() => setRegistrationState(false)}
        >
          Sign In
        </button>
      </span>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Controller
          control={form.control}
          name="username"
          render={({ field }) => (
            <Input
              id="username"
              label="Username"
              placeholder="username"
              type="username"
              error={form?.formState?.errors?.username?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <Input
              id="register_email"
              label="Email"
              placeholder="email"
              type="email"
              error={form?.formState?.errors?.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <Input
              id="register_password"
              label="Password"
              placeholder="password"
              type="password"
              error={form?.formState?.errors?.password?.message}
              {...field}
            />
          )}
        />
        <Button label="Sign up" type="submit" className="w-full mt-8" />
      </form>
    </div>
  );
};

export default Registration;
