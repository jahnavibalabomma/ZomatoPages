import React from "react";
import "./BarImage1.css";
import { FaRegStar } from "react-icons/fa6";
import { BiSolidStar } from "react-icons/bi";
const card = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/20562643/1446ccbeb9d1dcbc06337cb8d7d7228a.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Babylon Bar And Kitchen",
    rating1: "4.4",
    rating2: "-",
    p1: "Asian,Sushi,Chinese,Italian,Biryani,T..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/18725609/6be66a9b53b7348cd6723824a86ba084.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Carpe Diem",
    rating1: "4.3",
    rating2: "-",
    p1: "Continential,North Indian,Oriental,Fas..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/19183269/07c696d385fbb3dd8aaf54c5167548b1.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Amnesia Sky Bar",
    rating1: "4.2",
    rating2: "-",
    p1: "Finger Food,Italian,Sushi,Fast Food,..",
    p2: "Inorbit Mall,Hitech City,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/20721563/38834cdc2f4ebafc40445d95fdbc6fbe.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Bellinie & Bae-The Culinary B..",
    rating1: "4.2",
    rating2: "-",
    p1: "Bar Food,Continental,North Indian,Ch..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/1/18260951/db08328cd6cea53befd771abc19d48a4.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Mustang Terrace Lounge",
    rating1: "4.1",
    rating2: "3.8",
    p1: "Mexican,Italian,North Indian,Pizza,De..",
    p2: "Gachibowli,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/4/20476184/39b3c99dc18a0e126c27f871e4f8c95b.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Firefly Club And Social Room",
    rating1: "4.0",
    rating2: "-",
    p1: "Asian,North Indian,Chinese,Mughlai,...",
    p2: "Sarath City Capital Mall,Kondapur,Hyd..",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/0/19011870/4ee5145a8fcedc6fae48869816aab445.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Chemistry",
    rating1: "4.2",
    rating2: "-",
    p1: "Italian,North Indian,Asian,Fast Food",
    p2: "Road 36,Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/8/18241288/0e30a006c9b34284cb444f914956dba2.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Sounds & Spirits",
    rating1: "3.9",
    rating2: "-",
    p1: "Finger Food,Continental,Pizza,North l..",
    p2: "Madhapur,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/6/20477626/6d80a74c341bb25f573066180530fb2a.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Nectar Kitchen & Bar",
    rating1: "4.3",
    rating2: "-",
    p1: "Chinese,Contental,Modern Indian,N..",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/6/19569796/02a610e5b1a2dd4cff57c739ed5732da.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Frat House",
    rating1: "4.2",
    rating2: "-",
    p1: "Continential,Asian,Chinese,North Indi..",
    p2: "SLN Terminus,Gachibowli,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/0/18402110/f960470d10a829afa43a98977c598cba.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "The Lal Street-Bar Exchange",
    rating1: "4.2",
    rating2: "3.4",
    p1: "Finger Food,North Indian,Chiness,Hy..",
    p2: "SLN Terminus,Gachibowli,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/8/18581678/30fd69c003baaf1d9c077c5b497fb6a8.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "By The Bottle",
    rating1: "4.2",
    rating2: "3.5",
    p1: "Continental,Chinese,North Indian,Itali..",
    p2: "Road 36,Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/7/19896057/cbd4f8cd4ff9460473c1b66be2adcbf9.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Hard Rock Cafe",
    rating1: "4.5",
    rating2: "4.3",
    p1: "American,Continental,Italian,Burger,..",
    p2: "Hitech City,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/18562409/138d99ce218ac393351824c028ce8827.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Headquarters",
    rating1: "4.5",
    rating2: "4.4",
    p1: "Continental,Chinese,Italian,North Indi..",
    p2: "Somajiguda,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18228803/23d73293485cb1bcc517132f22615cab.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "The Moonshine Project",
    rating1: "4.3",
    rating2: "4.2",
    p1: "Bar Food,Oriental,North Indian,Seafo..",
    p2: "Film Nagar",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/18571323/77993976d007bf3c7d4fc4cbd477e6e6.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Tabula Rasa",
    rating1: "4.3",
    rating2: "4.0",
    p1: "Continental,Cafe,North Indian,Asian",
    p2: "Jubilee Hills,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/chains/9/20377829/47f6cf50a69256e4c0ac6b11ea1a8967.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "75 Degree West",
    rating1: "4.0",
    rating2: "3.4",
    p1: "Asian,Continental,North Indian,Chine..",
    p2: "Gandipet,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/0/18530150/24da4cef87d5f0f487355aaf3d00843f.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Glocal Junction",
    rating1: "4.4",
    rating2: "3.5",
    p1: "North Indian,Hyderabadi,Fast Food,P..",
    p2: "Kondapur,Hyderabad",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/0/18933160/21e86ef318529cf9416f3c8dbeb59b9c.jpeg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    title: "Absorb-The Boutique Bar",
    rating1: "4.3",
    rating2: "4.0",
    p1: "Continental,Cafe,North Indian,Asian",
    p2: "Jubilee Hills,Hyderabad",
  },
];
function BarImage1() {
  return (
    <div className="cardImg">
      {card.map((x) => {
        return (
          <div className="mainbarimg">
            <img src={x.image} alt="" />
            <p className="bartitle">{x.title}</p>
            {/* <div className="rating"> */}
            <button className="rating1">
              {x.rating1}
              <BiSolidStar color="white"></BiSolidStar>
            </button>
            <span>DINING</span>
            <span>
              <button className="rating2">
                {x.rating2}
                <FaRegStar></FaRegStar>
              </button>
            </span>
            <span>DELIVERY</span>
            {/* </div> */}
            <p className="p1">{x.p1}</p>
            <p className="p2">{x.p2}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BarImage1;
