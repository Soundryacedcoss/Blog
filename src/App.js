import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Login';
import { PostBlog } from './PostBlog';
import Signup from './Signup';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/PostBlog' element={<PostBlog/>}/>
    </Routes>
    </div>
  );
}
export default App;
