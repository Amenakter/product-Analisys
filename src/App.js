import './App.css';
import Header from './Components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Blogs from './Components/Blogs/Blogs';
import Notfound from './Components/Notfound/Notfound';
import Dashboard from './Components/dashboard/Dashboard';


function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<Notfound/>} />
      </Routes>

    </div>
  );
}

export default App;
