import React from "react";
import Input from "../../components/ui/forms/Input";
import Button from "../../components/ui/forms/Button";

const Registration = ({registrationState, setRegistrationState}) => {
  return (
    <div className={`w-full h-full px-3 sm:px-6 lg:px-10 absolute right-0 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${registrationState ? 'delay-300 translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <h2 className="text-4xl font-bold text-black border-b-4 border-primary w-fit pb-1 text-primary">
        Sign Up
      </h2>
      <span className="mt-3 mb-4 text-center">
        Already have an account? {" "}
        <button className="font-medium text-primary" onClick={() => setRegistrationState(false)}>Sign In</button>
      </span>
      <form action="" className="w-full">
        <Input id="username" label="Username" placeholder="username" type="username" />
        <Input id="register_email" label="Email" placeholder="email regis" type="email" />
        <Input
          id="register_password"
          label="Password"
          placeholder="password"
          type="password"
        />
        <Button label="Sign up" type="submit" className="w-full mt-8" />
      </form>
    </div>
  );
};

export default Registration;
