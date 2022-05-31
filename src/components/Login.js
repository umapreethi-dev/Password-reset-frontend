import {useState, useEffect} from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const userData = {
    username: username,
    password: password
  }
  console.log(userData)
  return (
    <div>
      
        <div class="mb-5">
          <h1>Sign Up</h1>
          <label for="exampleInputEmail1" class="form-label">
           User Name
          </label>
          <input
            type="email"
            class="form-control"
            name="username"
            id="username"
            aria-describedby="emailHelp"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div class="mb-5">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary"
        onClick={()=> {
          fetch("http://localhost:3001/sign_up", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((data)=> data.json())
          .then((data)=> console.log(data)) 
        }}
        >
          Submit
        </button>
     
    </div>
  );
}
