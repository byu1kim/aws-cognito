import "../index.css";
import SignupForm from "./SignupForm";
import * as cognito from "../cognito.js";
import { useState } from "react";
import ConfirmationEmail from "./ConfirmationEmail";

const Page = () => {
  const [error, setError] = useState("");
  const [page, setPage] = useState("signup");

  const handleSignup = async (data) => {
    console.log(data);
    try {
      await cognito.signUp(data); //?
      setPage("confirm");
    } catch (e) {
      console.log(e);
    }

    // you can add custom message
  };

  const handleConfirmEmail = async ({ username, code }) => {
    cognito.confirmUser({ username, code });
  };

  const handleLogin = async ({ email, password }) => {
    cognito.signIn(email, password); // after that, cognito generate token automatically
  };

  const CurrentForm = () => {
    switch (page) {
      case "signup":
        return <SignupForm onSubmit={handleSignup} />;
      case "confirm":
        return <ConfirmationEmail onSubmit={handleConfirmEmail} />;
      default:
        break;
    }
  };
  return (
    <div>
      <h1 className="bg-red-300 p-10">Hihihi</h1>
      <CurrentForm />
    </div>
  );
};

export default Page;
