import React from 'react';

interface CommentInputProps {
  label?: string; // Optional: Default label text
  placeholder?: string; // Optional: Default placeholder text
  buttonText?: string; // Optional: Default button text
  onSubmit?: (comment: string) => void; // Callback function for submit
}

export default function CommentInput({
  label = "Add Your Comment",
  placeholder = "Write your comment here...",
  buttonText = "Submit",
  onSubmit,
}: CommentInputProps) {
  const [comment, setComment] = React.useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(comment);
    }
    setComment(""); // Clear the input after submit
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <label htmlFor="comment" className="mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id="comment"
        name="comment"
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-3 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-3 px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {buttonText}
      </button>
    </div>
  );
}
