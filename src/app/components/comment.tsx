"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  // State for comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${postId}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [postId]);

  // Save comments to localStorage whenever the comments change
  useEffect(() => {
    localStorage.setItem(`comments-${postId}`, JSON.stringify(comments));
  }, [comments, postId]);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditComment = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8 mb-8">
      <h2 className="text-2xl font-semibold">Comments</h2>

      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold">{comment.author}</h3>
                <p>{comment.text}</p>
                <Button onClick={() => handleEditComment(comment.id)} className="mt-2">
                  Edit
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2 border"
        />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2 border"
        />
        <Button
          onClick={editingCommentId ? handleSaveEditComment : handleAddComment}
          className="mt-4"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
