import React from "react";
import "../assets/sass/Working.scss";
import "../assets/sass/App.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import working from "../assets/img-me/working.png";
import Cursor from "./Cursor";

const Waiting = () => {
  return (
    <>
      <Cursor />
      <div className="noise">
        <Navbar />

        <div id="waiting" className="container">
          <div className="wip title">
            <h2>
              Le site est temporairement indisponible pour cause de maintenance.
            </h2>
            <p>
              Merci pour votre visite, mon portfolio fait peau neuve, une toute
              nouvelle version sera prochainement disponible. Patience, revenez
              bientôt pour voir le résultat ! 🚀
            </p>
            <img src={working} alt="Working" />;
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Waiting;
