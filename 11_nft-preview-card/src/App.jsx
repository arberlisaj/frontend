import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import cube from "./images/image-equilibrium.jpg";
import ethereum from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";

const App = () => {
  const imageStyles = {
    width: "100%",
    borderRadius: "6px",
  };
  const paragraphStyles = {
    display: "flex",
    alignItems: "center",
    gap: 0.7,
  };
  return (
    <Box
      sx={{
        bgcolor: "#14253d",
        p: 2,
        borderRadius: 2,
        maxWidth: "300px",
        marginInline: "auto",
      }}
    >
      <img style={imageStyles} src={cube} alt="cube image" />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "22px",
          mt: "15px",
          mb: 1,
        }}
      >
        Equilibrium #329
      </Typography>
      <Typography sx={{ color: "lightblue" }}>
        Our Equilibrium collection promotes balance and calm.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 1.3,
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ ...paragraphStyles, color: "#00fff7", fontWeight: "bold" }}
        >
          <img src={ethereum} alt="ethereum" /> 0.041ETH
        </Typography>
        <Typography sx={paragraphStyles}>
          <img src={clock} alt="clock" /> 3 days left
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "gray", my: 1.5 }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          style={{
            width: "30px",
            border: "1px solid white",
            borderRadius: "50%",
          }}
          src={avatar}
          alt="profile"
        />
        <Typography sx={{ color: "lightblue" }}>
          Creation of <span style={{ color: "white" }}>Jules Wyvern</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
