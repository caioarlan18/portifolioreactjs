import stylesMobile from './MyProjects.mobile.module.css'
import stylesDesktop from './MyProjects.desktop.module.css'


function MyProjects({ ProjectName, Info, Tech, ProjectLink, ProjectImage, ProjectAlt, intro }) {
    return (
        <div className={`${stylesMobile.projetos} ${stylesDesktop.projetos}`} data-aos="fade-up" id='projetos'>
            <h1 className={`${stylesMobile.pmob} ${stylesDesktop.pmob}`}>{intro}</h1>
            <div>

                <a href={ProjectLink}><img src={ProjectImage}
                    alt={ProjectAlt} /></a>
            </div>
            <div>
                <h1 className={`${stylesMobile.loja} ${stylesDesktop.loja}`}>{ProjectName}</h1>
            </div>
            <div>
                <h2>{Info}</h2>
            </div>
            <div>
                <p>{Tech}</p>
            </div>
            <a href={ProjectLink}><button>Visualizar</button></a>
        </div>
    )
}
export default MyProjects