import { Bubbles, Bubble } from "../sections/AboutMe/style"
import { NotFoundHeader, NotFoundButton } from "../styles/404Style"
import Head from "next/head"

export default function NotFound(){
    return(
        <>
        <Head>
            <title>404 - Página não encontrada</title>
        </Head>
         <Bubbles id="Bubbles-404">
         <NotFoundHeader id="warn">&#9888;</NotFoundHeader>
         <NotFoundHeader>Página não Encontrada</NotFoundHeader>
         <NotFoundButton href="/" >Voltar</NotFoundButton>
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
         <Bubble id="Bubble" />
       </Bubbles>
       </>
        
    )
}