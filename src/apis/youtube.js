import axios from "axios"

const KEY = "AIzaSyBJCyB0KaR4iRsBWzN9JExLRC7c1vRTzZw"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
})
