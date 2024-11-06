import React from 'react'
import { AzureOpenAI } from 'openai'
import { useState, useEffect } from 'react'

function App() {
  const [responses, setResponses] = useState(null)
  const [pageContent, setPageContent] = useState(null)
  const [pageUrl, setPageUrl] = useState(null)

  /**
   * Initialize the Azure OpenAI client
   * 
   * This is a client-side only application, so we can safely use the Azure OpenAI API
   * client side. This is not recommended for production applications, as it exposes
   * your API key to the client.
   * 
   * WARNING: This is a dangerous practice and should not be used in production applications.
   * This is only for educational purposes to run locally. Do no expose your API key in production
   * or by committing it to a public repository.
   */
  const client = new AzureOpenAI({
    // Your Azure OpenAI API credentials
    apiVersion: '', //TODO: Add your Azure OpenAI API version here
    endpoint: '', // TODO: Add your Azure OpenAI endpoint here
    apiKey: '', // TODO: Add your Azure OpenAI API key here
    deployment: '', // TODO: Add your Azure OpenAI deployment here

    // Needed to connect to the Azure OpenAI API client side
    dangerouslyAllowBrowser: true,
  })

  /**
   * Generate a completion using the Azure OpenAI API
   */
  async function generateCompletion() {
    try {
      const response = await client.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `Write a short social media post linking to this url ${pageUrl} around this content: ${pageContent}`,
          },
        ],
      })
      setResponses(response.choices[0].message.content)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  /**
   * Load the page content and URL from the Chrome storage when the component mounts
   */
  useEffect(() => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.get(['pageContent', 'pageUrl'], (result) => {
        if (result.pageContent && result.pageUrl) {
          setPageContent(result.pageContent)
          setPageUrl(result.pageUrl)
          generateCompletion(result.pageContent, result.pageUrl)
        } else {
          console.log('No page content or URL found')
        }
      })
    } else {
      console.error('chrome.storage is not available')
    }
  }, [])

  return (
    <div id="main">
      <h2>Socially</h2>
      <h3>AOAI social post generator</h3>
      <p><i>Generated social post for this page:</i></p>
      {responses && <p>{responses}</p>}
    </div>
  )
}

export default App
