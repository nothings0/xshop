// import { Sidebar } from "ui";
import { Outlet } from "react-router-dom";
import { Box } from "ui/mantine";
import Headers from "../components/Header";
import NavbarMinimal from "../components/Navbar";
// const sidebarWidth = 750;
const MainLayout = () => {
  return (
    <Box display={"flex"}>
      <NavbarMinimal />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          width: `calc(100vw - 110px)`,
          backgroundColor: "#f8f9fa",
          padding: "0 15px",
        }}
      >
        <Headers />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
