import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 bg-background text-center relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-mutedForeground text-sm">
          © {new Date().getFullYear()} Harsh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
