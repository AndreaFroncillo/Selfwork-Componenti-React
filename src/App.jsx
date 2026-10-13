import { BrowserRouter, Route, Routes } from "react-router";

import Layout from "./components/Layout";
import Homepage from "./views/Homepage";
import Posts from "./views/Posts";
import Detail from "./views/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;