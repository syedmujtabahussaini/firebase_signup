import { useState } from "react";
import { register } from "./firebase";

function App1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>User Signup</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        name="email"
      />
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
      />
      <button onClick={() => register(email, password)}>Signin</button>
    </div>
  );
}

export default App1;
