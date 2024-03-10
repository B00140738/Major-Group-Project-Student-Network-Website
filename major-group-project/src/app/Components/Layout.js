// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer'; // Import the Footer component
import '../css/layout.css';
const Layout = ({ children }) => {

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  return (
    <div>
      <Header />
      <main>{children}
      
      </main>
      <Footer /> {/* Use the Footer component here */}
    </div>
  );
};

export default Layout;