import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, CircularProgress } from "@mui/material";
import logo from "./assets/eth.png";

const useStyles = makeStyles({
  banner: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  heading: {
    fontFamily: "Titillium Web !important",
    fontWeight: "600 !important",
    marginTop: "3rem !important",
  },
  collectionParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  img: {
    borderRadius: "50%",
    position: "absolute",
    top: "-5rem",
    borderRadius: "50%",
    left: "46%",
  },

  details: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    margin: "1rem auto",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    boxShadow: "1px 1px 4px -1px rgb(0 0 0 / 75%)",
  },

  col: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },

  ethLogo: {
    width: "18px",
    marginRight: "10px",
    objectFit: "contain",
  },

  subCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Nunito !important",
    fontWeight: "500 !important",
  },
});

const Collection = ({ collectionData }) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <img
          src={collectionData?.banner_image_url}
          alt={collectionData?.name}
          className={classes.banner}
        />
      </div>

      <div className={classes.collectionParent}>
        <div className={classes.collectionImg}>
          <img
            src={collectionData?.image_url}
            alt={collectionData?.name}
            className={classes.img}
          />
        </div>
        <Typography variant="h4" className={classes.heading}>
          {collectionData?.name}
        </Typography>
      </div>

      <div className={classes.details}>
        <div className={classes.col}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Nunito", color: "#5e5e5e" }}
          >
            Total Sales
          </Typography>
          <Typography variant="h5">
            {collectionData.stats?.total_sales}
          </Typography>
        </div>
        <div className={classes.col}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Nunito", color: "#5e5e5e" }}
          >
            Floor Price
          </Typography>
          <Typography variant="h5" className={classes.subCol}>
            <img src={logo} alt="eth" className={classes.ethLogo} />
            {collectionData.stats?.floor_price}
          </Typography>
        </div>
        <div className={classes.col}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Nunito", color: "#5e5e5e" }}
          >
            Total Supply
          </Typography>
          <Typography variant="h5">
            {collectionData.stats?.total_supply}
          </Typography>
        </div>
        <div className={classes.col}>
          <Typography
            variant="h6"
            style={{ fontFamily: "Nunito", color: "#5e5e5e" }}
          >
            Avg. Price
          </Typography>
          <Typography variant="h5" className={classes.subCol}>
            <img src={logo} alt="eth" className={classes.ethLogo} />
            {collectionData.stats?.average_price}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Collection;
