import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./Collection";
import NftLists from "./NftLists";

function App() {
  const [wallet, setWallet] = useState(
    "0x026b2B61A8657948eA1891BdE2a0E33b75eEBA3c"
  );

  const [slug, setSlug] = useState("");
  const [collectionData, setCollectionData] = useState([]);
  const [asset, setAsset] = useState([]);
  const [loading, setLoading] = useState(false);

  // const connectWallet = () => {
  //   if (window.ethereum) {
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((result) => {
  //         setWallet(result[0]);
  //         setMessage("Connected to wallet");
  //       })
  //       .catch((error) => {
  //         setMessage(error.message);
  //       });
  //   } else {
  //     alert("Metamask is not installed");
  //   }
  // };

  const getAssets = async () => {
    const response = await axios.get(
      "https://api.opensea.io/api/v1/assets?owner=" + wallet
    );
    console.log(response.data.assets);
    setAsset(response.data.assets);
    setSlug(response.data.assets[0].collection.slug);
  };

  const getCollectionData = () => {
    setLoading(true);
    axios
      .get(`https://api.opensea.io/collection/${slug}`)
      .then((res) => setCollectionData(res.data.collection))
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    getAssets();
    //getCollectionNameFromAddress();
  }, [wallet]);

  useEffect(() => {
    getCollectionData();
  }, [slug, asset]);

  return (
    <div className="App">
      {/* <button onClick={connectWallet}>connect</button>
      <p>{message}</p>
      <p>Wallet address: {wallet}</p> */}
      <Collection collectionData={collectionData} loading={loading} />
      <NftLists assets={asset} />
    </div>
  );
}

export default App;
