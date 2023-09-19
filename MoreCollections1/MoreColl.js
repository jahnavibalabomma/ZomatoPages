import React from "react";
import "./MoreColl.css";
import { MdArrowRight } from "react-icons/md";
const card1 = [
  {
    image:
      "https://b.zmtcdn.com/data/collections/ef140246fb4f5b15717d0ac120a303e0_1693550404.png",
    p1: "16 Live Cricket Screenings",
    p2: "16 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg?output-format=webp",
    p1: "12 Newly Opened Restau..",
    p2: "12 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674845423.jpg?output-format=webp",
    p1: "19 Best Pubs and Bars",
    p2: "19 Places",
  },

  {
    image:
      "https://b.zmtcdn.com/data/collections/b2f4b4e29c3cee6a3e5820944a71113a_1674844520.jpg?output-format=webp",
    p1: "15 Places for Exotic Cocktails",
    p2: "15 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg?output-format=webp",
    p1: "13 Finest Microbreweries",
    p2: "11 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/4d8bbdfe1fe2b4cfa8aad710676fcb61_1674847218.jpg?output-format=webp",
    p1: "15 Places for Regional C",
    p2: "15 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054286.jpg?output-format=webp",
    p1: "19 Blissful Breakfast Places",
    p2: "16 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120300.jpg?output-format=webp",
    p1: "24 Must-visit Legendary",
    p2: "24 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/97032a38b67d9c05177557d39496cca3_1674844607.jpg?output-format=webp",
    p1: "15 Classic Biryani Places",
    p2: "15 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/b90a3bc172dab4f5befb3389950ffcab_1674844363.jpg?output-format=webp",
    p1: "7 Themed Dining Places",
    p2: "6 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/6487ebe8fbb28294be84b70041d24601_1691347529.jpg?output-format=webp",
    p1: "17 Picturesque Cafe",
    p2: "17 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg?output-format=webp",
    p1: "Winner of Zomato Rest..",
    p2: "9 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/ff8a739dbb06a879e54e7e4797dc8033_1684638506.png?output-format=webp",
    p1: "11 Places for Chai Lovers",
    p2: "12 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/f312ede290cb7ab011e7aefe33205cc5_1683902228.jpg?output-format=webp",
    p1: "15 Pet Friendly Places",
    p2: "13 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/e5e018f1f8c2eae0efa83c4b78e40165_1674844689.jpg?output-format=webp",
    p1: "12 Places for Smoky Keba..",
    p2: "12 Places",
  },
  {
    image:
      "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043265.png?output-format=webp",
    p1: "15 Places for Bingeworthy",
    p2: "14 Places",
  },
];
function MoreColl() {
  return (
    <div className="mainCollection">
      <h3>More Collections</h3>
      <div className="collection">
        {card1.map((x) => {
          return (
            <div>
              <div className="morecoll">
                <p className="mainheadcoll">{x.p1}</p>
                <p>
                  {x.p2}
                  {/* <MdArrowRight color="white" size="30px"></MdArrowRight> */}
                </p>
              </div>
              <div>
                <img src={x.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreColl;
