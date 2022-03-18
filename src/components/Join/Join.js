import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./join.css";
const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input
						className="joinInput"
						placeholder="Enter Name"
						onChange={(e) => setName(e.target.value)}
						type="text"
					/>
				</div>
				<div>
					<input
						className="joinInput mt-20"
						placeholder="Enter room"
						onChange={(e) => setRoom(e.target.value)}
						type="text"
					/>
				</div>
				<Link
					onClick={(event) => (!name || !room ? event.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className="button mt-20">Sign In</button>
				</Link>
			</div>
		</div>
	);
};
export default Join;
