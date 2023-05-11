import axios from "axios"

// axios.get("http://localhost:1337/api/headers").then((response) => {
//   console.log(response.data)
// })

const Home = ({ headers, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>
  }
  return (
    <div className="container ">
      <div className="flex justify-center text-red-700">
        {headers.data.map((header) => (
          <h1 className="text-red-700" key={header.id}>
            {header.attributes.title}
          </h1>
        ))}
      </div>
      <div className="flex justify-center text-red-700 m-[-10px]">
        {headers.data.map((header) => (
          <h2 className="text-red-700 m-[-50px]" key={header.id}>
            {header.attributes.description}
          </h2>
        ))}
      </div>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/api/headers")
    const headers = res.data
    return { headers }
  } catch (error) {
    return { error }
  }
}

export default Home
