import { GET_USERS } from "./types";
import axios from "axios";

export const getUsers = () => dispatch => {
	axios
		.get("/getLevels")
		.then(response => {
			dispatch({
				type: GET_USERS,
				payload: response.data
			});
		})
		.catch(err => {
			console.log(err);
		});
};
