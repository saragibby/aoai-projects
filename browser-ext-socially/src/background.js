/**
 * Background script for the extension.
 * 
 * This is executed within the extension context and can be used to listen for messages
 */
console.log("Background script loaded");

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === "PAGE_CONTENT") {
    chrome.storage.local.set({ pageContent: message.content, pageUrl: message.url }, () => {
      if (chrome.runtime.lastError) {
        console.error("Error storing page content and URL:", chrome.runtime.lastError);
      } else {
        console.log("Page content and URL stored successfully");
      }
    });
  }
});