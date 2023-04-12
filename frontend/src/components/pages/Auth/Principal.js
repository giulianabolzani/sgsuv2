import styles from './Principal.module.css';
import aulaImg from '../../../assets/img/aula.png';
import { Link } from 'react-router-dom';

function Principal(){
    return(
        <main className={styles.home}>
            <section>
                <div className={styles.text}>
                    <h4>Sistema de <b>gestão escolar</b>: o que é e quais os benefícios</h4>
                    <ul>
                        <li>
                            <Link to="/users/create">GESTÃO PARA INSTITUIÇÕES DE ENSINO</Link>
                        </li>
                    </ul>
                    <h1>Sistema de Gerenciamento Escolar</h1>
                    <h4>Um sistema de gestão escolar é a forma mais indicada de trazer organização e <br />
                        eficiência à sua instituição de ensino. Ele ajuda a compreender e resolver <br />
                        seus principais problemas e traz melhorias significativas para os processos internos.</h4>
                    <h1>Qual a importância de contar com um sistema de gestão escolar?</h1>
                    <h4>Escolas e universidades podem se beneficiar imensamente de um sistema de <br />
                        organização e gestão da escola, pois trata-se de uma tecnologia que <br />
                        digitaliza suas rotinas administrativas.<br />
                        <br />Afinal, trata-se de uma solução única, que centraliza os dados mais importantes <br />
                        da sua organização e permite controlar vários aspectos da operação, como:</h4>
                </div>
                    <div className={styles.text_list}>
                        <ul>
                            <li>Secreataria Digital;</li>
                            <li>Projeto Pedagógico;</li>
                            <li>Monitoramento do desempenho estudantil;</li>
                            <li>Acompanhamento da performance do corpo docente;</li>
                        </ul>
                    </div>
            </section>
            <div className={styles.img_main}>
                <img src={aulaImg} alt="Aula" />
            </div>
        </main>
    )
}

export default Principal;