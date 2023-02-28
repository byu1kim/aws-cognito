import { useState } from "react";

function SignupForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hi");
    onSubmit({ username, email, password, passwordConfirm });
  };
  return (
    <form onSubmit={handleSubmit} className="p-5 flex flex-col mx-auto max-w-xl bg-gray-200">
      <label htmlFor="username">Name</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />

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

      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

      <label htmlFor="passwordconfirm">Password confirmation</label>
      <input
        type="passwordconfirm"
        name="passwordconfirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />

      <button type="submit" className="bg-rose-200 w-40 m-3 mx-auto hover:cursor-pointer hover:bg-rose-400">
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
