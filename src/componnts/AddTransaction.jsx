import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [error, seterror] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const adTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) {
      seterror("Fill all fields");
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };
    console.log("newTransaction", newTransaction);
    addTransaction(newTransaction);
    setText("");
    setAmount("");
    seterror("");
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      {error && <p className="error">{error}</p>}
      <form onSubmit={adTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
