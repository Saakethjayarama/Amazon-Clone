import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="123"
          title="Redux Analogue Blue Dial Men’s & Boy's Watch RWS0230S"
          price={303}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81j14WXbc%2BL._UL1500_.jpg"
        />
        <Product
          id="123"
          title="OnePlus Nord "
          price={24999}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71DU40vBAUL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition"
          price={550}
          rating={5}
          image="https://m.media-amazon.com/images/I/41-G7AIOZyL.jpg"
        />
        <Product
          id="123"
          title="Acer Nitro 7 9th Gen Core i5 15.6-inch Full HD IPS Thin and Light Gaming Laptop (8GB/1TB SSD/Windows 10/6GB Graphics/Obsidian Black/2.5kg), AN715-51"
          price={82829}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71IBJRa3EBL._SL1500_.jpg"
        />
        <Product
          id="123"
          title="Apple iPad (10.2-inch, Wi-Fi + Cellular, 32GB) - Space Grey (Latest Model) "
          price={40900}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Wk5mfMbML._SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Apple TV 4K (64GB)"
          price={90000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51P2VHkuu4L._SX679_.jpg"
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;
