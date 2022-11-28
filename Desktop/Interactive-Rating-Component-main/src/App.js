import React, { useState } from "react";
import "./App.css";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [thankYou, setThankYou] = useState(false);
  const [rating, setRating] = useState();
  return (
    <div className="App">
      {!thankYou ? (
        <Rating
          thankYou={thankYou}
          setThankYou={setThankYou}
          rating={rating}
          setRating={setRating}
        />
      ) : (
        <ThankYou rating={rating} />
      )}
    </div>
  );
}

export default App;
