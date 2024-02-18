import { useConnect } from "wagmi";
import metamask from "../assets/icons/metamask.png";
import wallet_connect from "../assets/icons/wallet_connect.svg";
import WalletButton from "./WalletButton";
import { useTranslation } from "react-i18next";

export default function Popup({ handlefn }) {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { t } = useTranslation();

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <span className="close-btn" onClick={handlefn}>
            &times;
          </span>
          <h2>{t("widget.connect")}</h2>
          <div className="wallet-btn-section">
            {connectors.map((connector) => (
              <WalletButton
                image={
                  connector.name === "MetaMask" ? metamask : wallet_connect
                }
                disabled={!connector.ready}
                key={connector.id}
                connect={() => connect({ connector })}
              >
                {connector.name === "MetaMask" ? "Metamask" : "Wallet Connect"}
                {!connector.ready && " (unsupported)"}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </WalletButton>
            ))}
            {error && (
              <div>
                {error.message.includes("User rejected the request")
                  ? "User rejected the request!"
                  : error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
