import React, { createContext, useState } from 'react'

export const CommentContext = createContext()

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])

  // Function to add a new comment or reply
  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      text,
      parentId,
      replies: [],
    }

    setComments((prevComments) => {
      if (parentId === null) {
        return [...prevComments, newComment] // Top-level comment
      } else {
        return prevComments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...comment.replies, newComment],
            }
          }
          return comment
        })
      }
    })
  }

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentContext.Provider>
  )
}

export default CommentProvider
