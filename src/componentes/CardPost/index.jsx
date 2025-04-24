import React from 'react'
import Styles from "./cardPost.module.css";
import Image from 'next/image';
import { Avatar } from '../Avatar';
import Link from 'next/link';

export const CardPost = ({post}) => {

  return (
    <Link className={Styles.link} href={`/posts/${post.slug}`}>
      <article className={Styles.article}>
        <header className={Styles.header}>
            <figure className={Styles.figure}>
                <Image  className={Styles.image} src={post.cover} width={438} height={133} alt={`Capa do post ${post.title}`}/>
            </figure>
        </header>
        <section className={Styles.section}>
            <h2 className={Styles.titulo}>{post.title}</h2>
            <p className={Styles.descricao}>{post.body}</p>
        </section>
        <footer className={Styles.footer}>
            <Avatar name={post.author.username} imageSrc={post.author.avatar}/>
        </footer>
    </article>
    </Link>
  
  )
}
