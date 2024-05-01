import React from "react";
import SignIn from "./SignIn";

const LoginPage = () => {
  return (
    <section className="h-screen bg-bg_shapes bg-cover w-full relative flex justify-end">
      <div className="flex flex-col gap-4 absolute top-52 left-[20%]">
        <h1 className="text-6xl font-bold text-background">Welcome Page</h1>
        <span className="text-2xl font-medium text-background">Sign in to continue access</span>
      </div>
      <SignIn />
    </section>
  );
};

export default LoginPage;
