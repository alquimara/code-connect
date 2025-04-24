import React from 'react'
import Styles from "./erro.module.css";
import Link from 'next/link'
import Image from 'next/image'

export const ArrowBack = ({color = '#BFFFC3'}) => {
    return <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5117 5.76172V7.23828H3.37109L7.55469 11.457L6.5 12.5117L0.488281 6.5L6.5 0.488281L7.55469 1.54297L3.37109 5.76172H12.5117Z" fill={color} />
    </svg>
  }

export const Erro = ({titulo, subtitulo, imgsrc}) => {
  return (
    <div className={Styles.container}>
    <Image src={imgsrc} width={656} height={367} alt="robô com a mao no queixo" />
    <h2 className={Styles.title}>{titulo}</h2>
    <p className={Styles.description}>{subtitulo}</p>
    <Link href="/" className={Styles.link}>
    <span>Voltar ao feed</span>
    <ArrowBack/>
    </Link>
   </div>
  )
}
