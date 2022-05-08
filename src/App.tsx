import React             from "react";
import Navbar            from "./components/Navbar";
import Home              from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Produits          from './components/Produits';
import Produit           from './components/Produit';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"             element={ <Home />     } />
        <Route path="/home"         element={ <Home />     } />
        <Route path="/produits"     element={ <Produits /> } />
        <Route path="/produit/:id"  element={ <Produit />  } />
      </Routes>
    </>
  );
}

export default App;
