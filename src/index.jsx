import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
  </StrictMode>
);