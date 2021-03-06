import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./SortOrder.css";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import SearchById from "./SearchById";
import { getCategories } from "../../utils/api";

const SortOrder = () => {
	const [order, setOrder] = useState("DESC");
	const [isChecked1, setIsChecked1] = useState(false);
	const [isChecked2, setIsChecked2] = useState(true);
	const [pageCount, setPageCount] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(13);
	const [categories, setCategories] = useState([]);

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

	useEffect(() => {
		getCategories().then((categoriesFromApi) => {
			setCategories(categoriesFromApi);
		});
	}, []);

	return (
		<div>
			<SearchById />
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
				<div>
					<Dropdown className="dropdown">
						<Dropdown.Toggle
							variant="secondary"
							id="dropdown-basic"
						>
							Categories
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{categories.map((category) => {
								return (
									<Dropdown.Item key={category.slug}>
										<Link
											to={`/reviews?category=${category.slug}&&order=${order}&&page=${pageCount}&&items_per_page=${itemsPerPage}`}
										>
											{category.slug}
										</Link>
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>{" "}
				</div>
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
		</div>
	);
};

export default SortOrder;
