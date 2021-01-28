// Imports:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { WelcomeIntro, Navbar, Sidebar, Footer } from '../App';
import {
  Home,
  ErrorPage,
  NosotrosPage,
  OlivarPage,
  ProductsPage,
  ContactPage,
  GalleryPage,
  ArticlePage,
} from '../../Pages';
import ScrollToTop from '../../Utils/helpers';

function App() {
  return (
    <>
      <WelcomeIntro></WelcomeIntro>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
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
          <Route
            path='/productos/:slug'
            children={<ProductsPage></ProductsPage>}
          ></Route>
          <Route path='/contacto'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='/gallery'>
            <GalleryPage></GalleryPage>
          </Route>
          <Route
            path='/articles/:slug'
            children={<ArticlePage></ArticlePage>}
          ></Route>
          <Route path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
