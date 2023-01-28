import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getChats, sendMessage } from "../../features/chatSlice";
import styles from "./Chat.module.css"

const Chat = () => {
    const dispatch = useDispatch()
    const chats = useSelector(state => state.chatsReducer.chats)
    console.log(chats)

    const [isOpen, open] = useState("close")
    const [anim, setAnim] = useState("")
    const [text, setText] = useState("")
    const [chat, setChats] = useState(chats)
    


    const handleSendMessage = (text, clientId, name) => { 
        dispatch(sendMessage({text, clientId}))
        setText("")
        setChats(chat.map(item => {
            item.messages.push({text, sender: clientId, name})
            return item
        }))

    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const filterChats = (id) => {
        setChats(chats.filter(item => {
            return item._id === id ? item : null
        }))
    }

    useEffect(() => {
        dispatch(getChats())
    }, [dispatch]);

    const handleAnim = () => {
        if(anim === "anim"){
            setAnim("")
        }else{
            setAnim("anim")
        }
        
        setTimeout(() => {
            open("")
            setAnim("")
        }, 1000)
    }

    return <>
    { isOpen === "open" ?  <div className={`${styles.chat} ${anim === "anim" ? styles.anim_close : null}`}>
        <div className={styles.header}>
            {chat.length !== 1 ? <button onClick={() => handleAnim()} className={styles.close} >⏝</button> : 
            <><button onClick={() => handleAnim()} className={styles.close} >⏝</button>
            <button onClick={() => setChats(chats)} className={styles.close} >←</button>
            </>} 
        </div>
        <div className={styles.messages}>
        {chat.length === 1 ? chat.map(item => {
            return item.messages.map(item => {
                return <>
                <div className={styles.mess}>
                <div className={styles.name_block}>
                    <p>{item.name}</p>
                </div>
                <div className={styles.text_block}>
                    <p className={styles.message}>{item.text}</p>
                </div>
                </div>
                </>
            })
        }) : chats.map((item, index) => {
            return <input type="button" className={styles.chat_blocks} onClick={() =>  filterChats(item._id)} value={index} />
        })}
        
        </div>
        
            {chat.length === 1 ? chat.map(item => { 
                return <div className={styles.messages_inputs}>
            <input type="text" value={text} onChange={handleText} className={styles.textInputMessage}/>
            <div className={styles.block_inputButton}>
            <input type="button" onClick={() => handleSendMessage(text, item.client, item.name)} className={styles.sendInputMessage} value="➤"/>
            </div>
            
        </div>
            })  : <div className={styles.messages_inputs}></div>}
       
    </div> : <input type="button" className={styles.flag} onClick={() => open("open")} value="Помошь"/>}
    </>
}

export default Chat