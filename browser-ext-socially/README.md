# Browser extension: Socially
Sample Azure Open AI projec tto create a client-side browser extension that will create a sample social media post for the given URL.

## Technologies
- HTML
- CSS
- JavaScript (React)
- Azure Open AI

## Getting Started
1. Clone and open this project in your favorite code editor (VS Code, duh)
2. Create an Azure Open AI deployment and enter deployment API credentials in `src/App.js`
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the development server

_Now, that you have the project running locally, let's get it added to your browser._
1. Open your browser and navigate to `chrome://extensions/`
2. Enable Developer mode
3. Click on `Load unpacked` and select the `dist` folder from the project directory
4. You should now see the extension added to your browser, go to a web site and click on the extension icon to generate a sample social media post.

## Debugging
- You can view errors from your extension by clicking the "Errors" link on the `chrome://extensions/` page.
- You can also view the console logs from the extension by clicking on the extension icon and then clicking on the "Inspect popup" link.

## Extend your learning
This is a sample project for you to run locally only to learn and tinker with. Some ideas to extend your learning:

#### 🔒 Improve security
How this sample connects to Azure OpenAI is not the recommended way to connect to an API. You should never expose your API credentials in the client-side code. How can else can you solve this problem?

_Some ideas to explore:_
- **Creating a server-side API** would give you a layer between the client and the Azure OpenAI API to securely store and manage your API credentials. With that in place, what more can you do? More security, more features?
* **Azure identity** can be used to authenticate and authorize users for your app. How can you use Azure identity to secure your app while keeping in client side?


## Resources
- [Azure OpenAI Studio](https://oai.azure.com/portal)
- [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
