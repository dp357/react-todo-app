import { useState } from "react";
import { useProfileContext } from "context/ProfileContext";

const SignupPage = () => {
  // Hooks
  const { signupHandler } = useProfileContext();

  // States
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  });
  const [passwordValidation, setPasswordValidation] = useState("");

  //Handlers
  const submitHandler = (event) => {
    event.preventDefault();

    // Form validation
    if (!user.emailAddress || !user.password) {
      alert("Please enter both email address and password");
    } else if (user.password === passwordValidation) {
      // Add data to context store
      signupHandler(user);

      // Reset states
      setUser({
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        password: "",
      });
      setPasswordValidation("");
    } else {
      // Reset Password
      alert("Password not match");
      setUser({ ...user, password: "" });
      setPasswordValidation("");
    }
  };

  return (
    <div>
      <div>
        <h1>Create a new account</h1>
      </div>

      {/* Signup Form */}
      <form onSubmit={submitHandler}>
        <div>
          <label>
            First name{" "}
            <input
              type="text"
              placeholder="John"
              value={user.firstName}
              onChange={(event) =>
                setUser((user) => ({ ...user, firstName: event.target.value }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Last name{" "}
            <input
              type="text"
              placeholder="Doe"
              value={user.lastName}
              onChange={(event) =>
                setUser((user) => ({ ...user, lastName: event.target.value }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Email address{" "}
            <input
              type="text"
              placeholder="johndoe@mail.com"
              value={user.emailAddress}
              onChange={(event) =>
                setUser((user) => ({
                  ...user,
                  emailAddress: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Phone number{" "}
            <input
              type="text"
              placeholder="(604)-123-4567"
              value={user.phoneNumber}
              onChange={(event) =>
                setUser((user) => ({
                  ...user,
                  phoneNumber: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Password{" "}
            <input
              type="text"
              value={user.password}
              onChange={(event) =>
                setUser((user) => ({ ...user, password: event.target.value }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Re-enter password{" "}
            <input
              type="text"
              value={passwordValidation}
              onChange={(event) => setPasswordValidation(event.target.value)}
            />
          </label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignupPage;
