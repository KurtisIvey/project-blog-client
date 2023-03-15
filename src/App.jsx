import "./App.css";
// components
import Login from "./components/Login.jsx";
import Register from "./components/Register";
import HomePosts from "./components/HomePosts.jsx";
import SinglePost from "./components/SinglePosts.jsx";

import {
  HashRouter,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className=" h-full  bg-slate-100 ">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<HomePosts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />

          {/*routes for individual posts */}
          <Route path="/posts/:id" element={<SinglePost id />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
