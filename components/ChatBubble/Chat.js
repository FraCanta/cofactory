import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChatBubble = ({ message, sender, color, index }) => {
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
};

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: "Ciao [Brand B]! Sono [Brand A], felice di connetterci!",
      sender: "person1",
    },
    {
      message:
        "Ciao [Brand A]! Anch'io sono contento di incontrarti! Ho sentito parlare molto bene di te e delle tue iniziative. Come posso aiutarti?",
      sender: "person2",
    },
    {
      message:
        "Grazie mille! Sì, quindi, abbiamo pensato di avviare una collaborazione tra i nostri brand. Credo che insieme potremmo fare grandi cose, ma ammetto che non sono del tutto sicuro su come procedere.",
      sender: "person1",
    },
    {
      message:
        "Assolutamente, capisco perfettamente! Sono anch'io molto interessato a una collaborazione tra i nostri brand.",
      sender: "person2",
    },
    { message: "Hi bitches!", sender: "person3" },
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setCurrentMessageIndex((prevIndex) =>
          prevIndex < messages.length - 1 ? prevIndex + 1 : prevIndex
        );
      }, 2000); // Delay between displaying messages in milliseconds
      return () => clearTimeout(timeout);
    }
  }, [inView, currentMessageIndex, messages]);

  const personColors = {
    person1: "pink",
    person2: "second",
    person3: "white",
    // Aggiungi altri colori per altre persone se necessario
  };

  return (
    <div
      ref={ref}
      className="discussion w-full mx-auto flex flex-col gap-6  max-w-full p-8 min-h-[60vh] snap-center "
    >
      {inView &&
        messages
          .slice(0, currentMessageIndex + 1)
          .map((msg, index) => (
            <ChatBubble
              key={index}
              message={msg.message}
              sender={msg.sender}
              color={personColors[msg.sender]}
              index={index}
            />
          ))}
    </div>
  );
};

export default Chat;
