import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import TodoPage from "./pages/TodoPage";
import "./App.css";
import NotFound from "./pages/NotFound";
import Layout from "./Layout/Layout";
import TodoDetails from "./ToDo/TodoDetails";
// import { useState } from "react";
// import { nanoid } from "nanoid";
// import { Toaster } from "react-hot-toast";
// import { Card } from "./Card/Card";
// import Counter from "./Counter/Counter";
// import Header from "./Header/Header";
// import Modal from "./Modal/Modal";
// import ToDoList from "./ToDoList/ToDoList";
// import LoginForm from "./LoginForm/LoginForm";
// import Search from "./Search/Search";
// import ContentInfo from "./ContentInfo/ContentInfo";
// import TestUseMemo from "./TestUseMemo/TestUseMemo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="todo/:id" element={<TodoDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
