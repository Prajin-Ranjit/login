import React from "react";
import Input from "../../components/ui/forms/Input";
import Button from "../../components/ui/forms/Button";
import Checkbox from "../../components/ui/forms/Checkbox";

const SignIn = () => {
  return (
    <section className="w-[500px] h-full items-center bg-bg_wave bg-no-repeat bg-contain bg-background shadow-nav flex flex-col justify-center px-10 text-text relative">
      <h2 className="text-4xl font-bold text-black border-b-4 border-primary w-fit pb-1 text-primary">
        LOGIN
      </h2>
      <span className="mt-3 mb-4">
        Don't have an account yet?{" "}
        <button className="font-medium text-primary">Sign Up</button>
      </span>
      <form action="" className="w-full">
        <Input id="email" label="Email" placeholder="email" type="email" />
        <Input
          id="password"
          label="Password"
          placeholder="password"
          type="password"
        />
        <Checkbox label="Remember me" id="remember" />
        <Button label="Login" type="submit" className="w-full mt-6" />
      </form>
    </section>
  );
};

export default SignIn;
