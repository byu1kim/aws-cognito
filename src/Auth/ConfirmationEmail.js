import { useState } from "react";

function ConfirmationEmail({ onSubmit }) {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Hi");
    onSubmit({ code, email });
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col mx-auto max-w-xl bg-gray-200">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />

      <label htmlFor="code">code</label>
      <input
        type="text"
        name="code"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        required
      />
      <button type="submit" className="bg-rose-200 w-40 m-3 mx-auto hover:cursor-pointer hover:bg-rose-400"></button>
    </form>
  );
}

export default ConfirmationEmail;
