import '../../Global.css';
import "./dashboard.css"

import { useState } from 'react';
import HeaderPage from '../../components/headerTop/Header'
import TransactionUser from '../../components/transactionsTypes/Transactions';
import FilterButtons from '../../components/buttonsFilter/ButtonFilter';
import { EntriesBalance, EmptyBalance } from '../../components/balance/BalanceCard';


function Dashboard({setAccess}) {

    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saida", value: 150 }
    ])
    
    function removeItem({removeByDescription}) {
        const newList = listTransactions.filter((item) =>  item.description !== removeByDescription)
        console.log(newList)
    }
    
    const [filter, setFilter] = useState([])
    
    return(
        <div>
            <HeaderPage setAccess={setAccess}/>

            <main>
                <TransactionUser listTransactions={listTransactions} setListTransactions={setListTransactions} removeItem={removeItem} setFilter={setFilter}/>

                <aside>
                    <FilterButtons listTransactions={listTransactions} setFilter={setFilter}/>
                    

                    <ul className='listHolder'>
                        {listTransactions.length === 0 ? <EmptyBalance/> : 
                        filter.length > 0 ?  <EntriesBalance listTransactions={filter} setListTransactions={setListTransactions}/>
                        :
                        <EntriesBalance listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                        }
                    </ul>                    
                </aside>
            </main>
        </div>       
        
    )
}
export default Dashboard