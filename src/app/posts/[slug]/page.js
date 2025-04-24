import React from 'react'
import Image from "next/image";
import logger from "@/logger";
import { remark } from 'remark';
import html from 'remark-html';
import Styles from './page.module.css'
import { Avatar } from '@/componentes/Avatar';
import db from '../../../../prisma/db'
import { redirect } from 'next/navigation';



const getbyPost = async (slug) => {
try {
  const post = await db.post.findFirst({
    where: {
      slug
    },
    include: {
      author: true
    }
  })
  if(!post){
    throw new Error('Post não encontrado')
  }
  const processedContent = await remark()
    .use(html)
    .process(post.markdown);
  const contentHtml = processedContent.toString();
  post.markdown = contentHtml
 
 return post

  
  
} catch (error) {
  logger.error('Falha ao obter o post com o Slug',{
    slug,
    error
  })
  
}
redirect('/not-found')
 
}

export default async function PagePost({ params }){
  const post =  await getbyPost(params.slug)
  console.log(post)
  return (
       <article className={Styles.article}>
      <header className={Styles.header}>
        <figure className={Styles.figure}>
          <Image className={Styles.image} src={post.cover} width={961} height={300} alt={`Capa do post ${post.title}`} />
        </figure>
      </header>
      <section className={Styles.section}>
        <h2 className={Styles.titulo}>{post.title}</h2>
        <p className={Styles.descricao}>{post.body}</p>
        <footer className={Styles.footer}>
        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
      </footer>
      </section>
      <h2 className={Styles.h2}>Codigo:</h2>
    <div dangerouslySetInnerHTML={{ __html: post.markdown }} className={Styles.code} >
      </div>
      
    </article>
   
      
   
  )
}

