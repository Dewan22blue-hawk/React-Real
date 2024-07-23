import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  return (
    <input
      className="block w-full px-3 py-2 mt-1 text-sm border rounded-md border-slate-300 text-slate-600 focus:outline-none focus:ring-blue-500 placeholder:opacity-50"
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
    />
  );
});

export default Input;
