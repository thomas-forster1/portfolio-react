import React, { useState } from "react";
import { ShortenItem } from "./Shorten";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "./../button/Button";

interface ShortenResultItemProps {
  item: ShortenItem;
}

const ShortenResultItem = ({ item }: ShortenResultItemProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      className="
c-shorten-result-item 
d-flex justify-content-md-between align-items-start align-items-md-center 
flex-column flex-md-row
h-mb-3 
h-pr-0 h-pr-md-4 h-pl-0 h-pl-md-4 h-pt-0 h-pt-md-2 h-pb-0 h-pb-md-2
"
    >
      <div
        className="
    c-shorten-result-item-or 
    text-truncate
    w-100
    h-color-shade-3 
    h-pr-3
    h-pl-3 h-pl-md-0
    h-pb-2 h-pb-md-0
    h-pt-3 h-pt-md-0
    
    "
      >
        {item.original_link}
      </div>

      <div
        className="
  c-shorten-result-item-sh 
  d-flex flex-column flex-md-row
  align-items-start align-items-md-center justify-content-between justify-content-md-start
  h-pb-3 h-pb-md-0
    h-pt-2 h-pt-md-0
    h-pl-3 h-pl-md-0
    h-pr-3 h-pr-md-0
  "
      >
        <a
          rel="noopener noreferrer"
          href={item.full_short_link}
          target="_blank"
          className="
          c-shorten-result-item-r 
          h-mr-0 h-mr-md-4 

          h-pb-2 h-pb-md-0
    
          
          h-color-primary text-truncate"
        >
          {item.full_short_link}
        </a>

        <CopyToClipboard text={item.full_short_link} onCopy={onCopy}>
          <Button
            onClick={() => {}}
            size="sq-sm"
            className={`${copied ? "h-bg-secondary" : ""}`}
            text={copied ? "Copied!" : "Copy"}
          />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShortenResultItem;
