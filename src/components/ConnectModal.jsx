import { useState, useEffect, React } from "react";
import contractAbi from "../functions/abi.json";
import { parseEther } from "viem";
import { useAccount, useDisconnect } from "wagmi";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import Popup from "./Popup";
import { useTranslation } from "react-i18next";
const addr = process.env.REACT_APP_CONTRACT_A;

export default function ConnectModal({ coin, amount, value }) {
  const { address, connector, isConnected } = useAccount();
  const [showConnectModal, setShowConnectModal] = useState(false);
  const handleOpenConnectModal = () => setShowConnectModal(true);
  const handleCloseConnectModal = () => setShowConnectModal(false);
  const { t } = useTranslation();
  const [isAL, setisAL] = useState(false);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addr,
    abi: contractAbi,
    functionName: "buyWithUSDT",
    args: [amount, false],
    chainId: 56,
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const prepareErrorMsg = (msg) => {
    if (msg.includes("Chain mismatch")) return t("errors.Chain_mismatch");
    else if (msg.includes("Make sure to add enough allowance"))
      return t("errors.allowance");
    else if (msg.includes("Invalid sale amount")) return "";
    else if (msg.includes("Less payment")) return t("errors.less_payment");
    else if (msg.includes("exceeds the balance of the account"))
      return t("errors.exceeds_balance");
    else if (msg.includes("exceeds max tokens to buy"))
      return t("You cannot buy more than 300000000 tokens!");
    else if (msg.includes("Cannot convert")) return "Enter digits only!";
    else if (
      msg.includes(
        'The contract function "buyWithUSDT" reverted with the following reason:'
      )
    )
      return "You do not have enough USDT for this transaction! Make sure you have enough USDT for token exchange.";
    return msg;
  };

  const errorMsg = (msg) => {
    if (msg.includes("User rejected the request"))
      return t("errors.user_rejected");
  };

  useEffect(() => {
    if (amount >= 10500) setisAL(false);
  }, [amount]);

  if (isConnected) {
    if (coin === "BNB") {
      return (
        <BuyWithBNB
          amount={amount}
          value={value + 0.00001}
          prepareErrorMsg={prepareErrorMsg}
          errorMsg={errorMsg}
        />
      );
    }
    return (
      <div className="bottom-container">
        {isPrepareError && (
          <div className="errormsg-container">
            <a style={{ color: "red" }}>
              {prepareErrorMsg(prepareError?.message)}
            </a>
          </div>
        )}
        {isAL && (
          <div className="errormsg-container">
            <a style={{ color: "red" }}>
              {prepareErrorMsg("Minimum Purchase amount is $1")}
            </a>
          </div>
        )}
        <button
          className="btn btn-connect"
          disabled={!write}
          onClick={() => {
            if (amount < 10500) {
              setisAL(true);
            } else write?.();
          }}
        >
          {isLoading ? t("widget.buying") : t("widget.buy_now")}
        </button>
        {isSuccess && (
          <div>
            {t("widget.purchase")}{" "}
            <a
              href={`https://bscscan.com/tx/${data?.hash}`}
              style={{
                textDecoration: "underline",
                color: "blue",
                lineHeight: "normal",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("widget.transaction")}
            </a>
          </div>
        )}
        {isError && (
          <div className="bottom_error">{errorMsg(error.message)}</div>
        )}
      </div>
    );
  }

  return (
    <div>
      <button className="btn btn-connect" onClick={handleOpenConnectModal}>
        {t("widget.connect")}
      </button>
      {showConnectModal && <Popup handlefn={handleCloseConnectModal} />}
    </div>
  );
}

const BuyWithBNB = ({ amount, value, prepareErrorMsg, errorMsg }) => {
  const [isAL, setisAL] = useState(false);
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addr,
    abi: contractAbi,
    functionName: "buyWithBNB",
    args: [amount, false],
    chainId: 56,
    value: parseEther(String(value)),
  });
  const { t } = useTranslation();

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    if (amount >= 10500) setisAL(false);
  }, [amount]);

  return (
    <div className="bottom-container">
      {isPrepareError && (
        <div className="errormsg-container">
          <a style={{ color: "red" }}>
            {prepareErrorMsg(prepareError?.message)}
          </a>
        </div>
      )}
      {isAL && (
        <div className="errormsg-container">
          <a style={{ color: "red" }}>
            {prepareErrorMsg("Minimum Purchase amount is 11000 $DEDPOOL")}
          </a>
        </div>
      )}
      <button
        className="btn btn-connect"
        disabled={!write}
        onClick={() => {
          if (amount < 10500) {
            setisAL(true);
          } else write?.();
        }}
      >
        {isLoading ? t("widget.buying") : t("widget.buy_now")}
      </button>
      {isSuccess && (
        <div>
          {t("widget.purchase")}{" "}
          <a
            href={`https://bscscan.com/tx/${data?.hash}`}
            style={{
              textDecoration: "underline",
              color: "blue",
              lineHeight: "normal",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("widget.transaction")}
          </a>
        </div>
      )}
      {isError && <div className="bottom_error">{errorMsg(error.message)}</div>}
    </div>
  );
};
