// import React from 'react'

const InputBox = ({
  label,
  currencyOption = [],
  amount,
  onAmountChange,
  onCurrencyChange,
  selectedCurrency,
}) => {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor="" className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          type="number"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Curreny Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
