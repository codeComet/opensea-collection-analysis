import { Box, Typography } from "@mui/material";
import React from "react";

const NftCard = ({ asset }) => {
  return (
    <div>
      {asset !== null ? (
        <Box>
          <Box>
            <img src={asset.image_thumbnail_url} alt={asset?.name} />
          </Box>
          <Box>
            <Typography variant="body2">{asset?.name}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">{asset?.stats?.floor_price}</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {asset?.stats?.total_supply}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {asset?.stats?.average_price}
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
