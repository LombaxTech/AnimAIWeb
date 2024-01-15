import Examples from "@/components/Examples";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState } from "react";

const SD_API_KEY = process.env.NEXT_PUBLIC_SD_API_KEY;
const SD_API = process.env.NEXT_PUBLIC_SD_API;

export default function Home() {
  const [mode, setMode] = useState("examples");

  const [prompt, setPrompt] = useState("");

  const [generating, setGenerating] = useState(false);
  const [generatedImagesLinks, setGeneratedImagesLinks] = useState([]);
  const [generatedSuccessfully, setGeneratedSuccessfully] = useState(false);

  const showGeneratedSuccessfullyMessage = () => {
    setGeneratedSuccessfully(true);
    setTimeout(() => {
      setGeneratedSuccessfully(false);
    }, 5000);
  };

  const generateImage = async () => {
    setGenerating(true);

    console.log(prompt);

    const params = {
      width: "512",
      height: "768",

      // ...(aspectRatioIsPortrait && {
      //   width: "512",
      //   height: "768",
      // }),
      // ...(aspectRatioIsSquare && {
      //   width: "512",
      //   height: "512",
      // }),
      // ...(aspectRatioIsLandscape && {
      //   width: "768",
      //   height: "512",
      // }),
      // prompt: modifiedPrompt,
      prompt,
      negative_prompt: "",
      // negative_prompt: modifiedNegativePrompt,
      // model_id: selectedImage.modelId || "anything-v3",
      model_id: "anything-v3",
      guidance: 7.5,
      // samples: `${numberOfImages}`,
      samples: `4`,
      upscale: "no",
      safety_checker: "no",
      steps: 20,
      seed: null,
      webhook: null,
      track_id: null,
      // scheduler: "UniPCMultistepScheduler",
      key: SD_API_KEY,
    };

    let fetchRetryCount = 0;
    let retryCount = 0;
    let res;

    async function fetchGeneratedResult(fetchUrl) {
      console.log("fetching the generation...");
      res = await axios.post(fetchUrl, { key: SD_API_KEY });
      console.log("fetched the generation and status is: ");
      console.log(res.data.status);

      switch (res.data.status) {
        case "success":
          let generatedImagesLinks = res.data.output;
          setGeneratedImagesLinks(generatedImagesLinks);
          showGeneratedSuccessfullyMessage();
          setGenerating(false);

          break;

        case "processing":
          if (fetchRetryCount > 9) {
            return;
            // todo: give an error and cancel loop
          }

          console.log("processing again, trying again in 10 seconds");
          setTimeout(async () => {
            await fetchGeneratedResult(fetchUrl);
          }, 10 * 1000);

          fetchRetryCount++;

          break;

        case "error":
          console.log("some kind of error  happened");
          if (fetchRetryCount > 9) {
            setGenerating(false);

            return;
            // todo: give the error and break out
          }

          setTimeout(async () => {
            await fetchGeneratedResult(fetchUrl);
          }, 10 * 1000);

          fetchRetryCount++;

          break;

        default:
          setGenerating(false);

          // todo: handle the off case mess up
          break;
      }
    }

    async function makeApiReq() {
      // todo: make initial req
      console.log("making api request");
      res = await axios.post(SD_API, params);
      console.log("got response");
      console.log(res.data.status);

      switch (res.data.status) {
        // todo: if success, good and finish
        case "success":
          console.log("success!");
          let generatedImagesLinks = res.data.output;
          setGeneratedImagesLinks(generatedImagesLinks);
          showGeneratedSuccessfullyMessage();
          setGenerating(false);

          break;

        // todo: do the processing loop
        case "processing":
          console.log(
            "preocessing, starting loop in: " + (res.data.eta + 10) * 1000
          );
          setTimeout(async () => {
            await fetchGeneratedResult(res.data.fetch_result);
          }, (res.data.eta + 10) * 1000);
          break;

        default:
          console.log("went to default case which was: ");
          console.log(res.data.status);
          if (retryCount > 3) {
            setGenerating(false);
            return;
            // todo: handle error of too many failed tries
          }

          setTimeout(async () => {
            await makeApiReq();
          }, 3 * 1000);
          retryCount++;

          break;
      }
    }

    try {
      console.log("starting make apireq func");
      await makeApiReq();
      console.log("finished make apireq func");
      // let res = await axios.post(SD_API, params);
      // console.log("here is the res");
      // console.log(res);
    } catch (error) {
      console.log(error);
      setGenerating(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex gap-4 justify-center">
        <h1 className="cursor-pointer" onClick={() => setMode("custom")}>
          Custom
        </h1>
        <h1 className="cursor-pointer" onClick={() => setMode("examples")}>
          Examples
        </h1>
      </div>
      {mode === "examples" && <Examples />}
      {mode === "custom" && (
        <div className="p-4 flex flex-col gap-4">
          <div className="flex gap-4">
            <h1>Examples</h1>
            <h1>Custom</h1>
          </div>
          <input
            placeholder="Example: A witch with rainbow colored hair studying in a library"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text"
            className="text-black p-4 outline-none rounded-full"
          />

          <button onClick={generateImage}>Generate</button>
          {generating && (
            <h1 className="text-2xl">Generating...Please wait...</h1>
          )}
          {generatedSuccessfully && (
            <h1 className="font-bold text-2xl text-green-500">Images made!</h1>
          )}

          <GeneratedImages
            images={generatedImagesLinks}
            // images={[
            //   "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/0-4e2a4484-1ce4-4242-b0bb-6ed5f6264fbf.png",
            // ]}
          />
        </div>
      )}
    </div>
  );
}

const GeneratedImages = ({ images }) => {
  return (
    <div className="flex gap-4">
      {images &&
        images.map((image) => {
          return (
            <div>
              <img src={image} className="" />
            </div>
          );
        })}
    </div>
  );
};
