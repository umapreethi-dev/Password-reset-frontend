import { useState, useEffect } from "react";
import img from "../images/password.jpg"

export default function PasswordReset(){
  return(
    <div class="container">
        <div className="row">
            <div className="col-md-6"><Form /></div>
            <div className="col-md-6">
                <img src={img} alt="signup" height="400" width="400"></img>
            </div>
        </div>
        
     </div>   
)
}

function Form() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <div class="mb-3">
        <h1>Password Reset</h1>
        <label for="exampleInputEmail1" class="form-label">
          User Name(use your email id)
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
      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => {
          fetch("http://localhost:3001/password-reset", {
            method: "GET",
        })
            .then((data) => data.json())
            .then((data) => console.log(data));
        }}
      >
        Submit
      </button>
    </div>
  );
}
