import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    chats: [

    ],
    newMessage: false
}


export const getChats = createAsyncThunk("get/chats", async (_, thunkAPI) => {
try {
    const res = await fetch("http://localhost:4040/chats", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
      });
    return res.json()
} catch (error) {
    return thunkAPI.rejectWithValue(error);
}
})

export const sendMessage = createAsyncThunk("post/message", async (act, thunkAPI) => {
    try {

        const res = await fetch("http://localhost:4040/chats/send", {
            method: "POST",
            body: JSON.stringify({
                text: act.text,
                clientId: act.clientId
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "authorization": `Bearer ${localStorage.getItem("token")}`
            },
          });
        return res.json()
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
    })

export const newChat = createAsyncThunk("get/newChat", async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:4040/chats/new", {
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "authorization": `Bearer ${localStorage.getItem("token")}`
                },
              });
            return res.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
        })


        
export const getNewMessage = createAsyncThunk("get/newNewMessage", async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:4040/message/getMessage", {
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "authorization": `Bearer ${localStorage.getItem("token")}`
                },
              });
            return res.json()
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
        })


const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers: async (build) => {
        build.addCase(getChats.fulfilled, (state, action) => {

            state.chats = action.payload

        }).addCase(getChats.rejected, (state, action) => {

            state.chats = []

        }).addCase(sendMessage.fulfilled, (state, action) => {
            state.chats = state.chats.map(item => {


                return item._id === action.payload[0]._id ? action.payload[0] : item
            })

        }).addCase(newChat.fulfilled, (state, action) => {
            if(action.payload !== String){
                state.chats = [action.payload]

            }
            
        }).addCase(getNewMessage.fulfilled, (state, action) => {
            console.log(action.payload)
            state.chats = action.payload
            state.newMessage = true
        }).addCase(getNewMessage.pending, (state, action) => {
            state.newMessage = false
        })
    }
})

export default chatsSlice.reducer