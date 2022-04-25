import React, { useState, useEffect } from "react";
import NftCard from "./NftCard";
import { Typography, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    margin: "1rem auto",
    padding: "10px 15px",
    border: "1px solid #6c6c6c",
  },

  nav__item__title: {
    "& p": {
      fontFamily: "Titillium web !important",
      fontWeight: "bold",
      fontSize: "1.3rem ",
      color: "#fff",
    },
  },
});

const NftLists = ({ assets }) => {
  const classes = useStyles();
  const [nftList, setNftList] = useState([]);
  useEffect(() => {
    setNftList(assets);
  }, [assets]);

  return (
    <div className={classes.parent}>
      <div className={classes.nav}>
        <div className={classes.nav__item}>
          <div className={classes.nav__item__title}>
            <Typography>Image</Typography>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.nav__item__title}>
            <Typography>Name</Typography>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.nav__item__title}>
            <Typography>Collection Name</Typography>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.nav__item__title}>
            <Typography>Floor Price</Typography>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.nav__item__title}>
            <Typography>Total Supply</Typography>
          </div>
        </div>
        <div className={classes.nav__item}>
          <div className={classes.nav__item__title}>
            <Typography>Avg. Price</Typography>
          </div>
        </div>
      </div>
      <div className={classes.nftLists}>
        {nftList.length > 0 ? (
          nftList.map((asset, index) => (
            <div key={index}>
              <NftCard asset={asset} />
            </div>
          ))
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default NftLists;
