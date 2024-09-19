import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
// styling
import "../public/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
