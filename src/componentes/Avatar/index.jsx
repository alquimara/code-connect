import React from 'react'
import Styles from "./avatar.module.css";
import Image from 'next/image';


export const Avatar = ({name, imageSrc}) => {
  return (
   <ul className={Styles.avatar}>
    <li  className={Styles.imagem}>
        <Image src={imageSrc} alt={`Avatar do(a) ${name}`}  width={32} height={32}/>
    </li>
    <li className={Styles.nome}>@{name}</li>
   </ul>
  )
}
