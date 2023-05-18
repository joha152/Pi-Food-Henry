import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from "./components/Home/Home";
import Detail from "./components/DetailPage/Detail";
import Form from "./components/Form/Form"
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001" ;


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<Landing/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/detail/:id" element={<Detail/>}/>
    <Route exact path="/create" element={<Form/>}/>
   </Routes>
   </BrowserRouter>
  );
}


export default App;
