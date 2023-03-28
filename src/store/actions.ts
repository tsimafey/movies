import axios from "axios";
import axiosClient from "../axiosClient";

export async function searchMovies({ commit }, keyword) {
  const response = await axiosClient.get(`?s=${keyword}`);
  commit('setMovies', response.data.Search)
}