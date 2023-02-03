import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../features/cartSlice";
import styles from "./Cart.module.css";
import icon from "./cart_icon.svg";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cartReducer.cart);
  const token = useSelector((state) => state.cartReducer.token);
  const local = JSON.parse(localStorage.getItem("cartProduct"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCart(local));
    }
  }, [dispatch]);

  if (local.length === 0 && productsInCart.length === 0) {
    return <div>Корзина пуста</div>;
  }

  return (
    <div className={styles.catr_main_box}>
      <div className={styles.cart_title}>Корзина</div>
      <div className={styles.header_list}>
        <div className={styles.product_title}>Товар</div>
        <div className={styles.price_title}>Цена</div>
        <div className={styles.total_title}>Итого</div>
      </div>
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
                    <div>{item.price}</div>
                    <div>
                      <img src={icon} alt="" />{" "}
                    </div>
                  </div>
                );
              })
            : productsInCart.map((item) => {
                console.log(productsInCart);
                return (
                  <div key={item.productId._id} className={styles.product_box}>
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
                  <div className={styles.total}></div>
                    <div className={styles.remove_icon}>
                      <img src={icon} alt="" />
                    </div>
                  </div>
                );
              })}
        </div>
        <div className={styles.form}>dsfsdfsdf</div>
      </div>
    </div>
    
  );
};

export default Cart;
