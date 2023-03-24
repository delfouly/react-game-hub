import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a0c1584b8e564de5a056e8094bb6fb64",
  },
});
