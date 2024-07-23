const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label className="block mb-2 text-sm font-bold text-slate-700" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
export default Label;
