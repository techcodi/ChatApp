import { getChats } from "../contexts/AppContxts";
import { Link } from "react-router-dom";
import "../components/ChatList.css";

function ChatList() {
  const {
    showAddForm,
    setName,
    showForm,
    name,
    handleAdd,
    addFriend,
    onDeleteFriend,
    image,
    setImage,
  } = getChats();

  return (
    <div className="friend_List_section">
      <h1>Friends</h1>

      {showForm && (
        <form className="add_form">
          <label htmlFor="name">Friend name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="image">Avatar</label>
          <input
            name="image"
            className="avata_img"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            disabled
          />
          <button type="submit" onClick={handleAdd}>
            Add Friend
          </button>
        </form>
      )}

      <div className="form_p">
        {addFriend.length > 0 ? (
          <ul>
            {addFriend.map((friend) => (
              <li key={friend.id}>
                <Link to={`/chat/${friend.id}`} className="friend_img">
                  <img src={friend.image} alt={friend.name} />
                  <strong>{friend.name}</strong>
                </Link>
                <button
                  onClick={() => onDeleteFriend(friend.id)}
                  className="btn-remove"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Click on the + icon to add friend</p>
        )}
      </div>
      <button onClick={showAddForm} className="add_btn">
        +
      </button>
    </div>
  );
}

export default ChatList;
