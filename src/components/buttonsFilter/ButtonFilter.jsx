


function FilterButtons({listTransactions, setListTransactions, setFilter, typeLists}) {
    
    return(
        <div className='resume'>
            <p>Resumo Financeiro</p>
            <div>
                <label className="bt" tabIndex="0" htmlFor="todos">Todos
                    <input type="radio" hidden  id="todos" value="0" name="check" onClick={setFilter("todos")}/>
                    
                </label>

                <label className="bt" tabIndex="0" htmlFor="entrada">Entradas
                    <input type="radio" hidden  id="entrada" value="0" name="check" onClick={setFilter("entrada")} />
                </label>

                <label className="bt" tabIndex="0" htmlFor="out">Saída
                    <input type="radio" hidden  id="out" value="0" name="check" onClick={setFilter("saida")}/>
                </label>
            </div>
        </div>
    )    
}

export default FilterButtons