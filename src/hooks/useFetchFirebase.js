/** @format */

import { useState, useEffect } from 'react'
export const useFetchFirebase = (query) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [doc, setDoc] = useState([])
  useEffect(() => {
    console.log('FLAG', loading)
    if (query === null) return
    query
      .then((snapshot) => {
        setLoading(false)
        if (snapshot.size === 0) {
          setError(true)
        }
        if (snapshot.size === undefined) {
          setDoc(snapshot.id)
          return
        }
        const arreglo = snapshot.docs.map((d) => {
          return d.data()
        })
        setDoc(arreglo)
      })
      .catch((e) => {
        setError(true)
      })
      .finally(() => {})
    return () => {
      setDoc([])
    }
  }, [query])

  return { loading, setLoading, doc, error }
}
