import React, { useState } from "react";
import SignIn from "./SignIn";
import Registration from "./Registration";

const LoginPage = () => {
  const [registrationState, setRegistrationState] = useState(false);

  return (
    <section className="h-screen bg-bg_shapes bg-cover w-full relative flex justify-end overflow-hidden">
      <div className="flex flex-col gap-4 absolute top-56 lg:top-64 left-[8%] xl:left-[15%]">
        <h1 className="text-4xl lg:text-6xl font-bold text-background">Welcome Page</h1>
        <div className="relative">
          <p className={`absolute text-lg lg:text-2xl font-medium text-background transition-all duration-700 ease-linear ${registrationState ? 'opacity-0 translate-y-full' : 'delay-300 opacity-100 translate-y-0'}`}>
            <span className="text-primary">Sign in</span> to continue access
          </p>
          <p className={`absolute text-lg lg:text-2xl font-medium text-background transition-all duration-700 ease-linear ${registrationState ? 'delay-300 opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
            <span className="text-primary">Register</span> to access all the features of our service.
          </p>
        </div>
      </div>
      <section className="w-full md:w-[400px] lg:w-[450px] xl:w-[500px] h-full bg-bg_wave bg-no-repeat bg-contain bg-background shadow-nav text-text relative">
        <SignIn
          registrationState={registrationState}
          setRegistrationState={setRegistrationState}
        />
        <Registration
          registrationState={registrationState}
          setRegistrationState={setRegistrationState}
        />
      </section>
    </section>
  );
};

export default LoginPage;
