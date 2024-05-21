import React, { useState, useEffect } from 'react';
import './App.css';

const img1 = 'https://shopee.ph/blog/wp-content/uploads/2019/04/shopee-55-double-double-sale-1280x720.jpg';
const img2 = 'https://shopee.ph/blog/wp-content/uploads/2020/06/spb_7.7_flash-sale_banner-3-1280x720.jpg';
const img3 = 'https://shopee.ph/blog/wp-content/uploads/2020/06/spb_7.7_flash-sale_banner-3-1280x720.jpg';

const items = [
  { name: "Men's Apparel", img: 'https://wharton.ph/cdn/shop/products/384-0038BLACK1WB.jpg?v=1634229641' },
  { name: "Men's Accessories", img: 'https://www.watchportal.com.ph/cdn/shop/files/casio-mtp-v001l-1b-black-leather-strap-watch-for-men-watchportal-ph_ebf0d6df-40a3-42d0-91a3-790e9eba14f7.jpg?v=1697162378' },
  { name: "Women's Apparel", img: 'https://images-cdn.ubuy.co.in/657af59e0550e37125744ac1-toddler-baby-girl-dress-summer-cotton.jpg' },
  { name: "Women's Accessories", img: 'https://imonojewelryph.com/wp-content/uploads/2023/12/10987IST.jpg' },
  { name: 'Beauty', img: 'https://m.maccosmetics.com.ph/media/export/cms/products/640x600/mac_sku_S4K031_640x600_0.jpg' },
  { name: 'Mobile & Gadgets', img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666344481.20013313!256x256.png' },
  { name: 'Mobile Accessories', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AnluHC84GrK4jGMpkYHZekowVwzgIfoPJrf0AIQjWg&s' },
  { name: 'Gaming', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOow5xweEyzCpiTsibECyXiaa6VJ9tJB3mcBGwWwdXww&s' },
  { name: 'Home Entertainment', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTj6palzW30ApSord_5oX8TKsbSnzm3aEAFbYOuKOxA&s' },
  { name: 'Babies & Kids', img: 'https://public.blenderkit.com/thumbnails/assets/e5893ed629654263841fca43df435f72/files/thumbnail_74df536d-06e4-46f8-8640-2e1604b3b220.png.256x256_q85.png.webp?webp_generated=1695340715' },
  { name: 'Home & Living', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4sfex9UTiC30nMdA009Jd5rca2__wXJItxIwXeSV0sA&s' },
  { name: 'Health & Personal Care', img: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684711559767/be2aa151925e7dd94d4f15fbcf7b1826_large.png&width=256&type=webp&quality=80' },
  { name: 'Makeup & Fragrances', img: 'https://lamoisson.com/cdn/shop/products/proraso-cologne-vaporisateur-wood-and-spice-100ml_256x.jpg?v=1634245866' },
  { name: 'Home Appliances', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC1e6QjO7WYm4hIdcrqsHGCNHyc08Dv010_I7QUQ8vg&s' },
  { name: 'Laptops & Computers', img: 'https://business.shoppable.ph/_next/image?url=https%3A%2F%2Fshoppable-dev.s3.ap-southeast-1.amazonaws.com%2Fproducts%2F867bd195-f749-40e4-a6a4-6a841e4a49b1.webp&w=256&q=75' },
  { name: 'School Supplies', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJemkN22sz71GRSe4C72Ea7SobrVK0LHh6V1c9c-LrDg&s' }
];

function App() 
{
  const [slideIndex, setSlideIndex] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    function showSlides(n) 
    {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
 
      if (slides.length === 0) 
      {
        return;
      }
    
      if (n > slides.length) {setSlideIndex(1)}
      if (n < 1) {setSlideIndex(slides.length)}
    
      for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
      
      if (slides[slideIndex-1])
      {
        slides[slideIndex-1].style.display = "block";
      }
    
      for (i = 0; i < dots.length; i++)
      {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      
      if (dots[slideIndex-1]) 
      {
        dots[slideIndex-1].className += " active";
      }
    }
    showSlides(slideIndex);

    function handleClickOutside(event)
    {
      const popup = document.querySelector('.popup-content');
      if (popup && !popup.contains(event.target)) 
      {
        setIsPopupVisible(false);
      }
    }
  
    if (isPopupVisible) 
    {
      document.addEventListener('click', handleClickOutside);
    } 
    else 
    {
      document.removeEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [slideIndex, isPopupVisible]);

  function plusSlides(n) 
  {
    setSlideIndex((prevIndex) => prevIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function handleSignIn(event) 
  {
    event.stopPropagation();
    setIsPopupVisible(true);
  }

  function handleClosePopup() 
  {
    setIsPopupVisible(false);
  }

  function handleSubmit(event) 
  {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="App">
      <div className="top-bar">
        <div className="top-bar-content">
          <h1>MachineProblem</h1>
          <button className="sign-in-button" onClick={handleSignIn}>Sign In / Sign Up</button>
        </div>
      </div>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span> {/* Close button */}
            <h2>Sign In / Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ display: 'block', margin: '0 auto' }} />
              </label>
              <br />
              <label>
                Password:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '80%', marginRight: '10px' }} />
                  <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? '🙈' : '👁️'}</span>
                </div>
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={img1} style={{ width: "100%" }} alt="Slide 1" />
        </div>

        <div className="mySlides fade">
          <img src={img2} style={{ width: "100%" }} alt="Slide 2" />
        </div>

        <div className="mySlides fade">
          <img src={img3} style={{ width: "100%" }} alt="Slide 3" />
        </div>

        <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
        <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>

      <div className="grid-container-wrapper">
        <div className="grid-container">
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;