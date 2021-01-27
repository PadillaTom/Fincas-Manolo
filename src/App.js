// Imports:
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components:
import { WelcomeIntro, Navbar, Sidebar, Footer } from './Components';
// Pages:
import {
  Home,
  ErrorPage,
  NosotrosPage,
  OlivarPage,
  ProductsPage,
  ContactPage,
  GalleryPage,
  VinosPage,
  FrutosPage,
  ArticlePage,
} from './Pages';
// Helpers
import ScrollToTop from './Utils/helpers';

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
          <Route path='/productos'>
            <ProductsPage></ProductsPage>
          </Route>
          <Route path='/contacto'>
            <ContactPage></ContactPage>
          </Route>
          <Route path='/gallery'>
            <GalleryPage></GalleryPage>
          </Route>
          <Route path='/vinos'>
            <VinosPage></VinosPage>
          </Route>
          <Route path='/frutos-secos'>
            <FrutosPage></FrutosPage>
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
