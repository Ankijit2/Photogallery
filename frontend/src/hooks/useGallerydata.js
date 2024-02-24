import { useState,useEffect } from "react";
import axios from "axios";

const useGallerydata = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios({
        method: "GET",
        url: "http://localhost:3000/api/data",

      })
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error);
        setLoading(false)
      })
    },[])
    return [data,loading,error]
}

export default useGallerydata