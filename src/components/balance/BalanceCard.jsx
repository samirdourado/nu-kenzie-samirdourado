import '../../Global.css';
import './balance.css'
import noCard from '../../assets/no-card.svg'

export function EntriesBalance({listTransactions, setListTransactions, setFilter}) {

    function RemoveItem(itemIndex) {
        const newList = listTransactions.filter((item, index) => {
            
            if (index !== itemIndex) {
                return item
            }
        })
        setListTransactions(newList)
    }

    return(
        listTransactions.map((data, index) => {
            
            return(
            <li key={index} className={data.type === "entrada" ? "cardBalance entrie" : "cardBalance out"}>
                <div className="cardBalance__bg">
                    <div>
                        <p>{data.description}</p>
                        <div>
                            <p>R$ {data.value}</p>
                            <button onClick={() => RemoveItem(index)} className='removeBtn'></button>
                        </div>
                    </div>
                    <p>{data.type}</p>
                </div>            
            </li>
            )
        })
    )
}


export function EmptyBalance() {
    return(
        <>
            <p>Você ainda não possui nenhum lançamento</p>
            <li>
                <img src={ noCard } alt="vazio"></img>
            </li>
        </>
    )
}