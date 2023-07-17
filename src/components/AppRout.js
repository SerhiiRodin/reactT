import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import "./App.css";

import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
// import NewsPage from "./pages/NewsPage";
// import TodoPage from "./pages/TodoPage";
// import NotFound from "./pages/NotFound";
// import TodoDetails from "./ToDo/TodoDetails";

const NewsPage = lazy(() => import("./pages/NewsPage"));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TodoDetails = lazy(() => import("./ToDo/TodoDetails"));

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
