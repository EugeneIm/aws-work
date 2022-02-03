import { useState, useEffect } from "react";
import axios from "axios";
import './index.css';

function App() {

  const [file, setFile] = useState()
  const [images, setImages] = useState([]);


  useEffect(() => {
    async function getImages() {
      const result = await axios.get("https://ctzxthsbvk.execute-api.us-west-1.amazonaws.com/dev/images");
      const images = result.data.images;
      setImages(images);
    }
    getImages();
  }, []);



//POOL ID: us-west-1_Z0GSiBSv6
//APP CLIENT ID: 7kdc7spa63ukqae62091qfi9ve



const submit = async event => {
  event.preventDefault()
  // get secure url from our server
  const result = await axios.get("https://ctzxthsbvk.execute-api.us-west-1.amazonaws.com/dev/signedurl")
  const url = result.data.url
  console.log(url)



  // post the image direclty to the s3 bucket
  await axios.put(url, file, { headers: { "Content-Type": file.type } })

  // get the image url and add it to the images array
  const imageUrl = url.split("?")[0]
  setImages([...images, imageUrl])
}

  return (

    <div className="App">
      <form onSubmit={submit}>
        <input onChange={e => setFile(e.target.files[0])}  type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>
      {images.map((image) => (
        <img alt="" key={image} src={image}></img>
      ))}
    </div>
  );
}

export default App;