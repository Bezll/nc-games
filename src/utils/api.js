import axios from "axios";

const reviewsApi = axios.create({
	baseURL: "https://nc-game-reviews-project.herokuapp.com/api",
});

export const getReviews = () => {
	return reviewsApi.get("/reviews").then(({ data }) => {
		return data.reviews;
	});
};

export const getCategories = () => {
	return reviewsApi.get("/categories").then(({ data }) => {
		return data.categories;
	});
};

export const getReviewsByCategory = (category) => {
	return reviewsApi.get(`/reviews?category=${category}`).then(({ data }) => {
		return data;
	});
};

export const getReviewsById = (review_id) => {
	return reviewsApi.get(`/reviews/${review_id}`).then(({ data }) => {
		return data.review;
	});
};
