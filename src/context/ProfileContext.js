import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";

const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) => {
  // State
  const [profile, setProfile] = useLocalStorage("profile", {});
  const navigate = useNavigate();
  console.log(profile);

  // Authentication Handlers
  const signupHandler = (newProfile) => {
    setProfile(newProfile);
    navigate("/setup");
  };

  const setupHandler = () => {
    setProfile({
      ...profile,
      isActive: true,
    });
    navigate("/app/dashboard", { replace: true });
  };

  const loginHandler = (input) => {
    if (input.email === profile.email && input.password === profile.password) {
      setProfile({
        ...profile,
        isActive: true,
      });
      navigate("/app/dashboard", { replace: true });
    } else {
      alert("email or password not correct!");
    }
  };

  const logoutHandler = () => {
    setProfile({
      ...profile,
      isActive: false,
    });
    navigate("/", { replace: true });
  };

  // Profile Handlers

  const editProfileHandler = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const deleteProfileHandler = () => {
    setProfile({});
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        signupHandler,
        setupHandler,
        loginHandler,
        logoutHandler,
        editProfileHandler,
        deleteProfileHandler,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
