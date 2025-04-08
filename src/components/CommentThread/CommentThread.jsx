import React, { useContext, useState } from 'react'
import { CommentContext } from './CommentContext'
import Comment from './Comment'

const CommentThread = () => {
  const { comments, addComment } = useContext(CommentContext)
  const [commentText, setCommentText] = useState('')

  const handleAddComment = () => {
    if (commentText.trim()) {
      addComment(commentText)
      setCommentText('')
    }
  }

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h2 className="text-lg font-bold">Comments THread</h2>
      <h5 className="text-lg font-bold">Comments will be seen here</h5>

      <div className="mt-3">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Write a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-3 py-1 mt-2"
          onClick={handleAddComment}
        >
          Post
        </button>
      </div>

      {/* Display comments */}
      <div className="mt-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default CommentThread
