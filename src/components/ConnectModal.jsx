import { useState, React } from "react";
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

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addr,
    abi: contractAbi,
    functionName: "buyWithUSDT",
    args: [amount, false],
    chainId: 97,
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
    return msg;
  };

  const errorMsg = (msg) => {
    if (msg.includes("User rejected the request"))
      return t("errors.user_rejected");
  };

  if (isConnected) {
    if (coin === "BNB") {
      return (
        <BuyWithBNB
          amount={amount}
          value={value + 0.01}
          prepareErrorMsg={prepareErrorMsg}
          errorMsg={errorMsg}
        />
      );
    }
    return (
      <div>
        {isPrepareError && (
          <div>
            <a style={{ color: "red" }}>
              {prepareErrorMsg(prepareError?.message)}
            </a>
          </div>
        )}
        <button
          className="btn btn-connect"
          disabled={!write}
          onClick={() => write?.()}
        >
          {isLoading ? t("widget.buying") : t("widget.buy_now")}
        </button>
        {isSuccess && (
          <div>
            {t("widget.purchase")}{" "}
            <a
              href={`https://testnet.bscscan.com/tx/${data?.hash}`}
              style={{ textDecoration: "underline", color: "blue" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("widget.transaction")}
            </a>
          </div>
        )}
        {isError && <div>{errorMsg(error.message)}</div>}
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
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: addr,
    abi: contractAbi,
    functionName: "buyWithBNB",
    args: [amount, false],
    chainId: 97,
    value: parseEther(String(value)),
  });
  const { t } = useTranslation();

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      {isPrepareError && (
        <div>
          <a style={{ color: "red" }}>
            {prepareErrorMsg(prepareError?.message)}
          </a>
        </div>
      )}
      <button
        className="btn btn-connect"
        disabled={!write}
        onClick={() => write?.()}
      >
        {isLoading ? t("widget.buying") : t("widget.buy_now")}
      </button>
      {isSuccess && (
        <div>
          {t("widget.purchase")}{" "}
          <a
            href={`https://testnet.bscscan.com/tx/${data?.hash}`}
            style={{ textDecoration: "underline", color: "blue" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("widget.transaction")}
          </a>
        </div>
      )}
      {isError && <div>{errorMsg(error.message)}</div>}
    </div>
  );
};
