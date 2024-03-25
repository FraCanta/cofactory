import React from "react";
import { motion } from "framer-motion";

function ChatBubble({ message, sender, color, index }) {
  const isEven = index % 2 === 0;
  const bubbleStyles = `border-${color} border text-${color} font-semibold ${
    isEven
      ? "self-start rounded-b-lg rounded-tr-lg "
      : "self-end rounded-b-lg rounded-tl-lg"
  } md:text-xl text-[1rem]`;

  return (
    <motion.div
      className={`bubble p-3 max-w-[80%] ${bubbleStyles}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <p className="m-0">{message}</p>
    </motion.div>
  );
}

export default ChatBubble;
