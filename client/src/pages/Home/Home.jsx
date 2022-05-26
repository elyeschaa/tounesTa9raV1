import React from "react";
import { Link } from "react-router-dom";

import Carrousel from "../../components/Carousel/Carrousel";
import Bienfait from "../../components/Bienfait/Bienfait";

import "./Home.css";
import Footer from "../../components/Footer/Footer";
import ReactStars from "react-rating-stars-component";

const Test = ({ books }) => {
  const bookList = books.slice(0, 4);
  

  return (
    <div>
      <div style={{ marginTop: "0px" }}>
        <Carrousel />
      </div>

      <main>
        {bookList.map((book) => {
          return (
            <div key={book.id} 
            className="books">
              <div>
                <img
                  src={`http://localhost:3000/${book.bookImg}`}
                  alt=""
                  class="book-img"
                />
              </div>
              <div class="descp">
                <h2 class="book-name">{book.title}</h2>
                <h3 class="author">by {book.author}</h3>
                <ReactStars
                  count={5}
                  size={24}
                  isHalf={true}
                  edit={false}
                  value={book.rating}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                , ,<p class="info">{book.description}</p>
                <Link to={`/bookDescription/${book._id}`}>
                  <button type="submit">See the Book</button>
                </Link>
              </div>
            </div>
          );
        })}
      </main>
      <div>
        <h1 id="lecture">
          “La lecture encombre la mémoire et empêche de penser.”
        </h1>

        <div>
          <div class="container bootstrap snippets bootdeys">
            <div class="row">
              <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <div class="content">
                      <h4 class="title">{/* <a href="#">Blue Card</a> */}</h4>
                      <p class="description">
                        Les lecteurs sont les véritables événements de la vie..{" "}
                      </p>
                      <h6 class="category">-Jorge Luis Borges-</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <div class="content">
                      <h4 class="title"></h4>
                      <p class="description">
                        La lecture épanouit l'homme, les discussions
                        l'enrichissent{" "}
                      </p>
                      <h6 class="category">-Francis Bacon-</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <div class="content">
                      <h4 class="title"></h4>
                      <p class="description">
                        La lecture est la clé de bien des évasions.{" "}
                      </p>
                      <h6 class="category"> -Stéphane Théri-</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="brown"
                    data-radius="none"
                  >
                    <div class="content">
                      <h4 class="title"></h4>
                      <p class="description">La lecture agrandit l'âme. </p>
                      <h6 class="category">-Voltaire-</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="purple"
                    data-radius="none"
                  >
                    <div class="content">
                      <h4 class="title"></h4>
                      <p class="description">“La lecture est une amitié.” </p>
                      <h6 class="category">-De Marcel Proust-</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                  <div
                    class="card card-just-text"
                    data-background="color"
                    data-color="orange"
                    data-radius="none"
                  >
                    <div class="content">
                      <h4 class="title"></h4>
                      <p class="description">
                        “Une lecture m'émeut plus qu'un malheur réel.”{" "}
                      </p>
                      <h6 class="category">-De Gustave Flaubert-</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 id="titreb">les bienfaits de la lecture</h1>
      <div id="haha">

      {/* <Bienfait /> */}
      
      <p id="para">
        -Stimulations des connexions du cerveau.-
        <br />
        -Détente et diminution du stress.-
        <br />
        -Amélioration de l'empathie.-
        <br />
        -Apaisement des douleurs chroniques.-
        <br />
        -Amélioration de l'humeur.-
        <br />
        -Protection de la mémoire et des capacités de raisonnement.-
      </p>
      
      <img id="imgb" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/282254371_433209494806040_8943982080150375055_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=TSf52PZ45nEAX_wlHc2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKa_1YuRztD0BiSLUfiLNLpYt9o8rJ4PKJMnhZh6rcJ6w&oe=62B23DD3" alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default Test;
