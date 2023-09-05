import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfileContext } from "context/ProfileContext";

const TodoSettings = () => {
  // Hooks
  const navigate = useNavigate();
  const { profile, editProfileHandler } = useProfileContext();
  const [updatedUser, setUpdatedUser] = useState(profile);

  const submitHandler = (event) => {
    event.preventDefault();
    alert("profile updated");
    editProfileHandler(updatedUser);
    navigate("/app/dashboard");
  };

  return (
    <div>
      <h1>Profile Settings</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            First name{" "}
            <input
              type="text"
              value={updatedUser.firstName}
              onChange={(event) =>
                setUpdatedUser((updatedUser) => ({
                  ...updatedUser,
                  firstName: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Last name{" "}
            <input
              type="text"
              value={updatedUser.lastName}
              onChange={(event) =>
                setUpdatedUser((updatedUser) => ({
                  ...updatedUser,
                  lastName: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <div>
          <label>
            Email address{" "}
            <input
              type="text"
              value={updatedUser.emailAddress}
              onChange={(event) =>
                setUpdatedUser((updatedUser) => ({
                  ...updatedUser,
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
              value={updatedUser.phoneNumber}
              onChange={(event) =>
                setUpdatedUser((updatedUser) => ({
                  ...updatedUser,
                  phoneNumber: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <button type="submit">Save</button>
      </form>

      <div>
        <button onClick={() => setUpdatedUser(profile)}>Discard</button>
      </div>

      <div>
        <button onClick={() => navigate("/app/dashboard")}>Cancel</button>
      </div>
    </div>
  );
};

export default TodoSettings;
