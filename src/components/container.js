import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    padding: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    allignItems: "space-around",
    width: "100vw",
    padding: "20px",
  },
}));

export default Container;
