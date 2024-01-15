import { animeAiImages } from "@/data";
import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

export default function Examples() {
  const [selectedImage, setSelectedImage] = useState();
  let [isOpen, setIsOpen] = useState(true);

  const [bottomBarShowing, setBottomBarShowing] = useState(false);

  return (
    <>
      {bottomBarShowing && (
        <>
          <div
            className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50"
            onClick={() => setBottomBarShowing(false)}
          ></div>
          <div className="fixed bottom-0 z-[100] w-full">
            <div className="bg-gray-800 h-[150px] relative">
              <div className="absolute right-0 top-0">
                <h1
                  className="m-2 mx-8 text-2xl cursor-pointer"
                  onClick={() => setBottomBarShowing(false)}
                >
                  Close
                </h1>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="fixed bottom-0 w-full flex justify-center">
        <button
          className={`p-4 m-4 text-3xl font-bold rounded-full ${
            selectedImage ? "bg-pink-500" : "bg-gray-400"
          }`}
          onClick={() => setBottomBarShowing(true)}
        >
          {selectedImage ? "Generate Image" : "Click on an example"}
        </button>
      </div>
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
    </>
  );
}
