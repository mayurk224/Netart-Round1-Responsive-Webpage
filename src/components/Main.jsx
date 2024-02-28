import React from "react";
import Award from "../assets/1.png";
import Stage from "../assets/2.png";
import Products from "../assets/3.png";

function Main() {
  return (
    <main className="main">
      <div className="heroSection">
        <div className="left">
          <img src={Award} alt="" />
        </div>
        <div className="right">
          <h1>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h1>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={Stage} alt="" />
          <p>
            Government of India has awarded the{" "}
            <span>"National Energy Conservation Award 2018"</span>. Mr. G.
            Selvaraj, Joint Managing Director of C.R.I. Group received the award
            from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="productSection">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={Products} alt="" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr />
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>
          CHEMICALS & PROCESS
          <span className="vertical-line"></span>POWER WATER & WASTE WATER
          <span className="vertical-line"></span>OILS & GAS
          <span className="vertical-line"></span>PHARMA SUGARS & DISTILLERIES
          <span className="vertical-line"></span>PAPER & PULP MARINE & DEFENCE
          <span className="vertical-line"></span>METAL & MINING
          <span className="vertical-line"></span>FOOD & BEVERAGE
          <span className="vertical-line"></span>PETROCHEMICAL & REFINERIES
          <span className="vertical-line"></span>SOLAR
          <span className="vertical-line"></span>BUILDING HVAC
          <span className="vertical-line"></span>FIRE FIGHTING
          <span className="vertical-line"></span>AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </main>
  );
}

export default Main;
