import Message from './Message'


const ChatBody = ()=>{


    
    return(
        <>
            {messages.map((message)=>(
                <Message key={message.id} message ={message}/>
            ))}
            <>
            {messages.length>0?(
                <Message message={messages}/>
            ):(
                'Be the first person to send a message!'
            )}
            </> 
        </>
    )
}


export default ChatBody