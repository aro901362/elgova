import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // Simulate bot response (replace with actual AI logic later)
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "I'm Elgova AI. How can I help you today?", sender: "bot" }]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Chat with Elgova</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <div className="h-96 overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow mr-2"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
      <div className="text-sm text-gray-600">
        <p>
          Disclaimer: Elgova AI offers spiritual guidance, not professional therapy. For therapeutic support, please
          consult a licensed mental health professional.
        </p>
      </div>
    </div>
  );
}
