/**
 * Content script that runs on every page load.
 * 
 * This is executed within the context of the page and can be used to extract content.
 */

console.log("Content script loaded");

// Extract page content
const pageContent = document.body.innerText;

// Capture the current URL
const currentUrl = window.location.href;

// Send content and URL to the background script
chrome.runtime.sendMessage({ type: "PAGE_CONTENT", content: pageContent, url: currentUrl });
