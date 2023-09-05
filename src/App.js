import { Routes, Route } from "react-router-dom";
import { ProfileProvider } from "context/ProfileContext";
import { TodoListProvider } from "context/TodoListContext";
import { CurrentListProvider } from "context/CurrentListContext";

import "App.css";

import PageLayout from "components/layout/PageLayout";
import SetupLayout from "components/layout/SetupLayout";
import AppLayout from "components/layout/AppLayout";

import TodoDashboard from "app/TodoDashboard";
import TodoSettings from "app/TodoSettings";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";
import SetupPage from "pages/SetupPage";
import ErrorPage from "pages/ErrorPage";

const App = () => {
  return (
    <ProfileProvider>
      <TodoListProvider>
        <CurrentListProvider>
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>

            <Route element={<SetupLayout />}>
              <Route path="/setup" element={<SetupPage />} />
            </Route>

            <Route path="/app" element={<AppLayout />}>
              <Route path="/app/dashboard" element={<TodoDashboard />} />
              <Route path="/app/settings" element={<TodoSettings />} />
            </Route>
          </Routes>
        </CurrentListProvider>
      </TodoListProvider>
    </ProfileProvider>
  );
};

export default App;
