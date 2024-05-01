import React, { useState } from "react";
import SignIn from "./SignIn";
import Registration from "./Registration";

const LoginPage = () => {
  const [registrationState, setRegistrationState] = useState(false);

  return (
    <section className="h-screen bg-bg_shapes bg-cover w-full relative flex justify-end overflow-hidden">
      <div className="flex flex-col gap-4 absolute top-52 left-[20%]">
        <h1 className="text-6xl font-bold text-background">Welcome Page</h1>
        <span className="text-2xl font-medium text-background">
          Sign in to continue access
        </span>
      </div>
      <section className="w-[500px] h-full bg-bg_wave bg-no-repeat bg-contain bg-background shadow-nav text-text relative">
        <SignIn registrationState={registrationState} setRegistrationState={setRegistrationState}/>
        <Registration registrationState={registrationState} setRegistrationState={setRegistrationState}/>
      </section>
    </section>
  );
};

export default LoginPage;
