import axios from "axios"

axios.get("http://localhost:1337/api/headers").then((response) => {
  console.log(response.data)
})
