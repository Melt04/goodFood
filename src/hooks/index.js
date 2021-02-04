/** @format */

import { useState, useEffect } from 'react'
export const useFetchFirebase = (query) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [doc, setDoc] = useState([])
  useEffect(() => {
    if (query === null) return
    query
      .then((snapshot) => {
        setLoading(false)
        if (snapshot.size === 0) {
          setError(true)
        }
        const arreglo = snapshot.docs.map((d) => {
          return d.data()
        })
        setDoc(arreglo)
      })
      .catch((e) => {
        setError(true)
        console.log(e)
      })
      .finally(() => {})
    return () => {
      setDoc([])
    }
  }, [query])

  return { loading, setLoading, doc, error }
}
