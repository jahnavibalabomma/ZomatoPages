import React from "react";
import NavBar from "../Pubs&BarPage/NavBar/NavBar";
import FirstRow from "../Pubs&BarPage/FirstRow/FirstRow";
import BarImage1 from "../Pubs&BarPage/BarImages1/BarImage1";
import Options from "../Pubs&BarPage/ExploreOptions/Options";
import MoreColl from "../Pubs&BarPage/MoreCollections1/MoreColl";
import Footer from "../Pubs&BarPage/Footer/Footer";
function PubsBarPage() {
  return (
    <div>
      <NavBar></NavBar>
      <FirstRow></FirstRow>
      <BarImage1></BarImage1>
      <MoreColl></MoreColl>
      <Options></Options>
      <Footer></Footer>
    </div>
  );
}

export default PubsBarPage;
