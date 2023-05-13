import stylesMobile from './Header.mobile.module.css'
import stylesDesktop from './Header.desktop.module.css'
import logo from '../../imagens/Systems and technology programming company logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';


function Header() {
    function RemoveNav() {
        var itens = document.querySelector(`.${stylesMobile.itens}`)
        itens.classList.remove(stylesMobile.active)
        var icon = document.querySelector(`.${stylesMobile.icon}`)
        icon.classList.toggle(stylesMobile.ativo)
    }
    function Mudar() {
        var itens = document.querySelector(`.${stylesMobile.itens}`)
        itens.classList.remove(stylesMobile.active)
        var icon = document.querySelector(`.${stylesMobile.icon}`)
        icon.classList.toggle(stylesMobile.ativo)
        let body = document.querySelector('body')
        body.classList.toggle(stylesMobile.mudar)
        var hd1 = document.querySelector(`.${stylesMobile.hd1}`)
        hd1.classList.toggle(stylesMobile.mudar)
    }

    function MenuOpen() {
        var itens = document.querySelector(`.${stylesMobile.itens}`);
        itens.classList.toggle(stylesMobile.active);
        var icon = document.querySelector(`.${stylesMobile.icon}`);
        icon.classList.toggle(stylesMobile.ativo);
    };


    return (
        <header className={`${stylesMobile.hd1} ${stylesDesktop.hd1}`}>

            <div className={`${stylesMobile.logo} ${stylesDesktop.logo}`}>
                <a href='#' >
                    <img src={logo} alt="logo do site" width="250px" />
                </a>
            </div>
            <div onTouchStart={MenuOpen} className={stylesMobile.englob}>
                <div className={`${stylesMobile.icon} ${stylesDesktop.icon}`}  >

                </div>
            </div>
            <div className={`${stylesMobile.itens} ${stylesDesktop.itens}`}>
                <ul>
                    <a href="#" onClick={RemoveNav}>

                        <FontAwesomeIcon icon={faHouse} />
                        <span>Home </span>
                    </a>
                    <a href="#sobre" onClick={RemoveNav}>
                        <br />
                        <FontAwesomeIcon icon={faList} />
                        <span >Sobre</span>
                    </a>
                    <a href="#experiencia" onClick={RemoveNav} >
                        <br />
                        <FontAwesomeIcon icon={faStar} />
                        <span >Experiência</span>
                    </a>
                    <a href="#projetos" onClick={RemoveNav}>
                        <br />
                        <FontAwesomeIcon icon={faFolder} />
                        <span >Projetos</span>
                    </a>
                    <br /><br /><br /> <span className={`${stylesMobile.modo} ${stylesDesktop.modo}`} onClick={Mudar}>Tema</span>


                </ul>
            </div>
            <div className={`${stylesMobile.itens1} ${stylesDesktop.itens1}`} >
                <ul>
                    <a href='#'>
                        <li>Home</li>

                    </a>
                    <a href="#sobre1">
                        <li>Sobre</li>
                    </a>
                    <a href="#experiencia1">
                        <li>Experiência</li>
                    </a>
                    <a href="#projetos">
                        <li>Projetos</li>
                    </a>
                    <li className={stylesDesktop.modo} onClick={Mudar}>Tema</li>
                </ul>

            </div>
        </header>
    )
}
export default Header