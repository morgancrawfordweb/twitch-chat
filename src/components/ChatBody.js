import Message from './Message'


const ChatBody = ()=>{


    
    return(
        <>
            {messages.map((message)=>(
                <Message key={message.id} message ={message}/>
            ))}
        </>
    )
}


export default ChatBody