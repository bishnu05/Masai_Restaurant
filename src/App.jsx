import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Restaurant from './Pages/Restaurant';
import { RequiredAuth } from './hoc/RequiredAuth';
import Cart from './Pages/Cart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/restaurant' element={<RequiredAuth><Restaurant/></RequiredAuth>}></Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
