import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<Carousel variant="dark" className="carousel">
				<Carousel.Item className="carousel-item">
					<img
						className="d-block w-100"
						src={require("../images/jason-leung-ODGOCybp4Ik-unsplash.jpg")}
						alt="First slide"
					/>

					<Carousel.Caption>
						<h1 className="header-title">Game Board</h1>
						<h2>Rate, Review, Discuss</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={require("../images/lino-lakes-DGibxM1SLLk-unsplash.jpg")}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h1 className="header-title">Game Board</h1>
						<h2>Rate, Review, Discuss</h2>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={require("../images/pedro-santos-qGhaO9La0F4-unsplash.jpg")}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h1 className="header-title">Game Board</h1>
						<h2>Rate, Review, Discuss</h2>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Header;
