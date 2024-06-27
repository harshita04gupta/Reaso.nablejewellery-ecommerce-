import React from 'react';

import Footer from './Footer';


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
     
        <main style = {{ minHeight:"70vh"}}>
        <ToastContainer />
        {children}
        </main>
        <Footer/>          
    </div>
  )
}
Layout.defaultProps={
  title: 'Reaso.nablejewellery',
  description:'mern stack project',
  keywords:'mern,react,node,mongodb',
  author:"Reaso.nablejewellery"
}

export default Layout