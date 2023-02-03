import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getCart, removeProduct } from "../../features/cartSlice";
import styles from "./Main.module.css";

const Card = (props) => {
  const products = props.products;
  const local = JSON.parse(localStorage.getItem("cartProduct"));
  const token = useSelector((state) => state.cartReducer.token);
  const [localProducts, setLocalProducts] = useState([]);
  const cartUserProducts = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const localProduct = localStorage.getItem("cartProduct") || "[]";
    if (localProduct === "[]") {
      const product = [];
      localStorage.setItem("cartProduct", JSON.stringify(product));
    }
    setLocalProducts(JSON.parse(localProduct));
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getCart(local));
    }
  }, [dispatch]);

  function addProduct(product, count) {
    if (!token) {
      let products = JSON.parse(localStorage.getItem("cartProduct"));
      products.push(product);
      const listLength = products.length - 1;
      const result = products.map((item, i) => {
        if (i === listLength) {
          const cost = { ...item, count: count };
          return cost;
        }
        return item;
      });
      setLocalProducts(result);
      localStorage.setItem("cartProduct", JSON.stringify(result));
    } else {
      dispatch(addCart({ product, count }));
    }
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
    <>
      {products.length > 0
        ? products.map((item) => {

            const buttonStatusLocal = () => {
              const res = localProducts.filter((product) => {
                return product._id === item._id;
              });
              return res.length;
            };

            const buttonStatusUser = () => {
              const res = cartUserProducts.filter((product) => {
                return product.productId._id === item._id;
              });
              return res.length;
            };
            const disabledLocal = buttonStatusLocal();
            const disabledUser = buttonStatusUser();
            return (
              <div key={item._id} className={styles.block_of_searched}>
                <div className={styles.up_block}>
                  <div className={styles.picture_block}>
                    <img
                      className={styles.image_material}
                      src={`${item.productPicture}`}
                      alt=""
                    />
                  </div>
                  <div className={styles.info_block}>
                    <div className={styles.name_block}>
                      <p className={styles.name_product}>{item.productName}</p>
                    </div>
                    <div className={styles.in_up}>
                      <div className={styles.text_of_postav}>
                        <div className={styles.tochki}>
                          <p className={styles.gray_text}>Поставщик:</p>
                          <div className={styles.line}></div>
                          <p>{item.supplier}</p>
                        </div>
                        <div className={styles.tochki}>
                          <p className={styles.gray_text}>Цена: </p>
                          <div className={styles.line}></div>
                          <p>{item.price} </p>
                        </div>
                        <div className={styles.tochki}>
                          <p className={styles.gray_text}>Цена за доставку: </p>
                          <div className={styles.line}></div>
                          <p>1000 руб</p>
                        </div>
                      </div>
                      <div className={styles.whole_price_div}>
                        <p className={styles.whole_price}>
                          Цена всего:{" "}
                          <p className={styles.whole_price_num}>
                            {Number(item.price.split(" ")[0]) * props.count +
                              1000}
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {disabledLocal === 1 || disabledUser === 1 ? (
                  <div className={styles.in_down}>
                    <div className={styles.remove_product}>
                      <input
                        type="button"
                        onClick={() => {
                          removeProducts(item);
                        }}
                        value="УДАЛИТЬ ЗАКАЗ"
                      />
                      <input type="button" value="ЗАКАЗАТЬ" />
                    </div>
                  </div>
                ) : (
                  <div className={styles.in_down}>
                    <div className={styles.inputs_of_card}>
                      <input
                        type="button"
                        onClick={() => {
                          addProduct(item, props.count);
                        }}
                        value="ДОБАВИТЬ К ЗАКАЗУ"
                      />
                      <input type="button" value="ЗАКАЗАТЬ" />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        : null}
    </>
  );
};

export default Card;
