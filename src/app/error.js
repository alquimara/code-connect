

'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import { Erro } from '@/componentes/error'


export default function Error({ error, reset }) {
  useEffect(() => {
  }, [error])

  return (
    <Erro titulo="OPS! Um erro ocorreu" subtitulo="Não conseguimos carrgear a página, volte para seguir navegando" imgsrc="/500.png" />
  )
}