import { useState } from "react";
import Card from "./components/Card.jsx";
import useCurrencyInfo from "./hook/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(" ");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amountChange, setamountChange] = useState(" ");

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  function swaping() {
    setFrom(to);
    setTo(from);
    setamountChange(amount);
    setAmount(amountChange);
  }

  function Convert() {
    setamountChange(amount * CurrencyInfo[to]);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_#1a1a40_0%,_#0d0d26_70%)] p-6">
      <div className="w-full max-w-md bg-gray-900/20 backdrop-blur-2xl border border-violet-500/30 rounded-3xl p-8 shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-700">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-8 tracking-tight">
          Quantum Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Convert();
          }}
        >
          <div className="space-y-8">
            <Card
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyValue={from}
              currencyoption={options}
            />
            <button
              type="button"
              onClick={swaping}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-violet-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30"
            >
              ↔ Swap
            </button>
            <Card
              label="To"
              amount={amountChange}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyValue={to}
              currencyoption={options}
              disableAmount
            />
          </div>
          <button
            type="submit"
            className="w-full mt-8 py-4 bg-gradient-to-r from-magenta-500 to-cyan-500 text-white font-bold text-lg rounded-xl hover:from-magenta-600 hover:to-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-magenta-500/30"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
