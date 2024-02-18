import React, { useEffect, useState } from "react";
import contractAbi from "./abi.json";
import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";

export default function BuyWithBNB() {
  const [tokenAmount, setTokenAmount] = useState("");
  const [BNBAmount, setBNBAmount] = useState("");
  const [latestBnbPrice, setLatestBnbPrice] = useState(null);
  const tokenPriceInUsd = 0.000092;

  const { data: getLatestPrice, isError: getLatestPriceError } =
    useContractRead({
      address: "0xB4DDa08271AA810B2Ea8b7BDb98df9d549a01507",
      abi: contractAbi,
      functionName: "getLatestPrice",
      chainId: 97,
      watch: true,
    });

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0xB4DDa08271AA810B2Ea8b7BDb98df9d549a01507",
    abi: contractAbi,
    functionName: "buyWithBNB",
    args: [tokenAmount, false],
    chainId: 97,
    value: parseEther(String(BNBAmount)),
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleBNBAmountChange = (e) => {
    const amount = e.target.value;
    setBNBAmount(amount);
    // setTokenAmount(amount * TOKEN_CONVERSION_RATE);
    calculateTokenAmount(amount);
  };

  const handleTokenAmountChange = (e) => {
    const amount = e.target.value;
    setTokenAmount(amount);
    // setBNBAmount(amount / TOKEN_CONVERSION_RATE);
    calculateBnbAmount(amount);
  };

  const calculateBnbAmount = (numberOfTokens) => {
    // Replace these values with your actual token price in USD and number of decimals
    const decimals = 18;

    // Get the latest BNB price in USD
    const bnbPriceInUsd = Number(latestBnbPrice);

    // Calculate the token price in BNB
    const tokenPriceInBnb = tokenPriceInUsd / (bnbPriceInUsd / 10 ** decimals);

    // Calculate the total BNB amount required
    const totalBnbAmount = numberOfTokens * tokenPriceInBnb + 0.00001;
    console.log("Total Bnb Amount", totalBnbAmount);
    setBNBAmount(totalBnbAmount);
  };

  const calculateTokenAmount = (bnbAmount) => {
    const decimals = 18;
    const bnbPriceInUsd = Number(latestBnbPrice);
    console.log("Latest Price", Number(getLatestPrice));
    console.log("BNB price ", bnbPriceInUsd / 10 ** decimals);
    const tokenPriceInBnb = tokenPriceInUsd / (bnbPriceInUsd / 10 ** decimals);
    const totalTokenAmount = Math.ceil(bnbAmount / tokenPriceInBnb);

    setTokenAmount(totalTokenAmount);
  };

  useEffect(() => {
    console.log("Latest Price", getLatestPrice);
    console.log("Latest Price", Number(getLatestPrice));
    console.log("----------------------------------------");
    setLatestBnbPrice(getLatestPrice);
  }, [getLatestPrice]);

  return (
    <div>
      <div>
        <label>
          BNB Amount:
          <input
            type="number"
            value={BNBAmount}
            onChange={handleBNBAmountChange}
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
        {isLoading ? "buying" : "Buy With BNB"}
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
      {getLatestPriceError && (
        <div>getLatestPrice Error: {getLatestPriceError?.message}</div>
      )}
    </div>
  );
}
