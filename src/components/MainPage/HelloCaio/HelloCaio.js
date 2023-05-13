import stylesMobile from './HelloCaio.mobile.module.css'
import stylesDesktop from './HelloCaio.desktop.module.css'
import MinhaFoto from '../../../imagens/minhaft.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function HelloCaio() {
    return (
        <div>
            <div className={`${stylesMobile.eumsm} ${stylesDesktop.eumsm}`} id="sobre" data-aos="fade-up">
                <div className={`${stylesMobile.euft} ${stylesDesktop.euft}`}>
                    <img src={MinhaFoto} alt="minha foto" />
                </div>
                <div>
                    <h1>SOBRE MIM</h1>
                </div>
                <div>
                    <h2>Cabo Frio, Rio de Janeiro</h2>
                </div>
                <div>
                    <p>
                        Olá! Sou Caio Arlan Gomes, um estudante do 3° ano do ensino médio e atuo na área de
                        Front-end. Atualmente, estou me dedicando a aprimorar minhas habilidades em JavaScript, ReactJS e
                        Vue.js.
                        <br /><br />
                        Além disso, possuo habilidades avançadas em HTML e CSS, mas busco sempre aperfeiçoar minhas
                        habilidades para
                        me tornar o melhor profissional possível.
                        <br /><br />

                        Estou constantemente estudando por conta própria, fazendo cursos e adquirindo conhecimento em conteúdos
                        internacionais para estar sempre atualizado com as melhores práticas e tendências da área. Meu objetivo
                        é sempre buscar a excelência em tudo o que faço e me esforçar para alcançar minhas metas.
                        <br /><br />

                        Após concluir o ensino médio, pretendo seguir na área de tecnologia e cursar Ciências da Computação.
                        Estou animado com as oportunidades e desafios que o campo oferece e mal posso esperar para continuar
                        aprendendo e crescendo como profissional.
                    </p>
                </div>
                <a href="https://wa.me/22999677704" ><button><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</button></a>


            </div>
            <div className={`${stylesMobile.eumsm1} ${stylesDesktop.eumsm1}`} data-aos="fade-up" id="sobre1">
                <div className={`${stylesMobile.euft1} ${stylesDesktop.euft1}`}>
                    <img src={MinhaFoto} alt="minha foto" />
                </div>
                <div>
                    <h1>SOBRE MIM</h1>

                    <h2>Cabo Frio, Rio de Janeiro</h2>
                    <p>Olá! Sou Caio Arlan Gomes, um estudante do 3° ano do ensino médio e atuo na área de
                        Front-end. Atualmente, estou me dedicando a aprimorar minhas habilidades em JavaScript, ReactJS e
                        Vue.js. Além disso, possuo habilidades avançadas em HTML e CSS, mas busco sempre aperfeiçoar minhas
                        habilidades para
                        me tornar o melhor profissional possível.

                        Estou constantemente estudando por conta própria, fazendo cursos e adquirindo conhecimento em conteúdos
                        internacionais para estar sempre atualizado com as melhores práticas e tendências da área. Meu objetivo
                        é sempre buscar a excelência em tudo o que faço e me esforçar para alcançar minhas metas.

                        Após concluir o ensino médio, pretendo seguir na área de tecnologia e cursar Ciências da Computação.
                        Estou animado com as oportunidades e desafios que o campo oferece e mal posso esperar para continuar
                        aprendendo e crescendo como profissional.
                    </p>
                    <a href="https://wa.me/22999677704" id="experiencia1"><button><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</button></a>
                </div>
            </div>

        </div>
    )
}
export default HelloCaio