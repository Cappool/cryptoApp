import { useState, React } from "react";
import bnb from "../assets/icons/bnb.png";
import usdt from "../assets/icons/usdt.png";
import ded from "../assets/icons/ded.png";
import Modal from "./Modal.jsx";
import ConnectModal from "./ConnectModal.jsx";
const Presale = () => {
  const [coin, setCoin] = useState("BNB");
  const [image, setImage] = useState(usdt);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleBtnAndInput = function (coin_val, img_path) {
    setCoin(coin_val);
    setImage(img_path);
  };

  const handleOpenModal1 = () => setShowModal1(true);
  const handleOpenModal2 = () => setShowModal2(true);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleCloseModal2 = () => setShowModal2(false);

  const handleOpenConnectModal = () => setShowConnectModal(true);

  const handleCloseConnectModal = () => setShowConnectModal(false);
  return (
    <div className="presale">
      <div className="progress-container">
        <progress className="progress" value="70" max="100" />
        <div className="progress-text">until next increase</div>
      </div>
      <div>
        <strong>ERHOBENE USDT</strong> : $28,000 / $420,000
      </div>
      <div>
        YOUR PURCHASED $DED=0
        <button className="info-button" onClick={handleOpenModal1}>
          ⓘ
        </button>
      </div>
      <div>
        YOUR STAKEABLE $DED=0
        <button className="info-button" onClick={handleOpenModal2}>
          ⓘ
        </button>
      </div>
      <div className="division-section">
        <div className="line"></div>1 DED= $0.005
        <div className="line"></div>
      </div>
      {/* <div className="presale-exchange-section"> */}
      <div className="presale-buttons">
        <button
          className={`btn ${coin === "BNB" ? "btn-selected" : ""}`}
          onClick={() => handleBtnAndInput("BNB", bnb)}
        >
          <div className="btn-div">
            <img src={bnb} alt="bnb" className="presale-btn-image" />
            BNB
          </div>
        </button>
        <button
          className={`btn ${coin === "USDT" ? "btn-selected" : ""}`}
          onClick={() => handleBtnAndInput("USDT", usdt)}
        >
          <div className="btn-div">
            <img src={usdt} alt="usdt" className="presale-btn-image" />
            USDT
          </div>
        </button>
      </div>
      <div className="presale-exchange">
        <div className="coin-input">
          <label>{coin} you pay</label>
          <div className="input_div">
            <input className="input1" placeholder="0" />
            <img src={image} alt="bnb" className="presale-coin-image" />
          </div>
        </div>
        <div className="ded-input">
          <label>DED you receive</label>
          <div className="input_div">
            <input className="input2" placeholder="0" />
            <img src={ded} alt="ded" className="presale-coin-image" />
          </div>
        </div>
      </div>
      <button className="btn btn-connect" onClick={handleOpenConnectModal}>
        Connect wallet
      </button>
      <Modal showModal={showModal1} handlefn={handleCloseModal1}>
        Your total purchased tokens are all tokens purchased using the connected
        wallet. This includes all staked and unstaked tokens.
      </Modal>
      <Modal showModal={showModal2} handlefn={handleCloseModal2}>
        Unclaimed $GBTC that was bought using ETH or ERC-20 USDT can be staked
        now. Please note that all early staked tokens can be withdrawn 7 days
        after token claiming goes live, which will happen after the presale has
        concluded.
      </Modal>

      <ConnectModal
        showConnectModal={showConnectModal}
        handlefn={handleCloseConnectModal}
      />
    </div>

    // </div>
  );
};

export default Presale;
