import '../../Global.css';
import './home.css';

import logoWhite from "../../assets/nu-kenzie-pos.svg"
import illustration from "../../assets/illustration.svg"

function HomePage({setAccess}) {
    return (
    <div className="home">      
      <section className="home__container">
        
        <div>
          <img src={ logoWhite } alt="Logo White"/>
          <span>
            <p>Centralize o</p>
            <p>controle das suas</p>
            <p>finanças</p>
          </span>
          <p>de forma rápida e segura</p>
          <button onClick={ () => setAccess(false) }>Iniciar</button>
        </div>

        <figure>
          <img src={ illustration } alt="Ilustração"/>
        </figure>

      </section>
      
    </div>
  );
}
export default HomePage;