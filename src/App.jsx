import Button from "./components/Elements/Button";
import FormLogin from "./components/Fragments/FormLogin";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage />
    </div>
  );
}

export default App;
