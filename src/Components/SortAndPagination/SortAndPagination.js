import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const SortAndPagination = () => {
	const [sortBy, setSortBy] = useState();

	const handleSelection = (requestedSort) => {
		setSortBy(requestedSort);
	};
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="dropdown-basic">
					Sort By
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						<Link to={`/reviews?sort_by=created_at`}>
							Date Posted
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to={`/reviews?sort_by=review_id`}>Review Id</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to={`/reviews?sort_by=title`}>Title</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to={`/reviews?sort_by=designer`}>Designer</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to={`/reviews?sort_by=owner`}>Author</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to={`/reviews?sort_by=votes`}>Votes</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default SortAndPagination;
