import React from "react";
import { motion } from "framer-motion";

function ChatBubble({ message, sender, color, index }) {
  const isEven = index % 2 === 0;
  const bubbleStyles = `bg-${color} text-third font-semibold ${
    isEven
      ? "self-start rounded-bl-lg rounded-tr-lg "
      : "self-end rounded-br-lg rounded-tl-lg"
  } md:text-xl text-[0.9rem]`;

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
