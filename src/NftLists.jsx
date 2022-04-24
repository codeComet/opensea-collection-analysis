import React, { useState, useEffect } from "react";
import NftCard from "./NftCard";
import { CircularProgress } from "@mui/material";

const NftLists = ({ assets }) => {
  const [nftList, setNftList] = useState([]);
  useEffect(() => {
    setNftList(assets);
  }, [assets]);
  return (
    <div>
      {nftList.length > 0 ? (
        nftList.map((asset, index) => (
          <div key={index}>
            <NftCard asset={asset} />
          </div>
        ))
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default NftLists;
