import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./Collection";
import NftLists from "./NftLists";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#00bcd4",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    cursor: "pointer",
    width: "200px",
    border: "none",
    fontSize: "1.3rem",
  },

  btnContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  btnTxt: {
    color: "#fff",
    fontSize: "1.3rem",
  },
});

function App() {
  const classes = useStyles();
  const [wallet, setWallet] = useState("");
  // "0x026b2B61A8657948eA1891BdE2a0E33b75eEBA3c"

  const [slug, setSlug] = useState("");
  const [collectionData, setCollectionData] = useState([]);
  const [asset, setAsset] = useState([]);
  const [loading, setLoading] = useState(false);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setWallet(result[0]);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("Metamask is not installed");
    }
  };

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getAssets = async () => {
    const response = await axios.get(
      "https://api.opensea.io/api/v1/assets?owner=" + wallet
    );
    // console.log(getRandomArbitrary(0, response.data.assets.length));
    let resLength = response.data.assets.length;
    setAsset(response.data.assets);
    setSlug(
      response.data.assets[getRandomNum(0, resLength - 1)].collection.slug
    );
  };

  const getCollectionData = async () => {
    setLoading(true);
    const res = await axios.get(`https://api.opensea.io/collection/${slug}`);
    setCollectionData(res.data.collection);
    setLoading(false);
  };

  useEffect(() => {
    connectWallet();
  }, []);

  useEffect(() => {
    getAssets();
  }, [wallet]);

  useEffect(() => {
    getCollectionData();
  }, [slug]);

  return (
    <div className="App">
      {wallet === "" ? (
        <div className={classes.btnContainer}>
          <button onClick={connectWallet} className={classes.btn}>
            Connect wallet
          </button>
          <p className={classes.btnTxt}>
            Connect your wallet first to show your collection
          </p>
        </div>
      ) : (
        <div>
          <Collection collectionData={collectionData} loading={loading} />
          <NftLists assets={asset} setCollectionData={setCollectionData} />
        </div>
      )}
    </div>
  );
}

export default App;
