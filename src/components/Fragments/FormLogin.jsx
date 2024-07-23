import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    // console.log("login diislik");
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
        window.location.href = "/products";
      } else {
        setLoginFailed(response.response.data);
        // console.log(response.response.data);
      }
    });
  };
  // const emailRef = useRef(null);
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      {/* single closing tag react */}
      <InputForm label="username" type="text" name="username" placeholder="Masukkan Username" title="Username" ref={usernameRef} />
      <InputForm label="password" type="password" name="password" placeholder="Masukkan password" title="Password"></InputForm>
      <Button classname="w-full bg-blue-500" type="submit">
        Login
      </Button>
      {loginFailed && <p className="text-center text-red-500">{loginFailed}</p>}
    </form>
  );
};
export default FormLogin;
