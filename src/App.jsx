import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout";
import Home from "./pages/Home";
import { Orders } from "./pages/Orders";
import { Statistics } from "./pages/Statistics";
import { Store } from "./pages/Store";
import { Wallet } from "./pages/Wallet";
import React from "react";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/store" element={<Store />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
