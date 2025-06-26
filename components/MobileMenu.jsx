import navbarLinks from '@/constants/navLinks';
import Link from 'next/link';
import React, { useState } from 'react'

const MobileMenu = ({ isOpen, onClose }) => {
        if(!isOpen) return null;
        const [expandedLink, setExpandedLink] = useState(null)

        const toggleExpand = (title) => {
            setExpandedLink(prev => (prev === title ? null : title));
        }

  return (
    <div className='fixed top-0 left-0 w-[80%] h-full bg-gray-900 z-100 p-4 '>
        <div className='flex flex-col gap-3'>
            <button className='text-right hover:cursor-pointer' onClick={onClose}>❌</button>
            {navbarLinks.map((link) => (
                <div key={link.title}>
                    <div className='flex flex-row items-center justify-between' onClick={() => link.links ? toggleExpand(link.title) : onClose()}
                        >
                        <span className='font-semibold text-xl'>{link.title}</span>
                         {link.links && <span>{expandedLink === link.title ? "▲" : "▼"}</span>}
                    </div>

                {/* Sublinks when expanded */}
                {expandedLink === link.title && link.links && (
                <div className='flex flex-col gap-2'>
                    {link.links.map((sublink) => (
                    <Link className='text-gray-200 text-lg hover:text-gray-100 hover:scale-102 duration-150' href={sublink.title} key={sublink.title} onClick={onClose}>
                        {sublink.title}
                    </Link>
                ))}
                </div>
            )}
        </div>
    ))}
    </div>
</div>
  )
}

export default MobileMenu;