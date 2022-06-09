import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
function Addbook(props) {
  const [bookImg, setBookImg] = useState("");
  const [newBook, setNewBook] = useState({
    author: "",
    title: "",
    date: "",
    type: "",
    price: 0,
    rating: 0,
  });
  const handleSetBookImg = (e) => {
    setBookImg(e.target.files[0]);
  };
  const handleAddBook = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = async () => {
    const newBook = new FormData();

    // newBook.append("Book", newBook);

    if (bookImg) {
      newBook.append("img", bookImg);
    }

    console.log(newBook);

    const res = await axios.post("/api/books/createBook", newBook, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log(res);

    props.handleModal();
  };

  //   console.log(newBook.bookImg);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="file"
          placeholder="image"
          name="bookImg"
          accept="image/png, image/jpeg "
          onChange={handleSetBookImg}
        />
        {/* <input
          placeholder="bookImg"
          type="file"
          value={props.bookImg}
          name="bookImg"
          onChange={props.handleSetBookImg}
        /> */}
        <input
          placeholder="author"
          type="text"
          value={newBook.author}
          name="author"
          onChange={handleAddBook}
        />
        <input
          placeholder="title"
          type="text"
          value={newBook.title}
          name="title"
          onChange={handleAddBook}
        />
        <input
          placeholder="date"
          type="date"
          value={newBook.date}
          name="date"
          onChange={handleAddBook}
        />
        <input
          placeholder="type"
          type="text"
          value={newBook.type}
          name="type"
          onChange={handleAddBook}
        />
        <input
          placeholder="rating"
          type="number"
          value={newBook.rating}
          name="rating"
          onChange={handleAddBook}
        />
        <input
          placeholder="price"
          type="number"
          value={newBook.price}
          name="price"
          onChange={handleAddBook}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.handleModal}>Close</Button>
        <Button onClick={addBook} variant="success">
          Addbook
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Addbook;
// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
