import React from "react";

const Footer = () => {
  return (
    <>
     <footer style={{ background: '#f8f9fa', padding: '10px', textAlign: 'center', marginTop: '20px' }}>
      <p>© 2024 My App</p>
      <nav>
        <a href="/privacy" style={{ margin: '0 10px' }}>Privacy Policy</a>
        <a href="/terms" style={{ margin: '0 10px' }}>Terms of Service</a>
        <a href="/contact" style={{ margin: '0 10px' }}>Contact</a>
      </nav>
    </footer>
    </>
  );
};
export default Footer;
