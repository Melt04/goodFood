/** @format */

import { useState, useEffect } from 'react'
export const usePostFirebase = (query) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [doc, setDoc] = useState(null)
  useEffect(() => {
    if (query === null) return
    setLoading(true)
    query
      .then((snapshot) => {
        setLoading(false)
        setDoc(snapshot.id)
      })
      .catch((e) => {
        setError(true)
      })
  }, [query])

  return { loading, setLoading, doc, error }
}
