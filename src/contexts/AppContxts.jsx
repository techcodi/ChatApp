import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const [showForm, setShowForm] = useState();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=933372");
  const [userChat, setUserChat] = useState();
  const [emoji, setEmoji] = useState(false);
  const [addFriend, setAddFriend] = useState(function () {
    try {
      const storeChats = JSON.parse(localStorage.getItem("addFriend"));
      return storeChats && Array.isArray(storeChats) ? storeChats : [];
    } catch {
      return [];
    }
  });

  const [sendMessage, setSendMessage] = useState(function () {
    try {
      const saveChat = JSON.parse(localStorage.getItem("message"));
      return saveChat || {};
    } catch {
      return [];
    }
  });
  const [showEmoji, setShowEmoji] = useState(false);

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

  useEffect(
    function () {
      try {
        localStorage.setItem("message", JSON.stringify(sendMessage));
        console.log("Saved todos to localStorage:", sendMessage);
      } catch (error) {
        console.error("error", error);
      }
    },
    [sendMessage]
  );

  function showAddForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (name === "") return;
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

  function onAddChat(e, friendId) {
    e.preventDefault();
    if (userChat === "") return;

    const newChat = { id: Date.now(), text: userChat, emoji };
    setSendMessage((prevMessages) => ({
      ...prevMessages,
      [friendId]: [...(prevMessages[friendId] || []), newChat],
    }));

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

export { ChatProvider, getChats };
