import React, { useState, useEffect } from 'react';
import './App.css';

const img1 = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/73fbe271026179.5bb6e7af358b6.jpg';
const img2 = 'https://sc0.blr1.cdn.digitaloceanspaces.com/article/126864-zfwymgwgcj-1567691366.jpeg';
const img3 = 'https://poweradspy.com/wp-content/uploads/2023/10/nike-ads-growth.webp';

const items = [
  { name: "Chanel", img: 'https://cdn.iconscout.com/icon/free/png-256/free-chanel-202547.png?f=webp' },
  { name: "Nike", img: 'https://cdn.iconscout.com/icon/free/png-256/free-nike-15-761696.png' },
  { name: "Adidas", img: 'https://cdn.jiocommerce.io/v2/yellow-queen-0c3fa9/sngprd/wrkr/misc/pictures/free-icon/original/yaGUy9tcV-Catalogue-logo.png' },
  { name: "Gucci", img: 'https://cdn.iconscout.com/icon/free/png-256/free-gucci-3215414-2673832.png' },
  { name: 'Sony', img: 'https://companiesmarketcap.com/img/company-logos/256/SONY.png' },
  { name: 'Lego', img: 'https://qph.cf2.quoracdn.net/main-qimg-fe6e2fc94faef15f560caa3447aec070' },
  { name: 'Lacoste', img: 'https://laoispharmacy.com/wp-content/uploads/2020/01/logo-lacoste-256.png' },
  { name: 'Apple', img: 'https://curiouslionlearning.com/wp-content/uploads/2022/10/639906_apple_512x512.png' },
  { name: 'Oppo', img: 'https://android-artworks.25pp.com/fs08/2024/04/16/1/106_3e134d21c2a1e90055b421527f6930a0_con.png' },
  { name: 'Uniqlo', img: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2c/a9/07/2ca90744-e87a-6060-b021-e8abbb8c302b/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/256x256bb.jpg' },
  { name: 'H&M', img: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397750641/49e1d00a9e41c47154515fca87952c89.png' },
  { name: 'Reebok', img: 'https://cdn.iconscout.com/icon/free/png-256/free-reebok-3421520-2854201.png' },
  { name: 'Bench', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D3nfaVWhoPWrIBmlqk6LVSE5bE_wVdUP_A&s' },
  { name: 'Dell', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpOxiMfrltG52_wgsZ1KSbtXqmNyUPe6JyQ&s' },
  { name: 'Prada', img: 'https://cdn.iconscout.com/icon/free/png-256/free-prada-3384874-2822955.png' },
  { name: 'Dior', img: 'https://companiesmarketcap.com/img/company-logos/256/CDI.PA.png' }
];

const links = [
  { link: 'https://www.chanel.com/us/'},
  { link: 'https://www.nike.com/ph/'},
  { link: 'https://www.adidas.com/us/'},
  { link: 'https://www.gucci.com/us/'},
  { link: 'https://www.sony.com/us/'},
  { link: 'https://www.lego.com/us/'},
  { link: 'https://www.lacoste.com/us/'},
  { link: 'https://www.apple.com/ph/store'},
  { link: 'https://www.oppo.com/en/'},
  { link: 'https://www.uniqlo.com/us/'},
  { link: 'https://www2.hm.com/en_asia5/index.html'},
  { link: 'https://www.reebok.com/us/'},
  { link: 'https://shop.bench.com.ph/'},
  { link: 'https://www.dell.com/us/'},
  { link: 'https://www.prada.com/us/'},
  { link: 'https://www.dior.com/us/'},
]

const sellitems = [
  { name: "Iphone X", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmLKgd8GhdNgijYM6oKq0rxtzdRxf3YfiTQ&s', description: '₱100,000'},
  { name: "Reebok Classic Leather Black", img: 'https://i.ebayimg.com/images/g/g5oAAOSwpyxj9-EC/s-l1200.jpg', description: '₱4,000' },
  { name: "Uniqlo Ultra Light Down Jacket", img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460914/item/goods_12_460914.jpg?width=494' , description: '₱6,000'},
  { name: "Nike Dunk High", img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png' , description: '₱8,500'},
  { name: "Uniqlo Peace For All", img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/459561/item/goods_09_459561.jpg?width=494' , description: '₱800'},
  { name: "Uniqlo Supima Cotton", img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455365001/item/goods_31_455365001.jpg?width=494' , description: '₱900'},
  { name: "Guess Blue Denim Watch", img: 'https://img.lazcdn.com/g/p/ca7d1ee08155ef62cef8ea7170f3708b.jpg_720x720q80.jpg' , description: '₱6,000'},
  { name: "Nike Dunk Low", img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9b26aa8f-0173-409b-b30a-7ce2d88573a4/custom-nike-dunk-low-by-you.png' , description: '₱15,000'},
  { name: "Nike Air Force 1 Mid", img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e9d41cd4-a2c5-4ca7-a3aa-f4bf597658d0/custom-nike-air-force-1-mid-by-you-shoes.png' , description: '₱7,900'},
  { name: "Oppo A95", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FicV-TmUpL5xDcdibqjOrL-sCSOqmFPKMA&s' , description: '₱24,000'},
  { name: "Sony BRAVIA TV X85K", img: 'https://www.sony-asia.com/image/88de0249f4df8101f60bccc4aaa57779?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF' , description: '₱60,500'},
  { name: "Lacoste Black Crocs", img: 'https://i5.walmartimages.com/asr/d15b955f-63ec-4cdc-aaa4-37b28807b81f.6856aa51ea991e5595d5396efb074517.jpeg' , description: '₱8,000'},
  { name: "Dior Homme Eau de Toilette", img: 'https://static.beautytocare.com/media/catalog/product/d/i/dior-dior-homme-eau-de-toilette-150ml.jpg' , description: '₱8,100'},
  { name: "Samsung Galaxy S21", img: 'https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s21/galaxy-s21-phantom-purple.jpg' , description: '₱21,000'},
  //{ name: "Dell Latitude 5430", img: 'https://business.shoppable.ph/_next/image?url=https%3A%2F%2Fshoppable-dev.s3.ap-southeast-1.amazonaws.com%2F9c27c63a-1afd-4327-ac6e-8b07a7f90fd3.jpg&w=256&q=75' , description: '₱81,000'},
  //{ name: "DUPLO Tower Crane", img: 'https://images.prod.babyshopgroup.io/images/642997_10%23a/256x256.jpeg' , description: '₱5,400'}
];


function App() 
{
  const [slideIndex, setSlideIndex] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(items.map(() => 1));
  const [isSignUpPopupVisible, setIsSignUpPopupVisible] = useState(false);
  const [isSignInPopupVisible, setIsSignInPopupVisible] = useState(false);
  const [isItemAddPopupVisible, setIsItemPopupVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [userType, setUserType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
 
  useEffect(() => {
    const filtered = sellitems.filter(sellitem => sellitem.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredItems(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
  
      if (slides.length === 0) {
        return;
      }
  
      if (n > slides.length) { setSlideIndex(1) }
      if (n < 1) { setSlideIndex(slides.length) }
  
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
  
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
  
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
      }
    }
    showSlides(slideIndex);
  
    function handleClickOutside(event) {
      const popup = document.querySelector('.popup-content');
      if (popup && !popup.contains(event.target)) {
        setIsPopupVisible(false);
      }
    }
  
    if (isPopupVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [slideIndex, isPopupVisible]);

  const handleOrderConfirmation = () => {
    setIsOrderConfirmed(true);
    // Clear the cart
    setCart([]);
  };
  
  function plusSlides(n) 
  {
    setSlideIndex((prevIndex) => prevIndex + n);
  }

  function handleSelectUserType(isSeller) {
    setIsSeller(isSeller);
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

  function handleSignUp(event) {
    event.stopPropagation();
    setIsSignUpPopupVisible(true);
  }

  function handleItemAdd(event) {
    event.stopPropagation();
    setIsItemPopupVisible(true);
  }
  
  function handleCloseSignUpPopup() {
    setIsSignUpPopupVisible(false);
  }

  function handleSignIn(event) {
    event.stopPropagation();
    setIsSignInPopupVisible(true);
  }
  
  function handleCloseSignInPopup() {
    setIsSignInPopupVisible(false);
  }
  
  
  function handleSignUpSubmit(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Is Seller:", isSeller);
      setLoggedInUser(email);
      setUserType(isSeller ? 'Seller' : 'Buyer');
      localStorage.setItem('loggedInUser', email);
      window.location.reload();
    } else {
      console.error('Passwords do not match.');
    }
  }

  function handleItemAddSubmit(event) {
    window.close()
  }
  
  function handleLogout() {
    localStorage.removeItem('loggedInUser');
    setLoggedInUser('');
    setUserType('');
    window.location.reload();
  }

  function handleSelectUserType(isSeller) {
    setUserType(isSeller ? 'Seller' : 'Buyer');
  }

  function handleAddToCart(index) 
  {
    const item = sellitems[index];
    const quantity = quantities[index];
    setCart([...cart, { ...item, quantity }]);
  }

  function handleQuantityChange(index, delta) 
  {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + delta);
    setQuantities(newQuantities);
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase(); // Convert search query to lowercase
    setSearchQuery(query);
    
    const filtered = sellitems.filter(item => item.name.toLowerCase().includes(query)); // Convert item names to lowercase for comparison
  
    setFilteredItems(filtered);
  };
  

  
  

  const handleItemClick = (item) => {
    setSearchQuery(item.name);
    setIsDropdownOpen(false);
  };



  
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <br/>
          <div className="navbar-section">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for products"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsDropdownOpen(true)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              />

              {isDropdownOpen && (
                <div className="dropdown" style={{ position: 'absolute', top: '40px', left: '0', backgroundColor: '#fff', border: '1px solid #ccc', zIndex: '999' }}>
                  {filteredItems.map((sellitem, index) => (
                    <div key={index} className="dropdown-item" onClick={() => handleItemClick(sellitem)}>
                      <img src={sellitem.img} alt={sellitem.name} className="dropdown-image" style={{ width: '30px', height: '30px' }} />
                      <span>{sellitem.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <div className="top-bar">
        <div className="top-bar-content">
          <h1>Jasper's Clothing Shop</h1>
          {loggedInUser ? (
            <>
              <span> Welcome, {loggedInUser} ({userType})</span>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>
              <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
            </>
          )}
          <button className="view-cart-button" onClick={() => setIsCartPopupVisible(true)}>View Cart</button>
        </div>
      </div>
  
      

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>Sign In</h2>
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
  
      {isSignUpPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseSignUpPopup}>&times;</span>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
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
              <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={{ display: 'block', margin: '0 auto' }} />
              </label>
              <br />
              <div>
                <button onClick={(e) => handleSelectUserType(e, false)}>Buyer</button>
                <span style={{ margin: '0 10px' }}></span>
                <button onClick={(e) => handleSelectUserType(e, true)}>Seller</button>
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
  

      {isSignInPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleCloseSignInPopup}>&times;</span>
            <h2>Sign In</h2>
            <form onSubmit={handleSignUpSubmit}>
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
  
      {isCartPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setIsCartPopupVisible(false)}>&times;</span>
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
              <div>
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px' }} />
                      <span>{item.name}</span>
                      <br />
                      <span>Quantity: {item.quantity}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={handleOrderConfirmation}>Proceed to Order</button>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
  
        {isOrderConfirmed && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setIsOrderConfirmed(false)}>&times;</span>
            <h2>Order Confirmed</h2>
            <p>Your order has been confirmed!</p>
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
  
      <div className="grid-container-wrapper-category">
        <div className="grid-container-category">
          {items.map((item, index) => (
            <a key={index} href={links[index].link} className="grid-item-link">
              <div className="grid-item">
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
  
      {isItemAddPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setIsCartPopupVisible(false)}>&times;</span>
            <h2> Add Item</h2>
            <form onSubmit={handleItemAddSubmit}>
              <label>
                Product Name:
                <input type="text"/>
              </label>
              <br />
              <label>
                Product Price:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text"/>
                </div>
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <button className="sign-up-button" onClick={handleItemAdd}> Add Item </button>
      <br/>
      <button className="sign-up-button" onClick={handleItemAdd}> Delete Item </button>

      <div className="grid-container-wrapper-item-sell">
        <div className="grid-container">
          {sellitems.map((sellitem, index) => (
            <div key={index} className="grid-item">
              <img src={sellitem.img} alt={sellitem.name} />
              <p>{sellitem.name}</p>
              <p>{sellitem.description}</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
              </div>
              <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );      
}
export default App;