import stylesMobile from './ExpCaio.mobile.module.css'
import stylesDesktop from './ExpCaio.desktop.module.css'

function ExpCaio() {
    return (
        <div className={`${stylesMobile.exp} ${stylesDesktop.exp}`} data-aos="fade-up" id='experiencia'>
            <div>
                <h1>Desenvolvedor Front-End</h1>
            </div>
            <div>
                <p>Olá, meu nome é Caio Arlan Gomes, tenho 17 anos e estou buscando uma oportunidade para meu primeiro
                    estágio na área de Front-End. Apresento abaixo alguns dos projetos pessoais que desenvolvi utilizando
                    HTML, CSS e JS para aprimorar minhas habilidades:</p>
            </div>
        </div>
    )
}
export default ExpCaio