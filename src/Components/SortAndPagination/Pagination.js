import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Pagination.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ setPageCount, setItemsPerPage }) => {
	const [pageCountInput, setPageCountInput] = useState(1);

	const handlePageCount = (action) => {
		if (pageCountInput >= 1) {
			setPageCountInput((currChange) => currChange + action);
			setPageCount((currChange) => currChange + action);
		}
	};

	const handlePerPageEntry = (event) => {
		setItemsPerPage(event.target.value);
	};

	return (
		<div>
			<Button
				variant="secondary"
				disabled={pageCountInput <= 1}
				onClick={() => handlePageCount(-1)}
			>
				<FaArrowLeft />
			</Button>{" "}
			<span>Page {pageCountInput}</span>{" "}
			<Button variant="secondary" onClick={() => handlePageCount(1)}>
				<FaArrowRight />
			</Button>{" "}
			<input
				className="itemsPerPage"
				type="number"
				min="1"
				step="1"
				placeholder="Items per page"
				onChange={handlePerPageEntry}
			></input>
		</div>
	);
};

export default Pagination;
