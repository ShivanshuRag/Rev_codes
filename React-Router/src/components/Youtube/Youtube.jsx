import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Youtube() {
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { channelId } = useParams(); // e.g., @chaiaurcode
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY; // Replace with your API key or use env variable

  useEffect(() => {
    const fetchChannelId = async () => {
      try {
        setLoading(true);
        setError(null);
        // Step 1: Resolve handle to channelId
        const handleResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${channelId}&key=${apiKey}`
        );
        if (!handleResponse.ok) {
          throw new Error(`Handle resolution failed: ${handleResponse.status}`);
        }
        const handleData = await handleResponse.json();
        if (!handleData.items || handleData.items.length === 0) {
          throw new Error("No channel found for handle");
        }
        const resolvedChannelId = handleData.items[0].id;

        // Step 2: Fetch channel details
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${resolvedChannelId}&key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        if (!data.items || data.items.length === 0) {
          throw new Error("No channel found");
        }
        setChannel(data.items[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChannelId();
  }, [channelId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-2xl"
      style={{ backgroundColor: "#132b33", color: "white" }}
    >
      <img
        className="rounded-full w-50 h-50 mb-4"
        src={channel?.snippet?.thumbnails?.default?.url || ""}
        alt={channel?.snippet?.title || "Channel avatar"}
      />
      <div className="text-2xl font-bold text-gray-200 mb-2">
        {channel?.snippet?.title || "Unknown Channel"}
      </div>
      <div className="text-gray-200 mb-4">
        Subscribers: {channel?.statistics?.subscriberCount || "N/A"}
      </div>
      <div className="text-gray-200 mb-4">
        Views: {channel?.statistics?.viewCount || "N/A"}
      </div>
      <div className="text-gray-200 mb-4">
        Videos: {channel?.statistics?.videoCount || "N/A"}
      </div>
    </div>
  );
}

export default Youtube;
