import React, { useState, useEffect } from "react";
import mintingSolim from "../assets/mintingSolim.svg";
import Slider from "react-slick";
import abi from "../constants/abi";
import { ethers } from "ethers";
import Img1 from "../assets/insects/1.png";
import Img2 from "../assets/insects/2.png";
import Img3 from "../assets/insects/3.png";
import Img4 from "../assets/insects/4.png";
import Img5 from "../assets/insects/5.png";

const Minting = () => {
  const [amount, setAmount] = useState(1);

  const contractAddress = "0xbFedF250309019d81482cEC248F75044615D8612";
  //=======================================================
  const { ethereum } = window;
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    if (!ethereum) {
      console.log("Please install metamask");
      return;
    } else {
      console.log("Wallet exists");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found a valid account ", account);
      setCurrentAccount(account);
    } else {
      console.log("No valid account");
    }
  };

  const connectWalletHandler = async () => {
    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const mintNftHandler = async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const imperial = new ethers.Contract(contractAddress, abi, signer);
        console.log("Initialize payment");

        let valuee = Number(await imperial.cost());
        let multipliedValue = valuee * amount;
        let value = multipliedValue.toString();
        console.log("value", value);
        console.log("test: multipliedValue", multipliedValue);
        let nftTxn = await imperial.publicMint(amount, {
          value: multipliedValue,
        });

        console.log("Mining... please wait");
        await nftTxn.wait();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
        );
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const connectWalletButton = () => {
    return (
      <button
        onClick={connectWalletHandler}
        className="btn cta-button connect-wallet-button"
      >
        Connect Wallet
      </button>
    );
  };
  const mintNftButton = () => {
    return (
      <button
        onClick={mintNftHandler}
        className="btn cta-button mint-nft-button"
      >
        Mint NFT
      </button>
    );
  };
  const getOwnNfts = async () => {
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const imperial = new ethers.Contract(contractAddress, abi, signer);
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Found an account! Address: ", accounts[0]);
        setCurrentAccount(accounts[0]);

        console.log("found account", accounts[0]);
        let nftArray = await imperial.walletOfOwner(accounts[0]);

        console.log("getting nfts");
        console.log("nftArray", nftArray);
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    checkWalletIsConnected();
    //  getOwnNfts();
  }, []);

  const toLocalFormat = (a) => {
    return a.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    amount > 0 && setAmount(amount - 1);
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <svg
        className={className}
        onClick={onClick}
        style={{ ...style }}
        width="112"
        height="113"
        viewBox="0 0 112 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="9.32788"
          y="103.392"
          width="93.1762"
          height="93.1762"
          rx="46.5881"
          transform="rotate(-90 9.32788 103.392)"
          fill="#1E1D3C"
        />
        <path
          d="M54.0224 41.5916C53.7725 41.8393 53.5741 42.134 53.4387 42.4587C53.3033 42.7834 53.2336 43.1317 53.2336 43.4834C53.2336 43.8352 53.3033 44.1834 53.4387 44.5081C53.5741 44.8328 53.7725 45.1275 54.0224 45.3752L62.8222 54.1413L42.5826 54.1413C41.8754 54.1413 41.1971 54.422 40.697 54.9217C40.197 55.4214 39.916 56.0991 39.916 56.8058C39.916 57.5124 40.197 58.1902 40.697 58.6898C41.1971 59.1895 41.8754 59.4702 42.5826 59.4702L62.8222 59.4702L54.0224 68.2363C53.5203 68.7381 53.2382 69.4186 53.2382 70.1281C53.2382 70.8377 53.5203 71.5182 54.0224 72.0199C54.5245 72.5216 55.2056 72.8035 55.9157 72.8035C56.6258 72.8035 57.3069 72.5216 57.809 72.0199L71.1421 58.6975C71.3848 58.4441 71.5752 58.1453 71.7021 57.8183C71.8431 57.4993 71.916 57.1545 71.916 56.8058C71.916 56.4571 71.8431 56.1122 71.7021 55.7933C71.5752 55.4662 71.3848 55.1674 71.1421 54.914L57.809 41.5916C57.5611 41.3419 57.2662 41.1437 56.9412 41.0084C56.6163 40.8731 56.2677 40.8035 55.9157 40.8035C55.5637 40.8035 55.2151 40.8731 54.8902 41.0084C54.5652 41.1437 54.2703 41.3419 54.0224 41.5916Z"
          fill="white"
          fillOpacity="0.32"
        />
      </svg>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <svg
        className={className}
        onClick={onClick}
        style={{ ...style }}
        width="113"
        height="113"
        viewBox="0 0 113 113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8.38818"
          y="104.205"
          width="96"
          height="96"
          rx="48"
          transform="rotate(-90 8.38818 104.205)"
          fill="#1E1D3C"
        />
        <path
          d="M58.2818 71.4167C58.5317 71.169 58.7301 70.8743 58.8655 70.5496C59.0009 70.2249 59.0706 69.8767 59.0706 69.5249C59.0706 69.1732 59.0009 68.8249 58.8655 68.5002C58.7301 68.1755 58.5317 67.8808 58.2818 67.6331L49.482 58.867L69.7216 58.867C70.4288 58.867 71.1071 58.5863 71.6072 58.0866C72.1072 57.5869 72.3882 56.9092 72.3882 56.2026C72.3882 55.4959 72.1072 54.8182 71.6072 54.3185C71.1071 53.8188 70.4288 53.5381 69.7216 53.5381L49.482 53.5381L58.2818 44.772C58.7839 44.2703 59.066 43.5898 59.066 42.8802C59.066 42.1707 58.7839 41.4902 58.2818 40.9884C57.7797 40.4867 57.0986 40.2048 56.3885 40.2048C55.6784 40.2048 54.9973 40.4867 54.4952 40.9884L41.1621 54.3108C40.9194 54.5642 40.729 54.863 40.6021 55.1901C40.4611 55.509 40.3882 55.8539 40.3882 56.2026C40.3882 56.5513 40.4611 56.8961 40.6021 57.2151C40.7291 57.5421 40.9194 57.8409 41.1621 58.0943L54.4952 71.4167C54.7431 71.6664 55.038 71.8646 55.363 71.9999C55.6879 72.1352 56.0365 72.2048 56.3885 72.2048C56.7405 72.2048 57.0891 72.1352 57.414 71.9999C57.739 71.8646 58.0339 71.6664 58.2818 71.4167Z"
          fill="white"
          fillOpacity="0.32"
        />
      </svg>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="minting-page">
      <div className="row m-0 w-100">
        <div className="mintingBoxContainer col-12 col-md-5 d-flex flex-column justify-content-center align-items-center">
          <div className="p-4 mintingLeftBox">
            <h1>Mint a firefly</h1>
            <p className="m-0">
              Lorem ipsum dolor sit amet. Ut repel le dus iusto aut nihil
              eligendaut dolor expedita ipsum dolor sit.
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn ratioo" onClick={() => decreaseAmount()}>
                -
              </button>
              <div>
                <p className="m-0 greenNbr">{toLocalFormat(amount)}</p>
              </div>
              <button className="btn ratioo" onClick={() => increaseAmount()}>
                +
              </button>
            </div>
            <div className="button-div">
              {currentAccount ? mintNftButton() : connectWalletButton()}
            </div>
          </div>
        </div>
        <div className="mintingCarContainer col-12 col-md-7 d-flex flex-column justify-content-center">
          <div className="mintingSlider position-relative">
            <Slider {...settings}>
              <div>
                <img src={mintingSolim} alt="solim" className="mintingSolim" />
              </div>
              <div>
                <img src={mintingSolim} alt="solim" className="mintingSolim" />
              </div>
              <div>
                <img src={mintingSolim} alt="solim" className="mintingSolim" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;
