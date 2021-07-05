import React, { useEffect, useState } from "react";
import ShortenApi, { ShortenResponse } from "./../../apis/ShortenApi";
import { isMobile } from "react-device-detect";
import Button from "./../button/Button";
import ShortenResultItem from "./../shorten/ShortenResultItem";
import { validateUrl } from "./../../utilities/Url";

export interface ShortenItem {
  original_link: string;
  full_short_link: string;
}

const Shorten = () => {
  const [results, setResults] = useState<ShortenItem[] | []>([]);
  const [working, setWorking] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const shortenApi = new ShortenApi();

  const urlSubmitted = async () => {
    setError(null);

    if (!inputValue) {
      setError("Please add a link");
      return;
    }

    if (!validateUrl(inputValue)) {
      setError("Please enter a valid url");
      return;
    }

    if (results.find((i) => i.original_link === inputValue)) {
      setError("You've already shortened this url");
      return;
    }

    setWorking(true);

    shortenApi
      .shorten(inputValue)
      .then(
        ({ result: { full_short_link, original_link } }: ShortenResponse) => {
          const newResults = [...results, { original_link, full_short_link }];

          setResults(newResults);
          localStorage.setItem("shortenedUrls", JSON.stringify(newResults));
          setInputValue("");
        }
      )
      .catch((Error) => {
        // TODO notify admin
        // console.log("e", Error?.response?.data?.error);
        setError(
          "Oops! Something went wrong while processing your url. Please try again later."
        );
      })
      .finally(() => {
        setWorking(false);
      });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setError(null);
  };

  useEffect(() => {
    var storedShortenedUrls = JSON.parse(
      localStorage.getItem("shortenedUrls") || "[]"
    );

    setResults(storedShortenedUrls);
  }, []);

  return (
    <div className="c-shorten h-bg-light">
      <div className="container position-relative">
        <div
          data-aos-offset={isMobile ? -50 : 120}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-once="true"
          id="shorten-form"
          className="
          c-shorten-form 
          h-bg-secondary
          d-flex flex-column flex-md-row align-items-center 
          h-pt-4 h-pt-md-0 h-pb-4 h-pb-md-0
        h-pl-5 h-pr-5 h-pl-lg-12 h-pr-lg-12 
        h-mb-6
        "
        >
          <div className="w-100 position-relative h-mr-0 h-mr-md-4">
            <input
              disabled={working}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              type="text"
              className={`c-shorten-input h-mb-4 h-mb-md-0 h-pl-4
               ${!!error ? "-error" : ""}`}
              placeholder="Shorten a link here..."
            />
            <div
              className={`c-shorten-error h-color-error ${
                !!error ? "-show" : ""
              } `}
            >
              <i>{error}</i>
            </div>
          </div>

          <Button
            loading={working}
            onClick={urlSubmitted}
            size="sq"
            text="Shorten It!"
          />
        </div>

        <div className="c-shorten-results">
          {results.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor="#shorten-form"
              data-aos-delay={index * 200}
              data-aos-duration="2000"
              data-aos-once="true"
              key={index}
            >
              <ShortenResultItem item={item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shorten;
