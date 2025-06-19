import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "../styles/heroHeader.module.css"

const HeroHeader = () => {
  return (
    <Link className={styles.hero_header_container} href={"/"}>
        <div className={styles.hero_header_wrapper}>
    <Image
    src="/images/hero-header.webp"
    alt='hero header'
    fill
    className={styles.hero_header_image}
    />
        </div>
    </Link>
  )
}

export default HeroHeader