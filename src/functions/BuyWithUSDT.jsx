import React, { useState } from "react";
import contractAbi from "./abi.json";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function BuyWithUSDT() {
  const [tokenAmount, setTokenAmount] = useState("1");
  const [usdtAmount, setUsdtAmount] = useState("");
  const tokenPrice = 0.000092;

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0xB4DDa08271AA810B2Ea8b7BDb98df9d549a01507",
    abi: contractAbi,
    functionName: "buyWithUSDT",
    args: [tokenAmount, false],
    chainId: 97,
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleUsdtAmountChange = (e) => {
    const amount = e.target.value;
    setUsdtAmount(amount);
    var totalTokenAmount = Math.ceil(amount / tokenPrice);
    setTokenAmount(totalTokenAmount);
  };

  const handleTokenAmountChange = (e) => {
    const amount = e.target.value;
    setTokenAmount(amount);
    setUsdtAmount(amount * tokenPrice);
  };

  return (
    <div>
      <div>
        <label>
          USDT Amount:
          <input
            type="number"
            value={usdtAmount}
            onChange={handleUsdtAmountChange}
          />
        </label>
      </div>
      <div>
        <label>
          Token Amount:
          <input
            type="number"
            value={tokenAmount}
            onChange={handleTokenAmountChange}
          />
        </label>
      </div>
      <button disabled={!write} onClick={() => write?.()}>
        {isLoading ? "buying" : "Buy With USDT"}
      </button>
      {isSuccess && (
        <div>
          Purchase successful!
          <div>
            <a href={`https://testnet.bscscan.com/tx/${data?.hash}`}>
              View Transaction
            </a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  );
}
