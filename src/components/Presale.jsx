import { useState, useEffect, React } from "react";
import bnb from "../assets/icons/bnb.png";
import usdt from "../assets/icons/usdt.png";
import ded from "../assets/icons/ded.png";
import Modal from "./Modal.jsx";
import ConnectModal from "./ConnectModal.jsx";
import { useAccount } from "wagmi";
import { useContractRead } from "wagmi";
import contractAbi from "../functions/abi.json";
import { useTranslation } from "react-i18next";
import Timer from "./Timer.jsx";

const Presale = () => {
  const [coin, setCoin] = useState("BNB");
  const [image, setImage] = useState(bnb);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  // const [showConnectModal, setShowConnectModal] = useState(false);
  const [input1value, setInput1Value] = useState(0);
  const [input2value, setInput2Value] = useState(0);
  const [latestBnbPrice, setLatestBnbPrice] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [roundTimeDetails, setRoundTimeDetails] = useState(0);
  const [roundDetails, setRoundDetails] = useState(0);
  const [usdraised, setUsdraised] = useState(0);
  const { t } = useTranslation();
  const addr = process.env.REACT_APP_CONTRACT_A;

  const handleBtnAndInput = function (coin_val, img_path) {
    setCoin(coin_val);
    setImage(img_path);
    setInput1Value(0);
    setInput2Value(0);
  };

  const handleOpenModal1 = () => setShowModal1(true);
  const handleOpenModal2 = () => setShowModal2(true);

  const handleCloseModal1 = () => setShowModal1(false);
  const handleCloseModal2 = () => setShowModal2(false);

  // const handleOpenConnectModal = () => setShowConnectModal(true);
  // const handleCloseConnectModal = () => setShowConnectModal(false);

  function setInput1fn(coin, e) {
    const val = e.target.value;
    let res = 0;
    const coinPrice = Number(getCoinPrice) / 10 ** 18;
    setInput1Value(val);
    if (coin === "BNB") {
      // res = val * 1000;
      calculateTokenAmount(val);
    } else {
      res = Math.ceil(val / coinPrice);
      setInput2Value(res);
    }
  }

  function setInput2fn(coin, e) {
    const val = e.target.value;
    let res = 0;
    const coinPrice = Number(getCoinPrice) / 10 ** 18;
    setInput2Value(val);
    if (coin === "BNB") {
      // res = val / 1000;
      calculateBnbAmount(val);
    } else {
      res = (val * coinPrice).toFixed(4);
      setInput1Value(res);
    }
  }

  //Presale functions
  const { address, connector, isConnected } = useAccount();
  const {
    data: getUSDraised,
    isError,
    isLoaded,
  } = useContractRead({
    address: addr,
    abi: contractAbi,
    functionName: "usdRaised",
    chainId: 56,
    watch: true,
  });
  const { data: getUserDeposit, isError: getUserDepositError } =
    useContractRead({
      address: addr,
      abi: contractAbi,
      functionName: "userDeposits",
      args: [address],
      chainId: 56,
      watch: true,
    });
  const { data: getLatestPrice, isError: getLatestPriceError } =
    useContractRead({
      address: addr,
      abi: contractAbi,
      functionName: "getLatestPrice",
      chainId: 56,
      watch: true,
    });
  const { data: getCoinPrice, isError: getCoinPriceError } = useContractRead({
    address: addr,
    abi: contractAbi,
    functionName: "calculatePrice",
    args: [1],
    chainId: 56,
    watch: true,
  });
  const { data: getRoundTimeDetails, isError: getRoundTimeDetailsError } =
    useContractRead({
      address: addr,
      abi: contractAbi,
      functionName: "roundDetails",
      args: [2],
      chainId: 56,
      watch: true,
    });
  const { data: getCurrentStep, isError: getCurrentStepError } =
    useContractRead({
      address: addr,
      abi: contractAbi,
      functionName: "currentStep",
      chainId: 56,
      watch: true,
    });
  const { data: getRoundDetails, isError: getRoundDetailsError } =
    useContractRead({
      address: addr,
      abi: contractAbi,
      functionName: "roundDetails",
      args: [0],
      chainId: 56,
      watch: true,
    });

  const calculateBnbAmount = (numberOfTokens) => {
    const decimals = 18;
    const bnbPriceInUsd = Number(latestBnbPrice);
    const tokenPriceInBnb = coinPrice / (bnbPriceInUsd / 10 ** decimals);
    const totalBnbAmount = numberOfTokens * tokenPriceInBnb;
    const factor = Math.pow(10, 10);
    const fBnbAmount = Math.ceil(totalBnbAmount * factor) / factor;
    console.log("Total Bnb Amount", totalBnbAmount);
    setInput1Value(fBnbAmount);
  };

  const calculateTokenAmount = (bnbAmount) => {
    const decimals = 18;
    const bnbPriceInUsd = Number(latestBnbPrice);
    console.log("Latest Price", Number(getLatestPrice));
    console.log("BNB price ", bnbPriceInUsd / 10 ** decimals);
    const tokenPriceInBnb = coinPrice / (bnbPriceInUsd / 10 ** decimals);
    const totalTokenAmount = Math.floor(bnbAmount / tokenPriceInBnb);

    setInput2Value(totalTokenAmount);
  };

  useEffect(() => {
    setLatestBnbPrice(getLatestPrice);
    setCoinPrice(Number(getCoinPrice) / 10 ** 18);
    setCurrentStep(Number(getCurrentStep));
    setRoundDetails(getRoundDetails);
    setRoundTimeDetails(getRoundTimeDetails);
    setUsdraised(Number(getUSDraised) / 10 ** 18 + 3.1406 * 10 ** 4);
  }, [
    getLatestPrice,
    getCoinPrice,
    getCurrentStep,
    getRoundDetails,
    getRoundTimeDetails,
    getUSDraised,
  ]);

  return (
    <div className="presale">
      <div className="timer">
        <div className="timer-description">{t("widget.time")}</div>
        <Timer targetTimestamp={Number(roundTimeDetails[currentStep])} />
      </div>
      <div className="progress-container">
        <progress
          className="progress"
          value={Math.round(usdraised)}
          max={Math.round(Number(roundDetails[currentStep]) * coinPrice)}
        />
        <div className="progress-text">{t("widget.UPI")}</div>
      </div>
      <div>
        <strong>{t("widget.USDT_RAISED")}</strong> :{" "}
        {usdraised.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
        /{" "}
        {(Number(roundDetails[currentStep]) * coinPrice).toLocaleString(
          "en-US",
          { style: "currency", currency: "USD" }
        )}
      </div>
      <div>
        <strong>{t("widget.purchased")}</strong> ={" "}
        {isConnected ? Math.round(Number(getUserDeposit) / 10 ** 18) : 0}
        <button className="info-button" onClick={handleOpenModal1}>
          ⓘ
        </button>
      </div>
      {/* <div>
        <strong>{t("widget.staked")}</strong> = 0
        <button className="info-button" onClick={handleOpenModal2}>
          ⓘ
        </button>
      </div> */}
      <div className="division-section">
        <div className="line"></div>1 DEDPOOL = ${coinPrice}
        <div className="line"></div>
      </div>
      {/* <div className="division-section">
        <div className="line"></div>Listing Price = $0.00015
        <div className="line"></div>
      </div> */}
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
          <label>
            {coin} {t("widget.pay")}
          </label>
          <div className="input_div">
            <input
              className="input1"
              type="number"
              value={input1value}
              onChange={(e) => {
                // const validKeys = [
                //   "0",
                //   "1",
                //   "2",
                //   "3",
                //   "4",
                //   "5",
                //   "6",
                //   "7",
                //   "8",
                //   "9",
                //   "Backspace",
                //   "Delete",
                //   "ArrowLeft",
                //   "ArrowRight",
                //   "Home",
                //   "End",
                // ];

                // // Check if the pressed key is a valid key
                // if (!validKeys.includes(e.key)) {
                //   // Prevent the default action (typing the character)
                //   e.preventDefault();
                // }
                setInput1fn(coin, e);
              }}
            />
            <img src={image} alt="bnb" className="presale-coin-image" />
          </div>
        </div>
        <div className="ded-input">
          <label>DEDPOOL {t("widget.receive")}</label>
          <div className="input_div">
            <input
              className="input2"
              type="number"
              value={input2value}
              onChange={(e) => {
                setInput2fn(coin, e);
              }}
            />
            <img src={ded} alt="ded" className="presale-coin-image" />
          </div>
        </div>
      </div>
      <ConnectModal coin={coin} amount={input2value} value={input1value} />
      {showModal1 && (
        <Modal handlefn={handleCloseModal1}>{t("widget.purchased_info")}</Modal>
      )}
      {showModal2 && (
        <Modal handlefn={handleCloseModal2}>{t("widget.staked_info")}</Modal>
      )}
    </div>
  );
};

export default Presale;
