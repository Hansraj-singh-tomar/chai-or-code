import { useState } from "react";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";
import InputBox from "./InputBox";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");

  let currencyInfo = useCurrencyInfo(from);
  // console.log(currencyInfo);
  const options = Object.keys(currencyInfo);
  console.log(options);

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function clear() {
    setFrom(from);
    setTo(to);
    setAmount(0);
    setConvertedAmount(0);
  }

  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center "
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountChange={(amountt) => setAmount(amountt)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={() => convert()}
            >
              Convert {from.toUpperCase()} To {to.toUpperCase()}
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-2"
              onClick={() => clear()}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
