import React, {Suspense} from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullCoffee from "./pages/FullCoffee";
import styles from './styles/App.module.scss'

const Shop = React.lazy(() => import( "./pages/Shop"));

function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="shop" element={
            <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
              <Shop />
            </Suspense>
            } />
          <Route path="cart" element={
            <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
              <Cart />
            </Suspense>
          } />
          <Route path="coffee/:id" element={
            <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
              <FullCoffee />
            </Suspense>
            }/>
          <Route path="*" element={
            <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
              <NotFound />
            </Suspense>
           } />
        </Route>
      </Routes>
      )
  }

export default App
