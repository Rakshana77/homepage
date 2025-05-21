import React from 'react';

const App = () => {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">BeautyStore</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">All-in-One Hairoil</h1>
          <p className="lead">Nourish, Strengthen & Shine – One Bottle For All Hair Needs</p>
          <a href="#products" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 text-center bg-white" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>🌿 100% Natural</h5>
            </div>
            <div className="col-md-3">
              <h5>🧪 Dermatologist Tested</h5>
            </div>
            <div className="col-md-3">
              <h5>📦 Free Shipping</h5>
            </div>
            <div className="col-md-3">
              <h5>🐰 Cruelty-Free</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-5 bg-light" id="products">
        <div className="container">
          <h2 className="text-center mb-5">Our Products</h2>
          <div className="row g-4">

            {[
              { name: 'All-in-One Hairoil', desc: 'Nourish & Strengthen – Hero Product', img: 'https://www.netmeds.com/images/product-v1/600x600/1149507/emami_7_oils_in_one_non_sticky_hair_oil_100_ml_free_navratna_cool_talc_18_g_1_s_780623_0_0.jpg' },
              { name: 'Dark Hair Hairoil', desc: 'Enhances dark hair naturally', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHus95iYb6grQuF3Bcl6N7cXLcGoCl9t05zQ&s/300x200' },
              { name: 'Root Strengthening Hairoil', desc: 'Boosts scalp health', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4k1jR8YxYjMJK9UklMwT-na06xuIq22SQ&s/300x200' },
              { name: 'Shampoo', desc: 'Gentle, sulfate-free formula', img: 'https://i.pinimg.com/736x/57/2c/bd/572cbd81448b7c76ae19e2e1d22ef93e.jpg' },
              { name: 'Conditioner', desc: 'Smooth and moisturize hair', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9-3-TNS7pe3uof9Q1qU-NUvFNV3RLo3Tnw&s/300x200' },
              { name: 'Face Cream', desc: 'Hydrates & brightens skin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqKsN_YhCZNUhzNMwCF0_dekzHrPartUNDQ&s' },
              { name: 'Face Mask', desc: 'Deep cleansing & glow', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPghVQWQ7oa7L94ehkhXQQH378kvwGZge63Q&s' },
              { name: 'Face Wash', desc: 'Daily gentle cleanser', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCDMTwCiZOFaBc-96C4cETucKxhbWV0HYDw&s/300x200' }
            ].map((product, index) => (
              <div className="col-md-3" key={index}>
                <div className="card h-100">
                  <img src={product.img} className="card-img-top" alt={product.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                    <a href="#" className="btn btn-outline-primary">Buy Now</a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-5 text-white bg-dark">
        <div className="container text-center">
          <h4 className="mb-3">Get exclusive deals and beauty tips</h4>
          <form className="d-flex justify-content-center">
            <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4">
        <p className="mb-0">© 2025 BeautyStore. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
