import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addpost from './addpost';
import Getpost from './getpost';
import Getallpost from './getallpost';
import AddVideo from './addvideo';

export default function Practroute() {
     const [ws, setWs] = useState(null);
     const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch existing posts initially
    fetch("http://localhost:8080/post/getallpost")
      .then((res) => res.json())
      .then((data) => setPosts(data.Post ));

    // Connect to WebSocket
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };

    socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        console.log("Received from WebSocket:", msg);

        if (msg.event === "new_post") {
          setPosts((prev) => [msg.data, ...prev]);
        } else if (msg.event === "edit_post") {
          setPosts((prev) =>
            prev.map((post) => (post._id === msg.data._id ? msg.data : post))
          );
        } else if (msg.event === "delete_post") {
          setPosts((prev) =>
            prev.filter((post) => post._id !== msg.data._id)
          );
        }
      } catch (err) {
        console.error("WebSocket message parse error", err);
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);
  return (
    <>
    <Routes>
        
         
          <Route path='add' element={<Addpost  post={posts} ws={ws}/>}/>
          <Route path='addvideo' element={<AddVideo  post={posts} ws={ws}/>}/>
          <Route path='getpost/:id' element={<Getpost/>}/>
          <Route path='getallpost' element={<Getallpost post={posts} ws={ws}/>}/>
         
           
          
         
          
       
      </Routes>
    </>
  )
}
