import stylesMobile from './ButtonGreen.mobile.module.css'
import stylesDesktop from './ButtonGreen.desktop.module.css'


function ButtonGreen({ name, link, icone, borda }) {
    return (
        <div className={`${stylesMobile.button} ${stylesDesktop.button}`}>
            <a href={link}><button className={`${stylesMobile.btt} ${stylesDesktop.btt} ${borda}`} > {icone} {name}</button></a>

        </div>
    )
}
export default ButtonGreen