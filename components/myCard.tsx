import React from "react";

interface MyCardProps {
  title: string;
  content: string;
}

const myCard: React.FC<MyCardProps> = ({ title, content }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-extrabold text-white mb-2">{title}</h2>
      <p className="text-white text-opacity-90">{content}</p>
    </div>
  );
};

export default myCard;
