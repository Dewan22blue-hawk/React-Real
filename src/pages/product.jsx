import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
// import Counter from "../components/Fragments/Counter";

// import Counter from "../components/Fragments/Counter";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu baru",
//     price: 1000000,
//     image: "/public/images/shoes.jpg",
//     description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
//           to using 'Content here, content here'.`,
//   },
//   {
//     id: 2,
//     name: "Sepatu lama",
//     price: 500000,
//     image: "/public/images/shoes.jpg",
//     description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
//           to using 'Content here, content here'.`,
//   },
//   {
//     id: 3,
//     name: "Sepatu PDI",
//     price: 50000,
//     image: "/public/images/shoes.jpg",
//     description: `Ini adalah sepatu baru dari pratai PDI yang sangat egois`,
//   },
// ];
// const token = localStorage.getItem("token");
const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  // const [username, setUsername] = useState("");
  const username = useLogin();
  // useEffect(() => {
  //   // didMount()
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = "/login";
  //   }
  // }, []);
  useEffect(() => {
    // buat function callback untuk menangkap data
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + item.qty * product.price;
  //     }, 0);

  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  //   // cart itu adalah dependency atau perubahan apa yang kita pantau, jika cartnya berubah maka akan mengubah sesuatu yang diubah itu statenya
  // }, [cart, products]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // hooks tools react menggunakan useState
  // const handleAddToCart = (id) => {
  //   // const { name} = props;
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };
  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   // setCart(cartRef.current);
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };
  const totalPriceRef = useRef(null);
  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  return (
    <Fragment>
      <div className="flex items-center justify-end h-20 px-10 text-white bg-blue-600">
        {username}
        <Button classname="ml-5 bg-black " onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6 ">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id}></CardProduct.Header>
                <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                {/* <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer> */}
                <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
                {/* <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCartRef}></CardProduct.Footer> */}
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="mb-2 ml-5 text-3xl font-bold text-blue-600">Cart</h1>
        </div>
        {/* <div>
        <Counter></Counter>
      </div> */}
      </div>
      {/* <div className="flex justify-center mt-5 mb-5">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};
export default ProductsPage;
