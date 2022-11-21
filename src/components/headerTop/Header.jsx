import logoBlack from "../../assets/nu-kenzie-neg.svg"

function HeaderPage({ setAccess }) {
    
    return(
        <header>
            <div>
                <img src={ logoBlack } alt="Logo"></img>
                <button onClick={ () => setAccess(false) } className='goHome'>Inicio</button>
            </div>
        </header>
    )
}
export default HeaderPage