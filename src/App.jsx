import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

// 🔹 Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5,
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {[
          { path: "/", element: <Home /> },
          { path: "/about", element: <About /> },
          { path: "/projects", element: <Projects /> },
          { path: "/education", element: <Education /> },
          { path: "/achievements", element: <Achievements /> },
          { path: "/experience", element: <Experience /> },
          { path: "/contact", element: <Contact /> },
        ].map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
              >
                {route.element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const { isDarkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: { main: "#6366f1" },
      secondary: { main: "#ec4899" },
      background: {
        default: "transparent",
        paper: isDarkMode ? "rgba(30, 41, 59, 0.7)" : "rgba(255, 255, 255, 0.7)",
      },
    },
    typography: {
      fontFamily: '"Outfit", "Inter", sans-serif',
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: "100vh",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box sx={{ flexGrow: 1, pt: 10, pb: 4 }}> {/* Padding for top navbar */}
            <AnimatedRoutes />
          </Box>
          <Footer />
          <Navbar />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
