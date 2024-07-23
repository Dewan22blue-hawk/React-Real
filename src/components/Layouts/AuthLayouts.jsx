import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-xs">
        <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
        <p className="mb-8 font-medium text-slate-500">Selamat Datang, silahkan {title}!</p>
        {children}
        {/* <p className="text-sm text-center mt-7">
          {type === "login" ? "Belum punya akun? Silahkan " : "Sudah punya akun? Silahkan "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Login
            </Link>
          )} */}
        {/* <Link to={type === "login" ? "/register" : "/login"} className="font-bold text-blue-600">
            {type === "login" ? "Register" : "Login"}
          </Link> */}
        {/* </p> */}

        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm text-center mt-7">
        Belum punya akun? Silahkan{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm text-center mt-7">
        Sudah punya akun? Silahkan{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
