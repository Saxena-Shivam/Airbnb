import { useEffect, useState } from "react";

const MessagesPage = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [hasNewMessages, setHasNewMessages] = useState(false);

  useEffect(() => {
    // Retrieve messages from localStorage
    const storedMessages = JSON.parse(localStorage.getItem("messages") || "[]");
    setMessages(storedMessages);

    // Check if there are new messages
    const newMessageFlag = localStorage.getItem("hasNewMessages") === "true";
    setHasNewMessages(newMessageFlag);

    // Reset the new message flag
    localStorage.setItem("hasNewMessages", "false");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Messages</h1>
            <p className="mt-2 text-gray-600">
              {messages.length} {messages.length === 1 ? "message" : "messages"}
            </p>
          </div>
          {hasNewMessages && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 animate-pulse">
              New messages!
            </span>
          )}
        </div>

        {messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-blue-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 mb-1">
                      Message {index + 1}
                    </p>
                    <p className="text-gray-800">{message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No messages yet
            </h3>
            <p className="mt-1 text-gray-500">
              Your messages will appear here when you receive them.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
