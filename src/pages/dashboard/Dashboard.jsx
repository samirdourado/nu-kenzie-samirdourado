import '../../Global.css';
import "./dashboard.css"

import { useState } from 'react';
import HeaderPage from '../../components/headerTop/Header'
import TransactionUser from '../../components/transactionsTypes/Transactions';
import FilterButtons from '../../components/buttonsFilter/ButtonFilter';
import { EntriesBalance, EmptyBalance } from '../../components/balance/BalanceCard';


function Dashboard() {

    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 }
    ])
    
    function RemoveItem({removeByDescription}) {
        const newList = listTransactions.filter((item) =>  item.description !== removeByDescription)
        console.log(newList)
    }
    
    const [filter, setFilter] = useState("")
    
    function typeLists() {
        listTransactions.filter((item) => {
            if(filter === "todos") {
                return item
            }
            else {
                return item.type === filter
            }
        })
    }
    
    return(
        <div>
            <HeaderPage></HeaderPage>

            <main>
                <TransactionUser listTransactions={listTransactions} setListTransactions={setListTransactions} RemoveItem={RemoveItem}/>

                <aside>
                    <FilterButtons listTransactions={listTransactions} setListTransactions={setListTransactions} setFilter={setFilter} typeLists={typeLists}/>
                    

                    <ul className='listHolder'>
                        
                        {listTransactions.length === 0 ? 
                            <EmptyBalance/>
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