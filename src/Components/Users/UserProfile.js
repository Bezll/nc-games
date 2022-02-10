import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
	const { loggedInUser } = useContext(UserContext);

	return (
		<div>
			<Link className="username" to={`/users`}>
				{loggedInUser.username}
			</Link>
		</div>
	);
};

export default UserProfile;
