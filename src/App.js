import './App.css';
import { AddTransaction } from './componnts/AddTransaction';
import { Balance } from './componnts/Balance';
import { Header } from './componnts/Header';
import { InconeExpenses } from './componnts/InconeExpenses';
import { TransactionList } from './componnts/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
      <Balance/>
      </div>
      <InconeExpenses />
      <TransactionList />
      <AddTransaction/>
   </GlobalProvider>
  );
}

export default App;
