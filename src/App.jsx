import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./assets/pages/AppLayout";
import "./App.css";
import { MusicProvider } from "./contexts/AppContxts";
// import Homepage from "./components/Homepage/";
// import Search from "./components/Search";
import Home from "./components/Home";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import GropupChat from "./components/GropupChat";
function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<ChatList />} />
            <Route path="chat" element={<ChatList />} />
            <Route path="/group" element={<GropupChat />} />
            <Route path="chat/:id" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MusicProvider>
  );
}

export default App;
