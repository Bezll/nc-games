import axios from "axios";

const reviewsApi = axios.create({
	baseURL: "https://nc-game-reviews-project.herokuapp.com/api",
});

export const getReviews = () => {
	return reviewsApi.get("/reviews").then(({ data }) => {
		return data.reviews;
	});
};
