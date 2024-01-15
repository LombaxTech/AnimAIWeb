import { animeAiImages } from "@/data";
import React, { useState } from "react";

export default function Examples() {
  const [selectedImage, setSelectedImage] = useState();

  return (
    <div className="p-12 grid grid-cols-4">
      {animeAiImages.map((image) => {
        return (
          <div>
            <img
              src={image.imageUrl}
              className={`object-cover w-full h-full rounded-lg shadow-lg cursor-pointer ${
                selectedImage === image ? "border-[10px] border-pink-500" : ""
              }`}
              onClick={() => {
                if (selectedImage === image) return setSelectedImage(null);
                setSelectedImage(image);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
