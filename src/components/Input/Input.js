import React from "react";
import "./input.css";
const Input = ({ message, sendMessage, setMessage }) => {
	return (
		<form className="form">
			<input
				placeholder="Type a message"
				type="text"
				className="input"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={(event) =>
					event.key === "Enter" ? sendMessage(event) : null
				}
			/>
			<button className="sendButton" onClick={(event) => sendMessage(event)}>
				Send
			</button>
		</form>
	);
};

export default Input;
