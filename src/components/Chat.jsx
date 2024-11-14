import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChats } from "../contexts/AppContxts";
import ChatList from "../components/ChatList";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import EmojiPicker from "emoji-picker-react";
import "./Chat.css";

function Chat() {
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

  const friend = addFriend.find((friend) => friend.id === id);
  const friendMessages = sendMessage[id] || [];
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
          {friend ? (
            <li>
              <img src={friend.image} alt={friend.name} />
              <p>{friend.name}</p>
            </li>
          ) : (
            "not found"
          )}
        </ul>

        <div className="user_message">
          {friend ? (
            <ul>
              {friendMessages.map((chat) => (
                <li key={chat.id}>
                  <p>
                    {chat.text} {chat.emoji}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            "no chat for this none user"
          )}

          <div className="emoji">
            {showEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          </div>
          <form className="chat_text_area" onSubmit={(e) => onAddChat(e, id)}>
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
