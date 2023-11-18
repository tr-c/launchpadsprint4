//library to help make HTTP Requests 
import axios from "axios"
import {useState, useEffect} from 'react'


const App = () => {
	//"Endpoint" URL where the data is located
	const URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/895906"
  // rand id: 895906

	// Set up the state to store the fetched data
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			console.log("Making GET Request");
			try {
				// GET Request
				const response = await axios.get(URL)
						 .then((response) => {
						//console.log(response)
            setData(response.data)
				})
			} catch (error) {
				// Handle any errors
        console.error('Failed to fetch data: ', error);
			}
		}

		fetchData()
    const year = data["accessionYear"]
    const art_title = data["title"]
    const artist_name = data["artistDisplayName"]
    console.log(art_title + " by " + artist_name + ", " + year)
	}, [data]); // remove data to stop infinite loop

}

export default App;