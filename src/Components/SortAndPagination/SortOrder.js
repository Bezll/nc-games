import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./SortOrder.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const SortOrder = () => {
	const [order, setOrder] = useState("DESC");
	const [isChecked1, setIsChecked1] = useState(false);
	const [isChecked2, setIsChecked2] = useState(true);
	const [pageCount, setPageCount] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(13);

	const handleOrder = (event) => {
		setOrder(event.target.value);
	};

	useEffect(() => {
		if (order === "ASC") {
			setIsChecked1(true);
			setIsChecked2(false);
		} else if (order === "DESC") {
			setIsChecked2(true);
			setIsChecked1(false);
		}
	}, [order]);

	return (
		<div className="sort_by">
			<Dropdown className="dropdown">
				<Dropdown.Toggle variant="secondary" id="dropdown-basic">
					Sort By
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						<Link
							to={`/reviews?sort_by=created_at&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
						>
							Date Posted
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link
							to={`/reviews?sort_by=review_id&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
						>
							Review Id
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link
							to={`/reviews?sort_by=title&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
						>
							Title
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link
							to={`/reviews?sort_by=designer&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
						>
							Designer
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link
							to={`/reviews?sort_by=owner&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
						>
							Author
						</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link
							to={`/reviews?sort_by=votes&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
						>
							Votes
						</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>{" "}
			<div className="order">
				<span>Ascending</span>{" "}
				<input
					type="checkbox"
					checked={isChecked1}
					onChange={handleOrder}
					value="ASC"
				></input>{" "}
				<span>Descending</span>{" "}
				<input
					type="checkbox"
					checked={isChecked2}
					onChange={handleOrder}
					value="DESC"
				></input>{" "}
			</div>
			<Pagination
				setPageCount={setPageCount}
				setItemsPerPage={setItemsPerPage}
			/>
		</div>
	);
};

export default SortOrder;
