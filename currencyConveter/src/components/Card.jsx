import { useId } from "react";

function Card({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyoption = [],
  currencyValue = "usd",
  disableAmount = false,
  disableCurrency = false,
}) {
  const amountID = useId();

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor={amountID}
            className="text-lg font-medium text-gray-200"
          >
            {label}
          </label>
          <input
            id={amountID}
            type="number"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            min="0"
            className="w-full mt-2 p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            disabled={disableAmount}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="text-lg font-medium text-gray-200">
            Currency Type
          </label>
          <select
            value={currencyValue}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={disableCurrency}
            className="w-full mt-2 p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 appearance-none cursor-pointer"
          >
            {currencyoption.map((currency) => (
              <option
                value={currency}
                key={currency}
                className="bg-gray-800 text-white"
              >
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Card;
