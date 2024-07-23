import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
      {/* single closing tag react */}
      <InputForm label="Fullname" type="text" name="fullname" placeholder="Masukkan Username" title="Fullname" />
      <InputForm label="email" type="email" name="email" placeholder="Masukkan Email" title="Email" />
      <InputForm label="password" type="password" name="password" placeholder="Masukkan password" title="Password"></InputForm>
      <InputForm label="Ulangi password" type="password" name="password" placeholder="Ulangi password" title="confirmPassword"></InputForm>
      <Button classname="w-full bg-blue-500">Register</Button>
    </form>
  );
};
export default FormRegister;
