import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<Carousel className="carousel">
				<Carousel.Item className="carousel-item">
					<img
						className="d-block w-100"
						src={require("../images/janita-sumeiko-ZK1WQDMQvik-unsplash.jpg")}
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
						src={require("../images/majid-gheidarlou-dViaab0Qc8o-unsplash.jpg")}
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
						src={require("../images/pawel-czerwinski-dgJT71cXlC4-unsplash.jpg")}
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
