import { useState, useEffect } from 'react'

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //  5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      });

      setMethod(method)
    }
  }

  useEffect(() => {
    async function fetchData() {
      // 6 - loading
      setLoading(true)

      const res = await fetch(url)
      const data = await res.json()
      setData(data)

      setLoading(false)
    }

    fetchData()
  }, [url, callFetch])

  //  5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === 'POST') {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json)
      }
    }

    httpRequest()
  }, [config, method, url])


  return { data, httpConfig, loading };
};