import { useState } from 'react'
import SumBalance from '../sumArea/Sums'

function TransactionUser({listTransactions, setListTransactions, setFilter}) {
    const[description, setDescription] = useState("")
    const[type, setType] = useState("")
    const[value, setValue] = useState("")
    

    function handleSubmit(evt) {
        evt.preventDefault()

        const body = {
            description: description,
            type: type,
            value: value
        }
        console.log(body)

        setListTransactions((() => [...listTransactions, body]))

        // description = ""
        // type = ""
        // value = ""

        setDescription("")
        setType("")
        setValue("")        
    }

    

    return(
        <section className='descriptions'>
            <form onSubmit={handleSubmit} className='descriptions__box'>

            <p>Descrição</p>
                <div className='descriptions__description'>
                    <input value={setListTransactions.description}  onChange={evt => setDescription(evt.target.value)} type='text' className='' placeholder='Digite aqui sua descrição'></input>
                    <p>Ex: Compra de roupas</p>
                </div>
                    

                <div className='descriptions__values'>
                    <div className='descriptions__values__left'>
                        <p>Valor</p>
                        <input value={setListTransactions.value} onChange={evt => setValue(Number(evt.target.value))} type="number" />
                        {/* <label>R$</label> */}
                    </div>

                    <div className='descriptions__values__right'>
                        <p>Tipo de valor</p>
                        <select DefaultValue={setListTransactions.type} onChange={evt => setType(evt.target.value)} >
                            <option selected disabled>Selecione o tipo</option>
                            <option value="entrada">entrada</option>
                            <option value="saida">saída</option>
                            {/* {console.log(select)} */}
                        </select>
                    </div>
                </div>
                
            <button>Inserir Valor</button>

            </form>

            <SumBalance listTransactions={listTransactions} setListTransactions={setListTransactions}></SumBalance>            


        </section>
            
    )
}
export default TransactionUser

