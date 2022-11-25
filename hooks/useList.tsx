import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { Movie } from '../typings'
import { db } from '../firebase'

function useList(id: string | undefined) {
    const [list, setList] = useState<Movie[] | DocumentData[]>()
   
    useEffect(() => {
      if (!id) {
        return
      }
      return onSnapshot(collection(db, "customer", id, "myList"),
      (snapshot) => {
          setList(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
      })
    }, [db, id])
    return list;
    
  return (
    <div>useList</div>
  )
}

export default useList