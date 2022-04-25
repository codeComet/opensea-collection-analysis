import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles({
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "95%",
    margin: "1rem auto",
    padding: "10px 15px",

    borderRadius: "10px",
    boxShadow:
      "rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
    backgroundColor: "#201e42",
  },

  img: {
    width: "50px",
  },

  txt: {
    fontFamily: "Nunito !important",
    fontWeight: "bold !important",
    textAlign: "left !important",
    color: "#fff !important",
  },
});

const NftCard = ({ asset, setCollectionData }) => {
  const classes = useStyles();
  const [nftCollectionSlug, setNftCollectionSlug] = useState("");
  const [collectionStat, setCollectionStat] = useState([]);

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  useEffect(() => {
    setNftCollectionSlug(asset.collection.slug);
  }, [asset]);

  const getNftCollectionData = async () => {
    const res = await axios.get(
      `https://api.opensea.io/collection/${nftCollectionSlug}`
    );
    setCollectionStat(res.data.collection);
    setCollectionData(res.data.collection);
    console.log(res.data.collection);
  };

  useEffect(() => {
    getNftCollectionData();
  }, [nftCollectionSlug]);

  return (
    <div>
      {asset !== null ? (
        <Box className={classes.parent}>
          <Box style={{ width: "16%" }}>
            <img
              src={asset.image_thumbnail_url}
              alt={asset?.name}
              className={classes.img}
            />
          </Box>
          <Box style={{ width: "16%" }}>
            <Typography variant="body2" className={classes.txt}>
              {asset?.name}
            </Typography>
          </Box>
          <Box style={{ width: "25%" }}>
            <Typography variant="body2" className={classes.txt}>
              {collectionStat?.name}
            </Typography>
          </Box>
          <Box style={{ width: "20%" }}>
            <Typography variant="body2" className={classes.txt}>
              {collectionStat.stats?.floor_price.toFixed(2)}
            </Typography>
          </Box>
          <Box style={{ width: "20%" }}>
            <Typography variant="body2" className={classes.txt}>
              {kFormatter(collectionStat.stats?.total_supply)}
            </Typography>
          </Box>
          <Box style={{ width: "3%" }}>
            <Typography variant="body2" className={classes.txt}>
              {collectionStat.stats?.average_price.toFixed(2)}
            </Typography>
          </Box>
          {/* <Box>
            <Typography variant="body2">
              {asset?.primary_asset_contracts[0]?.address}
            </Typography>
          </Box> */}
        </Box>
      ) : (
        <div>
          <Typography variant="body2">Loading...</Typography>
        </div>
      )}
    </div>
  );
};

export default NftCard;
