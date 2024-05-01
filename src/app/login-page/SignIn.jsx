import React from "react";
import Input from "../../components/ui/forms/Input";
import Button from "../../components/ui/forms/Button";
import Checkbox from "../../components/ui/forms/Checkbox";

const SignIn = ({registrationState, setRegistrationState}) => {
  return (
    <div className={`w-full h-full px-10 absolute right-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${registrationState ? 'opacity-0 translate-x-full' : 'delay-300 translate-x-0 opacity-100'}`}>
      <h2 className="text-4xl font-bold text-black border-b-4 border-primary w-fit pb-1 text-primary">
        LOGIN
      </h2>
      <span className="mt-3 mb-4">
        Don't have an account yet?{" "}
        <button className="font-medium text-primary" onClick={() => setRegistrationState(true)}>Sign Up</button>
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
        <Button label="Login" type="submit" className="w-full mt-8" />
      </form>
    </div>
  );
};

export default SignIn;
