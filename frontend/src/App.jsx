import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Blogs from './pages/blogs'
import Login from './pages/login'
import Signup from './pages/signup'
function App() {

  return (
    <div className="px-10  bg-white border rounded-md">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App
