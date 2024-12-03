import styles from './Home.module.css'
import vector from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home (){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>SynCro.</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="CRIAR PROJETO" />
            <img src={vector} alt='SynCro-Logo'></img>
        </section>
    )
}

export default Home