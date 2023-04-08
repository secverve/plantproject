import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BottomNav from "./BottomNav";
import trade from "./pages/trade";
import chat from "./pages/chat";
import plant from "./pages/plant";
import category from "./pages/category";
import recommend from "./pages/recommend";
import TopNav from "./TopNav";

const MainApp = () => {
  const [items, setItems] = useState([]);
  const [tTitle, setTTitle] = useState("");
  const [tContent, setTContent] = useState("");

  useEffect(() => {
    axios
      .get("/post")
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [textareaHeight, setTextareaHeight] = useState({
    row: 1,
    lineBreak: {},
  });

  const handleTTitleChange = (event) => {
    setTTitle(event.target.value);
  };

  const handleTContentChange = (event) => {
    setTContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!tTitle || !tContent) {
      return;
    }

    const newItem = {
      title: tTitle,
      content: tContent,
    };
    axios
      .post("/post", newItem)
      .then((response) =>
        setItems([...items, response.data.tradeBoardDto])
      )
      .catch((error) => console.log(error));
    setTTitle("");
    setTContent("");
  };

  const handleDelete = (id) => {
    axios
      .delete(`/post/${id}`)
      .then((response) =>
        setItems(items.filter((item) => item.id !== id))
      )
      .catch((error) => console.log(error));
  };


  return (
    <div className="app-container">
    <TopNav/>
    <BottomNav/>
    </div>
  );
};

export default MainApp;
