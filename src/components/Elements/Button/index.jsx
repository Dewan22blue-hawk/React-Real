// import React from "react";
// class Button extends React.Component {
//   render() {
//     return (
//       <button className="h-10 px-6 font-semibold text-white bg-black rounded-md" type="submit">
//         Login
//       </button>
//     );
//   }
// }
// function ButtonBlack() {
//   return (
//     <button className="h-10 px-6 font-semibold text-white bg-black rounded-md" type="submit">
//       Black
//     </button>
//   );
// }
const Button = (props) => {
  // distructuring props
  const { children = "Undefined", classname = "bg-slate-500", onClick = () => {}, type = "button" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
