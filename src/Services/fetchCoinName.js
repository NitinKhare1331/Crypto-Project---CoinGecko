import axiosInstance from "../Helpers/axiosInstance";

export async function fetchCoinName(name) {
    try {
        const response = await axiosInstance.get(`/search?query=${name}`);
        // console.log(response.data);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}
