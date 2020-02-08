import React from "react";

interface CardDetails {
  id: number
  title: string
  subtitle?: string
  require?: string
  headers?: string[]
  contents: string[]
}

const MainCard: React.FC<CardDetails> = (props) => {
  return (
    <article>
      <header>{props.title}</header>
      {props.contents.map((text, index) =>
        <span key={index}>{text}<br/></span>
      )}
    </article>
  );
};


export default MainCard;
