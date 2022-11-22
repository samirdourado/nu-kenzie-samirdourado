import { useState } from 'react'
import SumBalance from '../sumArea/Sums'

function TransactionUser({listTransactions, setListTransactions, setFilter}) {
    
    const[description, setDescription] = useState("")
    const[type, setType] = useState("")
    const[value, setValue] = useState("")
    

    function handleSubmit(evt) {
        evt.preventDefault()

        if(!!!description || !!!value || type === "selectedType") {
            return alert("Campos vazios")
        }

        const body = {
            description: description,
            type: type,
            value: value
        }

        setListTransactions((() => [...listTransactions, body]))
        console.log(listTransactions)

        setDescription("")
        setType("selectedType")
        setValue("")        
    }
    

    return(
        <section className='descriptions'>
            <form onSubmit={handleSubmit} className='descriptions__box'>

            <p>Descrição</p>
                <div className='descriptions__description'>
                    <input value={description}  onChange={evt => setDescription(evt.target.value)} type='text' className='' placeholder='Digite aqui sua descrição'></input>
                    <p>Ex: Compra de roupas</p>
                </div>
                    

                <div className='descriptions__values'>
                    <div className='descriptions__values__left'>
                        <p>Valor</p>
                        <input value={value} onChange={evt => setValue(Number(evt.target.value))} type="number" />
                        {/* <label>R$</label> */}
                    </div>

                    <div className='descriptions__values__right'>
                        <p>Tipo de valor</p>
                        <select defaultValue={"selectedType"} onChange={evt => setType(evt.target.value)} >                            
                                <option value={"selectedType"} disabled>Selecione o tipo</option>
                                <option defaultValue="entrada">entrada</option>
                                <option defaultValue="saida">saida</option>
                            
                            {/* {console.log(select)} */}
                        </select>
                    </div>
                </div>
                
            <button type={'submit'} onClick={() => setFilter([])} >Inserir Valor</button>

            </form>

            <SumBalance listTransactions={listTransactions} setListTransactions={setListTransactions}></SumBalance>            


        </section>
            
    )
}
export default TransactionUser

