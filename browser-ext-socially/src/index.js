/**
 * Entry point of extension application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);