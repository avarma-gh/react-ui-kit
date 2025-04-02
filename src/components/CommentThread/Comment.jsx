import React, { useState, useContext } from 'react'
import { CommentContext } from './CommentContext'

const Comment = ({ comment }) => {
  const { addComment } = useContext(CommentContext)
  const [replyText, setReplyText] = useState('')
  const [showReplyBox, setShowReplyBox] = useState(false)

  const handleReply = () => {
    if (replyText.trim()) {
      addComment(replyText, comment.id)
      setReplyText('')
      setShowReplyBox(false)
    }
  }

  return (
    <div className="p-3 border-l border-gray-400 ml-4">
      <p className="font-semibold">{comment.text}</p>
      <button
        className="text-blue-500 text-sm mt-1"
        onClick={() => setShowReplyBox(!showReplyBox)}
      >
        Reply
      </button>

      {showReplyBox && (
        <div className="mt-2">
          <input
            type="text"
            className="border p-1 text-sm w-full"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white text-xs px-2 py-1 mt-1"
            onClick={handleReply}
          >
            Add Reply
          </button>
        </div>
      )}

      {/* Recursively Render Replies */}
      {comment.replies.length > 0 && (
        <div className="mt-2">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment
