import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/CartContext';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXNQNjnBkqcw9PisapDWX5BanNPj5Xks",
  authDomain: "prueba-df6fd.firebaseapp.com",
  projectId: "prueba-df6fd",
  storageBucket: "prueba-df6fd.appspot.com",
  messagingSenderId: "542029228030",
  appId: "1:542029228030:web:53daf5c61c3e22f5eac2af"
};

// Initialize Firebase
initializeApp(firebaseConfig);



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </CartProvider>

  );
}

export default App;
