// 'use client';  
// import React, { useState } from 'react';
// import Link from 'next/link';
// import '../componentsStyle/Navbar.css';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const toggleSidebar = () => {
//     setOpen(!open);
//   };

//   const closeSidebar = () => {
//     setOpen(false);
//   };

//   return (
//     <nav className="navbar-postion py-3">
//       <section className="container-fluid">
//         <div className="d-flex justify-content-between align-items-center">
//           <div>
//             <h4 className="text-white text-uppercase m-0">logo</h4>
//           </div>
//           <button
//             className="d-block d-sm-none  bg-transparent border-0 text-white"
//             onClick={toggleSidebar}
//           >
//             <i className="fa-solid fa-bars fa-xl"></i>
//           </button>

//           <ul
//             className={`nav-links d-block d-sm-flex list-icon-none gap-4 m-0 ${
//               open ? 'open' : ''
//             }`}
//           >
//             <li className='custom-sm-padding'>
//               <Link className="text-decoration-none text-white text-capitalize" href="/" onClick={closeSidebar}>
//                 home
//               </Link>
//             </li>
//             <li className='custom-sm-padding'>
//               <Link className="text-decoration-none text-white text-capitalize" href="/about" onClick={closeSidebar}>
//                 about
//               </Link>
//             </li>
//             <li className='custom-sm-padding'>
//               <Link className="text-decoration-none text-white text-capitalize" href="/contact" onClick={closeSidebar}>
//                 contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </nav>
//   );
// };

// export default Navbar;





















'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../componentsStyle/Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  const navbarClass = isHome && !scrolled ? 'transparent-navbar' : 'white-navbar';
  const textClass = isHome && !scrolled ? 'text-white' : 'text-black';

  return (
    <nav className={`navbar-postion ${navbarClass}`}>
      <section className="container-fluid">
        <div className="d-flex align-items-center custom-sm-between"> 
          <div>
            <h4 className={`m-0 text-uppercase `}>
              <Link className={`text-decoration-none ${textClass}`} href="/">
                <img className='img-fluid' src="/assets/img/logo.png" width={100} height={100} alt="" />
              </Link>
            </h4>
          </div> 
            <button
              className={`d-block d-sm-none bg-transparent border-0 ${textClass}`}
              onClick={toggleSidebar}
            >
              <i className="fa-solid fa-bars fa-xl"></i>
            </button> 


          <ul
            className={`nav-links d-block d-sm-flex list-icon-none gap-4 ps-3 m-0 ${open ? 'open' : ''}`}
          >
            <li className='text-end fs-5 mt-2'>
               <Link onClick={toggleSidebar} className='text-white' href="#">
               <i className="fa-solid fa-xmark"></i>
               </Link>
            </li>
            {['/', '/about', '/contact'].map((href) => (
              <li className="custom-sm-padding" key={href}>
                <Link
                  href={href}
                  onClick={closeSidebar}
                  className={`text-decoration-none text-capitalize ${textClass}`}
                >
                  {href === '/' ? 'home' : href.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
