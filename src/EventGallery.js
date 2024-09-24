import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const EventGallery = ({ userDetails }) => {
  const [eventImages, setEventImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const UNSPLASH_ACCESS_KEY = "D5M0S76t2kMptiwEXpmsMlyvkoSiu8OhygjER3bJFsg"; // Replace with your actual Unsplash access key

  useEffect(() => {
    const fetchEventImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=travel&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        setEventImages(response.data.results); // Get the results from the response
      } catch (error) {
        setError("Error fetching event images");
      } finally {
        setLoading(false);
      }
    };

    fetchEventImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="event-gallery">
      <h2>Welcome, {userDetails.username}!</h2>
      <div className="image-gallery">
        {eventImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
