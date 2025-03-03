import Carousel from 'react-bootstrap/Carousel';
import Transfer from './images/money.jpeg';
import Interest from './images/interest.jpg';
import Security from './images/security.jpeg';
import Finance from './images/finance.webp';
import Stock from './images/stock.avif';
import './App.css';

function Home() {
  return (
    <>
    <div id='heading'>
  <h1>Welcome to Our Bank</h1>
</div>
      
      <div className="carousel-container">
        <Carousel data-bs-theme="dark" >
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Transfer}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>TRANSFER MONEY</h5>
              <p>Simple & Secure way to Transfer Money.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Interest}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>0% INTERESTS</h5>
              <p>Zero Interest on Principal Balance.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Security}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>SECURITY</h5>
              <p>Five Ways to Enhance Data Security.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Finance}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h5>FINANCE SUPPORT</h5>
              <p>Easy Access to Bank Loans and Finance Options.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              id="slide"
              className="carousel-image"
              src={Stock}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h5>STOCK</h5>
              <p>Stocks in Indian Market Capitalisation.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Home;
