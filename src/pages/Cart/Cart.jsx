import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const cartProducts = JSON.parse(localStorage.getItem("cartProduct"));
  if (cartProducts === null) {
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
          {cartProducts.map((item) => {
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
                  <div className={styles.product_name}>{item.productName}</div>
                </div>
                <div>{item.price}</div>
                <div></div>
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
