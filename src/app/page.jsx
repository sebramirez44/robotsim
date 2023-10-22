"use client";
import React, {useState} from "react";
import Navbar from './_components/navbar.jsx'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardSeb from "./_components/cardSeb.jsx";
import { getLessons } from "./firebase.js";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const lesson = {
  title: "Move forward",
  pathToImage: "/imagen1.png",
  description: "this is a brief description of the actual lesson contents",
  key: 0,
  hover: false
}
const lesson2 = {
  title: "Move backward",
  pathToImage: "/imagen2.png",
  description: "this is a brief description of another one of the contents",
  key: 1,
  hover: false
}
const lesson3 = {
  title: "Move middle",
  pathToImage: "/imagen3.png",
  description: "this is another brief description of the contents of another lesson", 
  key: 2,
  hover: true
}

const lessons = [lesson, lesson2, lesson3, lesson, lesson2, lesson3, lesson, lesson2]

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [lessonsArr, setLessonsArr] = useState([]);
  getLessons().then((result) => setLessonsArr(result))
  return (
    <div className="root-layout">
      <Navbar/>
      {lessonsArr.map((item, index) => (
        <CardSeb title={item.title} description={item.description} imageURL={item.pathToImage} key={index} />
      ))}
      <div className="Content">
        <p className="subtitle">Continue Lessons</p>
        {/* <div className="cardsRow">
          {lessons.map((item, index) => (
            <div key={index} className="classCard">
              <img src={item.pathToImage} width="100%"/>
            </div>
          ))}
        </div> */}
        <Carousel
          responsive={responsive}
          itemClass="classCard"
          infinite={false} // Add this line to restrict navigation

        >
          {lessons.map((item, index) => (
            <CardSeb title={item.title} description={item.description} imageURL={item.pathToImage} key={index} />
          ))}

        </Carousel>


        <p className="subtitle">Recommended Lessons</p>
        <Carousel
          responsive={responsive}
          itemClass="classCard"
          containerClass="carousel-container"
        >
          {lessons.map((item, index) => (
            <CardSeb title={item.title} description={item.description} imageURL={item.pathToImage} key={index} />
          ))}

        </Carousel>
      </div>
      
    </div>
  )
}