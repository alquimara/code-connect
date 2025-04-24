import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "@/componentes/CardPost";
import logger from "@/logger";
import { log } from "winston";
import Link from "next/link";
import db from '../../prisma/db'
import { Search } from "@/componentes/Search";

// backend comando para rodar:json-server post.json -p 3042


const getAllPosts = async (page, searchTerm) => {
  const where ={}
  if(searchTerm){
    where.title={
      contains: searchTerm,
      mode:'insensitive'
    }
  }
  const Perpage = 6

  const totalitens = await db.post.count({where})
  const totalpages = Math.ceil(totalitens / Perpage)
  const prev = page  > 1 ? page - 1 : null
  const next = page < totalpages ? page+1 : null
  const skip = (page -1) * Perpage
  try {
    const posts = await db.post.findMany({
      where,
      include:{
        author: true
      },
      take: Perpage,
      orderBy:{
        createdAt: 'desc'
      },
      skip
    })
    console.log(posts)
    return{data:posts, prev, next}
    
  } catch (error) {
    logger.error(`Não foi possível obter os posts ${error}`)
    return{data:[], prev: null, next: null}
    
  }
}

export default async function Home({searchParams}) {
  const currentpage = parseInt(searchParams?.page || 1)
  const searchTerm = searchParams?.q
  
 const {data:posts, prev, next} = await getAllPosts(currentpage, searchTerm)

  return (
    <div className={styles.container}>
    <Search />
    <main className={styles.main}>
      {posts.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
      <div className={styles.pagination}>
        {prev && <Link className={styles.link} href={{pathname:'/', query:{page:prev,q:searchTerm}}}>  <span>Página anterior</span></Link>}
        {next && <Link className={styles.link} href={{pathname:'/', query:{page:next, q:searchTerm}}}><span>Próxima página</span></Link>}

      </div>


    </main>
    </div>
  );
}
