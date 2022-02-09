import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserProfile = () => {
	const { loggedInUser } = useContext(UserContext);

	return (
		<div>
			<h4>{loggedInUser.username}</h4>
		</div>
	);
};

export default UserProfile;
