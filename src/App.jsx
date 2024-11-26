import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./assets/pages/AppLayout";
import "./App.css";
import { ChatProvider } from "./contexts/AppContxts";
import Social from "./components/Social";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import Notification from "./components/Notification";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<ChatList />} />
            <Route path="chat" element={<ChatList />} />
            <Route path="chat/:id" element={<Chat />} />
            <Route path="social" element={<Social />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
