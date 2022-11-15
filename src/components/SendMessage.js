import { useState } from "react"
import Message from "./Message"

const SendMessage = ({message})=>{

    const [text, setText] = useState('')
    
    return(
        <form className='message'>
            <div className="form-control">
                <label>Message</label>
                <input type='text' placeholder="Send Message"
                value = {text} onChange={(e)=>
                setText(e.target.value)}/>
            </div>
            <input type='submit' value='Send Message'
            className="btn btn-block"/>
        </form>
    )
}


export default SendMessage