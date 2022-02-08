import dayjs from "dayjs";

export const formatDate = (date) => {
	if (date) {
		return dayjs(date).$d.toString().substring(4, 15);
	}
};
