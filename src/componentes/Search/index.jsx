import React from 'react'
import Styles from "./search.module.css"

export const Search = () => {
    return (
        <form className={Styles.search} action='/'>
            <input className={Styles.input} type="text" placeholder="Digite o que você procura" name='q' />
            <button className={Styles.button}>Buscar</button>
        </form>
    )
}
