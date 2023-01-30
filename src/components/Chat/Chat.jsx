import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChats,
  getNewMessage,
  newChat,
  sendMessage,
} from "../../features/chatSlice";
import styles from "./Chat.module.css";

const Chat = () => {
  const messages = useRef();
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chatsReducer.chats);
  const newMessages = useSelector((state) => state.chatsReducer.newMessage);

  const [isOpen, open] = useState("close");
  const [anim, setAnim] = useState("");
  const [text, setText] = useState("");
  const [chat, setChats] = useState(chats);
  const [vhod, setVhod] = useState("false");
  const [scroll, setScroll] = useState("");
  const [send, setSend] = useState([undefined, 0]);

  console.log(newMessages);

  useEffect(() => {
    if (send[0] != undefined) {
      setChats(
        chats.filter((item) => {
          return item.client === send[0];
        })
      );
    } else {
      setChats(chats);
    }

    setTimeout(() => {
      setScroll("scroll");
      setTimeout(() => {
        setScroll("");
      }, 10);
    }, 10);
  }, [chats]);

  if (newMessages === true) {
    dispatch(getChats());
    dispatch(getNewMessage());
    if (send[0] != undefined) {
      setChats(
        chats.filter((item) => {
          return item.client === send[0];
        })
      );
    }
  }

  const scroll_by = () => {
    setTimeout(() => {
      setScroll("scroll");
      setTimeout(() => {
        setScroll("");
      }, 10);
    }, 1000);
  };

  if (messages.current != undefined && scroll === "scroll") {
    messages.current.scrollTo(0, 999000);
  }

  const handleSendMessage = (text, clientId) => {
    dispatch(sendMessage({ text, clientId }));
    setText("");

    setTimeout(() => {
      setScroll("scroll");
      setTimeout(() => {
        setScroll("");
      }, 10);
    }, 40);
    setSend([clientId, 0]);
  };

  const handleVhod = () => {
    setVhod("true");
    setTimeout(() => {
      setVhod("false");
    }, 4000);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const filterChats = (id, clientId) => {
    setChats(
      chats.filter((item) => {
        return item._id === id ? item : null;
      })
    );
    setTimeout(() => {
      setScroll("scroll");
      setTimeout(() => {
        setScroll("");
      }, 10);
    }, 40);
    setSend([clientId, 0]);
  };

  useEffect(() => {
    dispatch(newChat());
    dispatch(getChats());
    dispatch(getNewMessage());
  }, [dispatch]);

  const handleAnim = () => {
    if (anim === "anim") {
      setAnim("");
    } else {
      setAnim("anim");
    }

    setTimeout(() => {
      open("");
      setAnim("");
    }, 1000);
  };

  return (
    <>
      {isOpen === "open" && chats.length > 0 ? (
        <div
          className={`${styles.chat} ${
            anim === "anim" ? styles.anim_close : null
          }`}
        >
          <div className={styles.header}>
            {chat.length !== 0 && chat.length !== 1 ? (
              <button onClick={() => handleAnim()} className={styles.close}>
                ⌵
              </button>
            ) : (
              <>
                <button onClick={() => handleAnim()} className={styles.close}>
                  ⌵
                </button>
                {chats.length !== 1 ? (
                  <button
                    onClick={() => setChats(chats)}
                    className={styles.close}
                  >
                    ←
                  </button>
                ) : null}
              </>
            )}
          </div>
          <div ref={messages} className={styles.messages}>
            {chat.length === 1
              ? chat.map((item) => {
                  return item.messages.map((item) => {
                    return (
                      <>
                        <div className={styles.mess}>
                          <div className={styles.name_block}>
                            <p>{item.name}</p>
                          </div>
                          <div className={styles.text_block}>
                            <p className={styles.message}>{item.text}</p>
                          </div>
                        </div>
                      </>
                    );
                  });
                })
              : chats.map((item, index) => {
                  return (
                    <input
                      type="button"
                      className={styles.chat_blocks}
                      onClick={() => filterChats(item._id, item.client)}
                      value={index}
                    />
                  );
                })}
          </div>

          {chat.length === 1 ? (
            chat.map((item) => {
              return (
                <div className={styles.messages_inputs}>
                  <input
                    type="text"
                    value={text}
                    onChange={handleText}
                    className={styles.textInputMessage}
                  />
                  <div className={styles.block_inputButton}>
                    <input
                      type="button"
                      onClick={() =>
                        text.length > 0
                          ? handleSendMessage(text, item.client)
                          : null
                      }
                      className={styles.sendInputMessage}
                      value="➤"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className={styles.messages_inputs}></div>
          )}
        </div>
      ) : (
        <input
          type="button"
          className={`${styles.flag} ${vhod === "true" ? styles.vhod : null}`}
          onClick={() => {
            open("open");
            scroll_by();
            if (chats.length < 1 && vhod !== "true") {
              handleVhod();
            }
            setChats(chats);
          }}
          value="Помошь      сначала войдите в аккаунт"
        />
      )}
    </>
  );
};

export default Chat;
