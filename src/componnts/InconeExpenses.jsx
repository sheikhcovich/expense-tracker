import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const InconeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const income = transactions.map(transaction => transaction.amount)
    console.log(income);
    let totalIn = 0;
    let totalExp = 0;
    income.map(e => {
        if (e > 0) return totalIn += e;
        else return totalExp += e;
    })
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
                <p id="money-plus" className="money plus">${totalIn}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">${Math.abs(totalExp)}</p>
        </div>
      </div>
    )
}
