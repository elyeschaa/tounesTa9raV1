import axios from "axios";
import { useEffect, useState } from "react";

import Loading from "../../components/Loading/Loading.js";

import "./Home.css";

const Home = ({ books, loading }) => {
  return (
    <div>
    <div className="cards-container">
      {loading ? (
        <h1>loading</h1>
      ) : (
        books.map((book) => {
          console.log(books.bookImg);
          return (
            <ul class="cards">
              <li>
                <a href="" class="card">
                  <img
                    src="https://i.imgur.com/oYiTqum.jpg"
                    class="card__image"
                    alt=""
                  />
                  <div class="card__overlay">
                    <div class="card__header">
                      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                      </svg>
                      <img
                        class="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <h3 class="card__title">{book.title}</h3>
                    </div>
                    <p class="card__description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores, blanditiis?
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          );
        })
      )}
      
    </div>
    <div>
   
    <div
      id="cover"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Welcome</h1>
      <p style={{ fontSize: "50px", color: "brown" }}>
        `A reader lives a thousand lifes before he dies..`
      </p>
      {/* <div id="circle"></div> */}
    </div>
      </div>
      <div className="img">
        
        
      </div>

    </div>
  );
};

export default Home;
