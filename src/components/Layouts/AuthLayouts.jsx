import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../Context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  console.log(isDarkMode);

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        isDarkMode ? "bg-slate-900" : " "
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute top-2 right-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
          type="button"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
        <p className="mb-8 font-medium text-slate-500">
          Selamat Datang, silahkan {title}!
        </p>
        {children}
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
