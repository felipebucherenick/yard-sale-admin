import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, alert) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert]);

  return data;
};

export default useFetch;
