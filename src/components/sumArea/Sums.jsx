import '../../Global.css';
import "./sum.css"

function SumBalance({listTransactions, setListTransactions}) {   

    function values() {
        const total = listTransactions.reduce((acc, act) => {
            if (act.type === "entrada") {
                return (act.value) + (acc)
            }
            else {
                return (acc) - (act.value)
            }
        },0)
        return total
    }

    return(
        <div className='totals'>
                <div>
                    <p>Valor Total</p>
                    <p>R$ {values()}</p>
                </div>
                <p>O valor se refere ao saldo</p>
        </div>
    )
}
export default SumBalance