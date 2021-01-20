// Imports:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components:
import { Navbar, Sidebar } from './Components';
// Pages:
import {
  Home,
  ErrorPage,
  NosotrosPage,
  OlivarPage,
  ProductsPage,
  ContactPage,
  GalleryPage,
} from './Pages';
// Helpers
import ScrollToTop from './Utils/helpers';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/nosotros'>
            <NosotrosPage></NosotrosPage>
          </Route>
          <Route path='/el-olivar'>
            <OlivarPage></OlivarPage>
          </Route>
          <Route path='/productos'>
            <ProductsPage></ProductsPage>
          </Route>
          <Route path='/contacto'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='/gallery'>
            <GalleryPage></GalleryPage>
          </Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
