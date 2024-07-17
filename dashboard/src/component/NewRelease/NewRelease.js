import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/bookActions';
import { addToCart } from '../../actions/cartActions';
import './NewRelease.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ModalContext } from '../../Context/ModalProvider';



const NewRelease = ({ books, fetchBooks, addToCart }) => {
  const { showModal } = useContext(ModalContext);
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleAddToCart = (book) => {
    addToCart(book);
    showModal(`${book.bookTitle} has been added to the cart.`);
  };

  return (
    <div className='Container1'>
      <div className='NewRelease_header'>
        <h6>SOME QUALITY ITEMS</h6>
        <h2>New Release Books</h2>
      </div>

      <div className='NewRelease_swiper'>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            nextEl: '.button-next-slide',
            prevEl: '.button-prev-slide',
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 3 seconds
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            953: {
              slidesPerView: 2,
            },
            1300: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className='herosplit'>
                <div className='Card_img1'>
                  <img src={book.bookImage} alt={book.bookTitle} />
                </div>
                <div className='Intro'>
                  <h1>{book.bookTitle}</h1>
                  <p>{book.bookAuthor}</p>
                  <span>₦{book.price}</span>
                </div>
                <div className='AddToCart'>
                  <button onClick={() => handleAddToCart(book)}>Add to cart</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='button-prev-slide'>
            <i className='fa-solid fa-arrow-left'></i>
          </div>
          <div className='button-next-slide'>
            <i className='fa-solid fa-arrow-right'></i>
          </div>
        </Swiper>
      </div>

      <div className='view'>
        <div className='ViewAll'>
          <h3>View All Products</h3>
          <i className='fa-solid fa-arrow-right'></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.bookReducer.get('books').toJS(),
});

const mapDispatchToProps = {
  fetchBooks,
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRelease);
