import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./assets/pages/AppLayout";
import "./App.css";
import { MusicProvider } from "./contexts/AppContxts";

import ChatList from "./components/ChatList";
import Chat from "./components/Chat";

function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<ChatList />} />
            <Route path="chat" element={<ChatList />} />
            <Route path="chat/:id" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MusicProvider>
  );
}

export default App;
