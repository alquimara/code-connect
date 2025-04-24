import React from 'react'
import Styles from "./aside.module.css";
import Image from 'next/image';
import Logo from './logo.png'

export const Aside = () => {
  return (
    <aside className={Styles.aside}>
      <Image src={Logo} alt="Logo Code Connect" />
    </aside>
  )
}
