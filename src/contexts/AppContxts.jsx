import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const ChatContext = createContext();

function MusicProvider({ children }) {
  const [addFriend, setAddFriend] = useState(function () {
    try {
      const storeChats = JSON.parse(localStorage.getItem("addFriend"));
      return storeChats && Array.isArray(storeChats) ? storeChats : [];
    } catch {
      return [];
    }
  });
  const [showForm, setShowForm] = useState();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=933372");
  const [userChat, setUserChat] = useState();
  const [emoji, setEmoji] = useState(false);
  const [sendMessage, setSendMessage] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  // const [idChatMessage, setIdChatMessage] = useState({});

  useEffect(
    function () {
      try {
        localStorage.setItem("addFriend", JSON.stringify(addFriend));
        console.log("Saved todos to localStorage:", addFriend);
      } catch (err) {
        console.error("Error loading todos from localStorage:", err);
      }
    },
    [addFriend]
  );

  function showAddForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (message === "") return;
    console.log("Button clicked");
    const id = crypto.randomUUID();
    const newFriend = { id, message, name, image: `${image}?=${id}` };
    onAddFriend(newFriend);

    setImage("https://i.pravatar.cc/48?u=933372");
    setMessage("");
    setName("");
    showAddForm(false);
  }
  function onAddFriend(friends) {
    setAddFriend((addFriend) => [...addFriend, friends]);
  }

  function onDeleteFriend(id) {
    setAddFriend((addFriend) => addFriend.filter((friend) => friend.id !== id));
  }

  function onSendMessage(userMessage) {
    setSendMessage((sendMessage) => [...sendMessage, userMessage]);
  }
  function onAddChat(e) {
    e.preventDefault();
    const newChat = { id: Date.now(), userChat, emoji };
    onSendMessage(newChat);
    setUserChat("");
    setEmoji("");
  }

  function handleEmojiClick(emojiObject) {
    setUserChat((prevChat) => prevChat + emojiObject.emoji);
    setShowEmoji(false);
  }
  return (
    <ChatContext.Provider
      value={{
        onAddFriend,
        showAddForm,
        showForm,
        setMessage,
        setName,
        setImage,
        handleAdd,
        addFriend,
        onDeleteFriend,
        image,
        showEmoji,
        userChat,
        setUserChat,
        onAddChat,
        sendMessage,
        setEmoji,
        handleEmojiClick,
        setShowEmoji,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

function getChats() {
  const context = useContext(ChatContext);
  if (context === undefined) throw new Error("Something went wrong!");
  return context;
}

export { MusicProvider, getChats };
