"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/navbar.module.css";
import Link from 'next/link';
import navbarLinks from '@/constants/navLinks';


const Navbar = () => {
    const topNavRef = useRef(null);
    const [showSticky, setShowSticky] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setShowSticky(!entry.isIntersecting),
            { threshold: 0.1 }
        )

        const current = topNavRef.current;
        if(current) observer.observe(current);

        return () => {
            if(current) observer.unobserve(current)
        };
    }, [])


  return (
    <>
    {/* Top Navbar */}
    <div ref={topNavRef} className={styles.top_navbar}>
        <div className={styles.top_navbar_container}>
            <Image alt='gamer supps logo' src={"/images/gamersupps-logo.avif"} width={160} height={30}/>
            <nav className={styles.navbar_links_container} onMouseLeave={() => setHoveredLink(null)}>
            {navbarLinks.map((link) => (
                <div key={link.title} className={styles.navbar_links} onMouseEnter={() => setHoveredLink(link.title)}>
                    <Link className={styles.navbar_link} href={link.href}>{link.title}</Link>

                    {/* Dropdown links */}
                    {hoveredLink === link.title && link.links && (
                    <div className={styles.navbar_sublinks}>
                        {link.links.map((sublink) => (
                            <Link className={styles.navbar_sublink} href={sublink.title} key={sublink.title} >
                            {sublink.title}
                            </Link>
                        ))}
                    </div>
                    )}
                </div>
            ))}
            </nav>
            <div className={styles.navbar_action_buttons}>
            <button>🔍</button>
            <button>💀</button>
            <button>🛒</button>
            <button>🏁</button>
            </div>
        </div>
    </div>



    {showSticky && (
  <div className="fixed top-0 left-0 w-full z-50 bg-black/80 shadow-md backdrop-blur-md transition-all">
    <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
      <Image alt='gamer supps logo' src={"/images/gamersupps-logo.avif"} width={170} height={30} />
      <nav className={styles.navbar_links_container} onMouseLeave={() => setHoveredLink(null)}>
            {navbarLinks.map((link) => (
                <div key={link.title} className={styles.navbar_links} onMouseEnter={() => setHoveredLink(link.title)}>
                    <Link className={styles.navbar_link} href={link.href}>{link.title}</Link>

                    {hoveredLink === link.title && link.links && (
                    <div className={styles.navbar_sublinks}>
                        {link.links.map((sublink) => (
                            <Link className={styles.navbar_sublink} href={sublink.title} key={sublink.title} >
                            {sublink.title}
                            </Link>
                        ))}
                    </div>
                    )}
                </div>
            ))}
            </nav>
      <div className="flex gap-3">
        <button>🔍</button>
        <button>💀</button>
        <button>🛒</button>
        <button>🏁</button>
      </div>
    </div>
  </div>
    )}


    </>
  )
}

export default Navbar