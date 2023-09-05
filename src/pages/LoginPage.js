import { useState } from "react";
import { useProfileContext } from "context/ProfileContext";

const LoginPage = () => {
  // Hooks
  const { loginHandler } = useProfileContext();

  // States
  const [userData, setUserData] = useState({
    emailAddress: "",
    password: "",
  });

  // Handlers
  const submitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!userData.emailAddress || !userData.password) {
      alert("Please enter both email address and password");
    } else {
      loginHandler(userData);
    }
    setUserData({});
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitHandler}>
        <div>
          <label>
            Email Address
            <input
              type="text"
              value={userData.emailAddress}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  emailAddress: event.target.value,
                })
              }
            />
          </label>
        </div>

        <div>
          <label>
            Password
            <input
              type="text"
              value={userData.password}
              onChange={(event) =>
                setUserData({
                  ...userData,
                  password: event.target.value,
                })
              }
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <a href={"/signup"}>Sign up</a>
      </p>
    </div>
  );
};

export default LoginPage;
