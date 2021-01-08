import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>New Products waiting to be released</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src='images/img-9.jpg'
              text='Start easy and grow your first beautiful marigold'
              label='FlowerCart Signature Box'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore our merch from FlowerCart Facemask to T-Shirt to Cups'
              label='Merch'
              path='/products'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/img-4.jpg'
              text='Under Development'
              label='Coming Soon'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Under Development'
              label='Coming Soon'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Under Development'
              label='Coming Soon'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
