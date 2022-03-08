import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [output, setOutput] = useState();

  function onClickHandler() {
    const documentaryOutput = (
      <body>
        <h2> Netflix Documentaries </h2>
        <ol>
          <li>
            {" "}
            <h3>Connected</h3>{" "}
            <p className="database">
              Connected: The Hidden Science of Everything is a 2020 docuseries
              where journalist Latif Nasser is investigating ways in which we
              are connected to each other and the universe.
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/watch?v=B-aZrftUPlk"
            >
              {" "}
              see trailer{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <h3>The Social Dilemma</h3>{" "}
            <p className="database">
              This documentary-drama hybrid explores the dangerous human impact
              of social networking, with tech experts sounding the alarm on
              their own creations.
            </p>{" "}
            <a
              className="links"
              href="https://www.netflix.com/in/title/81254224"
            >
              {" "}
              watch here{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <h3>Seaspiracy</h3>{" "}
            <p className="database">
              {" "}
              Seaspiracy examines the global fishing industry, challenging
              notions of sustainable fishing and showing how human actions cause
              widespread environmental destruction.{" "}
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/watch?v=1Q5CXN7soQg"
            >
              {" "}
              see trailer{" "}
            </a>
          </li>
        </ol>
      </body>
    );

    setOutput(documentaryOutput);
  }

  function onClickHandler1() {
    const informativeOutput = (
      <body>
        <h2>Informative channels</h2>
        <ol>
          <li>
            {" "}
            <h3>Prakhar ke Pravachan</h3>{" "}
            <p className="database">
              Prakhar breaks down complex ideas from psychology, biology,
              philosophy, meta-physics and other sciences to provide valuable
              insights into everyday lives.
            </p>
            <a
              className="links"
              href="https://www.youtube.com/c/PrakharkePravachan"
            >
              {" "}
              Youtube channel{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <h3>Stanford University</h3>{" "}
            <p className="database">
              Stanford is a Youtube channel of Stanford University, and I am
              currently looking at the playlist named "Human Behavioral
              Biology".{" "}
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/watch?v=NNnIGh9g6fA&list=PL848F2368C90DDC3D"
            >
              {" "}
              Human Behavioral Biology{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <h3>Siddharth Warrier</h3>{" "}
            <p className="database">
              {" "}
              Sid explains everything with respect to Neuroscience and its mind
              blowing.{" "}
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/c/SiddharthWarrier"
            >
              {" "}
              Youtube channel{" "}
            </a>{" "}
          </li>
        </ol>
      </body>
    );

    setOutput(informativeOutput);
  }

  function onClickHandler2() {
    const podcastOutput = (
      <body>
        <h2> Podcast recommendations</h2>
        <ol>
          <li>
            {" "}
            <h3>Raw & Real</h3>{" "}
            <p className="database">
              Raw & Real aims to a conversational experience that expand your
              worldview and change the way you think.
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/watch?v=osft8yKPbK0&list=PLcHeZWq3pxIbObX7u3HFR40E5yUGcbNYr"
            >
              {" "}
              Season 1{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <h3>Simple Ken</h3>{" "}
            <p className="database">
              {" "}
              This podcast is hosted by Kenny, a simple podcast about tackling
              the weekly conflicts of a comedian.
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/watch?v=APFEK06I_iI&list=PLXdIy-dw1BNsQYqSxb490mHeBZTPchiQw"
            >
              {" "}
              Youtube playlist{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <h3>Aakash Mehta and Friends</h3>{" "}
            <p className="database">
              {" "}
              This a podcast where Aakash (comedian) sits down with a comic and
              talk about comedy technicalities specific to the guest.
            </p>{" "}
            <a
              className="links"
              href="https://www.youtube.com/channel/UCU0kRTzy3f6XeLqSIIt8eMw"
            >
              {" "}
              click here{" "}
            </a>{" "}
          </li>
        </ol>
      </body>
    );
    setOutput(podcastOutput);
  }

  return (
    <body>
      <header>
        {" "}
        <h1 className="off"> shivaaarecommends</h1>{" "}
      </header>
      <p className="off ow">
        Before acting on any recommendation, know the rationale. Said soo here
        are My recommendations in different genres.
      </p>
      <hr className="lineBreak"></hr>
      <div className="buttons">
        <button className="button" onClick={onClickHandler}>
          {" "}
          Documentaries
        </button>
        <button className="button" onClick={onClickHandler1}>
          {" "}
          Informative
        </button>
        <button className="button" onClick={onClickHandler2}>
          {" "}
          Podcasts
        </button>
      </div>
      <div className="App">
        <div> {output} </div>
      </div>
      <footer className="footer">
        {" "}
        This website is built for educational & recommendational purposes using
        React.{" "}
      </footer>
    </body>
  );
}
