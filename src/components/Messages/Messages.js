import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "../Message/Message";
import "./messages.css";
const Messages = ({ messages, name }) => {
	return (
		<ScrollToBottom className="messages">
			{messages.map((message, i) => {
				return <Message name={name} message={message} key={i} />;
			})}
		</ScrollToBottom>
	);
};

export default Messages;
