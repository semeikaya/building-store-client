import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart, removeProduct } from "../../features/cartSlice";
import styles from "./Cart.module.css";
import icon from "./cart_icon.svg";
const Cart = () => {
  const productsInCart = useSelector((state) => state.cartReducer.cart);
  console.log(productsInCart);
  const token = useSelector((state) => state.cartReducer.token);
  const local = JSON.parse(localStorage.getItem("cartProduct"));
  const dispatch = useDispatch();
  const [localProducts, setLocalProducts] = useState([]);
  const loading = useSelector((state) => state.cartReducer.loading);
  const removeLoader = useSelector((state) => state.cartReducer.removeLoader);
  const totalPrice = productsInCart.reduce((prev, item) => {
    return (
      prev + (Number(item.productId.price.split(" ")[0]) * item.count + 1000)
    );
  }, 0);

  useEffect(() => {
    if (token) {
      dispatch(getCart(local));
    }
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.load_wrapper}>
        <span className={styles.loader}>
          <span className={styles.loader_inner}></span>
        </span>
      </div>
    );
  }

  function removeProducts(product) {
    if (!token) {
      let products = JSON.parse(localStorage.getItem("cartProduct"));
      const result = products.filter((item, i) => {
        return item._id !== product._id;
      });
      setLocalProducts(result);
      localStorage.setItem("cartProduct", JSON.stringify(result));
    } else {
      let products = JSON.parse(localStorage.getItem("cartProduct"));
      const result = products.filter((item, i) => {
        return item._id !== product._id;
      });
      setLocalProducts(result);
      localStorage.setItem("cartProduct", JSON.stringify(result));
      dispatch(removeProduct(product._id));
    }
  }

  return (
    <div className={styles.catr_main_box}>
      <div className={styles.cart_title}>??????????????</div>
      <div className={styles.header_list}>
        <div className={styles.product_title_box}>
          <div className={styles.product_title}>??????????</div>
        </div>
        <div className={styles.price_title}>????????</div>
        <div className={styles.total_title}>??????????</div>
      </div>
      {productsInCart.length > 0 || local.length > 0 ? (
        <div className={styles.products_and_form}>
          <div className={styles.products_list}>
            {!token
              ? local.map((item) => {
                  return (
                    <div className={styles.product_box}>
                      <div className={styles.name_and_pic_box}>
                        <div className={styles.product_image_box}>
                          <img
                            className={styles.product_image}
                            src={item.productPicture}
                            alt=""
                          />
                        </div>
                        <div className={styles.product_name}>
                          {item.productName}
                        </div>
                      </div>
                      <div className={styles.price}>{item.price}</div>
                      <div className={styles.total}>
                        {Number(item.price.split(" ")[0]) * item.count + 1000}
                      </div>
                      <button
                        onClick={() => {
                          removeProducts(item);
                        }}
                        className={styles.remove_icon}
                      >
                        <img src={icon} alt="" />
                      </button>
                    </div>
                  );
                })
              : productsInCart.map((item) => {
                  return (
                    <div
                      key={item.productId._id}
                      className={styles.product_box}
                    >
                      <div className={styles.name_and_pic_box}>
                        <div className={styles.product_image_box}>
                          <img
                            className={styles.product_image}
                            src={item.productId.productPicture}
                            alt=""
                          />
                        </div>
                        <div className={styles.product_name}>
                          {item.productId.productName}
                        </div>
                      </div>
                      <div className={styles.price}>{item.productId.price}</div>
                      <div className={styles.total}>
                        {Number(item.productId.price.split(" ")[0]) *
                          item.count +
                          1000}
                      </div>
                      {removeLoader ? (
                        <div className={styles.remove_loader}>
                          <div></div>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            removeProducts(item.productId);
                          }}
                          className={styles.remove_icon}
                        >
                          <img src={icon} alt="" />
                        </button>
                      )}
                    </div>
                  );
                })}
            <div className={styles.total_end}>??????????: {totalPrice} ??????.</div>
          </div>

          <div className={styles.form}>
            <div className={styles.order_title}>???????????????? ??????????</div>
            <div className={styles.title}>
              <div>??????</div>
              <input
                className={styles.input_order}
                type="text"
                placeholder="???????? ??????"
              />
            </div>
            <div className={styles.title}>
              <div>??????????????</div>
              <input
                className={styles.input_order}
                type="text"
                placeholder="???????? ??????????????"
              />
            </div>
            <div className={styles.title}>
              <div>??????????????</div>
              <input
                className={styles.input_order}
                type="text"
                placeholder="+7"
              />
            </div>
            <div className={styles.title}>
              <div>EMAIL</div>
              <input
                className={styles.input_order}
                type="text"
                placeholder="+7"
              />
            </div>
            <div className={styles.title}>
              <input
                className={styles.button_order}
                type="button"
                value="???????????????? ??????????"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.cart_is_empty}>?????????????? ??????????</div>
      )}
    </div>
    
  );
};

export default Cart;
