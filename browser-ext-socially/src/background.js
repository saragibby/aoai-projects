/**
 * Background script for the extension.
 * 
 * This is executed within the extension context and can be used to listen for messages
 */
console.log("Background script loaded");

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === "PAGE_CONTENT") {
    console.log("Received page content:", message.content);
    console.log("Received page URL:", message.url);
    chrome.storage.local.set({ pageContent: message.content, pageUrl: message.url }, () => {
      console.log("Page content and URL stored");
    });
  }
});