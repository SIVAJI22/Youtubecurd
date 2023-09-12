import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter ,Routes,Route}from 'react-router-dom'
import { Fileupload } from './fileupload';

import { Login } from './login';
import { Singup } from './singup';
import { Navy } from './navbar';
import { Base64 } from './convertbase64';
import { Video } from './video';
function App() {
  return (
    <div className="App">
  <h2>
    react
  </h2>
  <BrowserRouter>
  <Routes>
 <Route path="/" element={<Fileupload/>}></Route>
 <Route path="/F" element={<Video/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path='/s' element={<Singup/>}></Route>
 <Route path='/v' element={<Base64/>}></Route>
</Routes>

  </BrowserRouter>



    </div>
  );
}

export default App;
