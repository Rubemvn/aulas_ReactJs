import { useState, useEffect } from 'react'

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setData(data)
    }

    fetchData()
  }, [url])

  return { data };
};