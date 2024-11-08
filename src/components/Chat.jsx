import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChats } from "../contexts/AppContxts";
import ChatList from "../components/ChatList";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import EmojiPicker from "emoji-picker-react";
import "./Chat.css";

function Chat() {
  // const [showEmoji, setShowEmoji] = useState(false);
  const { id } = useParams();
  const {
    addFriend,
    onAddChat,
    setUserChat,
    userChat,
    sendMessage,
    handleEmojiClick,
    showEmoji,
    setShowEmoji,
  } = getChats();

  const singleChat = addFriend?.find((friend) => friend.id === id);

  // Clear the input when the ID changes
  useEffect(() => {
    setUserChat("");
  }, [id]);

  return (
    <div className="single_chat">
      <div className="left_chat">
        <ChatList />
      </div>
      <div className="right_chat">
        <ul className="user_profile_header">
          {singleChat ? (
            <li>
              <img src={singleChat.image} alt={singleChat.name} />
              <p>{singleChat.message}</p>
            </li>
          ) : (
            "not found"
          )}
        </ul>

        <div className="user_message">
          <ul>
            {sendMessage.map((chat) => (
              <li key={chat.id}>
                <p>
                  {chat.userChat} {chat.emoji}
                </p>
              </li>
            ))}
          </ul>
          <div className="emoji">
            {showEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          </div>
          <form className="chat_text_area" onSubmit={onAddChat}>
            <input
              type="text"
              placeholder="Type your message..."
              value={userChat}
              onChange={(e) => setUserChat(e.target.value)}
            />
            <button type="button" onClick={() => setShowEmoji((prev) => !prev)}>
              <SentimentSatisfiedOutlinedIcon />
            </button>
            <button type="submit">
              <SendOutlinedIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
