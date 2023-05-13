import stylesMobile from './Main.mobile.module.css'
import stylesDesktop from './Main.desktop.module.css'
import ButtonGreen from '../../buttons/ButtonGreen'
import ImgMain from '../../../imagens/21004063-removebg.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';


function Main() {
    useEffect(() => {
        escrever();
    }, []);

    function escrever() {
        var txt = document.querySelector("h1#EscreverNome");
        if (txt) {
            var textoArray = txt.innerHTML.split('');
            txt.innerHTML = '';
            textoArray.forEach((letras, index) => {
                setTimeout(() => {
                    txt.innerHTML += letras;
                }, 150 * index);
            });
        }
    }


    return (
        <div className={`${stylesMobile.segunda} ${stylesDesktop.segunda}`} id='home'>
            <div className={`${stylesMobile.ladoalado} ${stylesDesktop.ladoalado}`}>
                <h1 className={`${stylesMobile.ola} ${stylesDesktop.ola}`}>Olá, eu sou</h1>
                <h1 className={`${stylesMobile.nome} ${stylesDesktop.nome}`} id='EscreverNome' onClick={escrever}>Caio Arlan</h1>
                <h1 className={`${stylesMobile.front} ${stylesDesktop.front}`}>Front-end dev</h1>
                <div className={`${stylesMobile.button} ${stylesDesktop.button}`}>
                    <ButtonGreen className={stylesMobile.btt} name='Linkedin' link={'https://www.linkedin.com/in/caio-arlan-b17b5124b/'} icone={<FontAwesomeIcon icon={faLinkedin} />} borda='linkedin' />
                    <ButtonGreen className={stylesMobile.btt} name='Github' link={'https://github.com/caioarlan18'} icone={<FontAwesomeIcon icon={faGithub} />} borda='github' />
                </div>
            </div>
            <div className={`${stylesMobile.imgse} ${stylesDesktop.imgse}`}>
                <img src={ImgMain} alt="imagem animada" width="600px" />
            </div>
        </div>
    )
}
export default Main