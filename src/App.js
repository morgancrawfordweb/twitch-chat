import {useState} from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBody from "./components/ChatBody"
import SendMessage from "./components/SendMessage"

function App(){


  return (
    <div>
    <div className="container">
      <Header />
    </div>

    const sendMessage=(message)=>{
      console.log('Something')
    }

    {/* This is to see where all of the messages will go */}
    <div>
      <ChatBody/>
    </div>
    
    

    {/* This is where you send your message, it will act like twitch and go up from the top */}
    <div className="container">
    <Footer />
  </div>
  </div>
  )
  
}

export default App
