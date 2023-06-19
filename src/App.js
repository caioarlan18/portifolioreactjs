import './App.css';
import Header from './components/header/Header'
import Main from './components/MainPage/FirstMain/Main'
import HelloCaio from './components/MainPage/HelloCaio/HelloCaio';
import ExpCaio from './components/MainPage/Experience/ExpCaio';
import MyProjects from './components/MainPage/projects/MyProjects';
import Loja51Image from './imagens/loja51.jpeg'
import CasualHomeImage from './imagens/WhatsApp Image 2023-06-18 at 23.04.55.jpeg'
import Landing from './imagens/bnn.jpg'
import Rcstm from './imagens/tm-ft.jpg'
import Breve from './imagens/Sem-Título-1.jpg'
import stylesDesktop from './components/MainPage/projects/MyProjects.desktop.module.css'
function App() {
  return (
    <div >

      <Header />
      <Main />
      <HelloCaio />
      <ExpCaio />
      <section className={stylesDesktop.tdsp}>
        <MyProjects ProjectLink='https://caioarlan18.github.io/casualhome/' ProjectImage={CasualHomeImage} ProjectAlt='imagem do projeto Loja51 Shirts' ProjectName={'Casual Home'} Info='uma plataforma inovadora para produtos domésticos e soluções relacionadas. Através de uma cuidadosa seleção de itens práticos e de qualidade, buscamos facilitar o dia a dia das pessoas. Conheça mais sobre esse projeto que foi feito para ser usado em uma situação real' Tech='Tecnologias usadas no projeto: ReactJs' intro='PROJETOS' />
        <MyProjects ProjectLink='https://tm.rankingcostadosol.com.br' ProjectImage={Rcstm} ProjectAlt='imagem do projeto Ranking Costa do Sol' ProjectName={'Ranking Tênis de Mesa - Costa do Sol'}
          Info='Projeto FullStack de um site que será usado em campeonatos esportivos. Os jogadores poderão ver sua
                    pontuação em cada etapa
                    do torneio, bem como sua pontuação total.
                    O site também possui funções para os organizadores do
                    torneio, que podem editar as pontuações de cada jogador, criar e sortear chaves de jogos para
                    oitavas, quartas, semifinais e finais.
                    Essas informações são lançadas no site em tempo real,
                    permitindo que os jogadores saibam com quem irão jogar e vejam as atualizações das partidas na hora
                    do torneio.
                    (Por enquanto a função do organizador não está disponível para usuários externos, pois o site está
                    sendo em uma situação real, em breve terá uma versão aberto para todos. OBS: Por enquanto o site só
                    possui uma versão mobile, se estiver no pc, minimize a página para conseguir ver )' Tech='Tecnologias usadas no projeto: HTML, CSS, JS e FireBase' />
        <MyProjects ProjectLink='https://caioarlan18.github.io/landingpage/' ProjectImage={Landing} ProjectAlt='imagem do projeto Casual Home' ProjectName={'Landing Page - Casual Home'} Info='Projeto de uma landing page para a loja Casual Home'
          Tech='Tecnologias usadas no projeto: HTML e CSS' />
        <MyProjects ProjectLink='https://caioarlan18.github.io/Loja51/' ProjectImage={Loja51Image} ProjectAlt='imagem do projeto Loja51 Shirts' ProjectName={'Loja51 Shirts'} Info='Projeto fictício de uma loja de camisas de time usando HTML e css, foi usado um pouco de JavaScript, Site 100% 
      responsivo' Tech='Tecnologias usadas no projeto: HTML, CSS e JavaScrpit' />
      </section>
      <div className="fim" data-aos="fade-up">
        <h1>&copy; Site desenvolvido por <span>Caio Arlan</span>
        </h1>
      </div>
    </div >
  );
}

export default App;
