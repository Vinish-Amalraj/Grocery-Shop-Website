import React, { useState ,useRef  } from 'react';
import Nav from "./Componets/Header/Nav"
import Banner1 from "./Componets/Body/Banner1"
import Banner2 from "./Componets/Body/Banner2"
import Vegetable from "./Componets/Body/Vegetable"
import Fruits from "./Componets/Body/Fruits"
import Cart from "./Componets/Cart"
import Foot from "./Componets/Footer/Foot"



const App = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Red Tomatoes',
      image: "https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_960_720.jpg",
      originalPrice: 80,
      discountedPrice: 50,
    },
    {
      id: 2,
      name: 'Chicken Eggs',
      image:"https://cdn.pixabay.com/photo/2016/08/25/06/46/egg-1618854_1280.jpg",
      originalPrice: 15,
      discountedPrice: 8,
    },
    {
      id: 3,
      name: 'Fresh Watermelon',
      image: "https://cdn.pixabay.com/photo/2020/06/19/21/44/watermelons-5318938_1280.jpg",
      originalPrice: 60,
      discountedPrice: 40,
    },
    {
      id: 4,
      name: 'Beef Steak',
      image:"https://cdn.pixabay.com/photo/2019/03/03/10/43/steak-4031589_960_720.jpg",
      originalPrice: 100,
      discountedPrice: 80,
    },
    {
      id: 5,
      name: 'Strawberry',
      image: "https://cdn.pixabay.com/photo/2016/03/05/21/47/berry-1239097_960_720.jpg",
      originalPrice: 120,
      discountedPrice: 100,
    },
    {
      id: 6,
      name: 'Avocado',
      image: "https://cdn.pixabay.com/photo/2016/03/05/19/03/appetite-1238257_1280.jpg",
      originalPrice: 210,
      discountedPrice: 180,
    },
    {
      id: 7,
      name: 'Apple',
      image: "https://cdn.pixabay.com/photo/2016/03/05/21/43/appetite-1239060_1280.jpg",
      originalPrice: 250,
      discountedPrice: 210,
    },
    {
      id: 8,
      name: 'Orange',
      image: "https://cdn.pixabay.com/photo/2016/10/07/13/20/tangerines-1721563_960_720.jpg",
      originalPrice: 160,
      discountedPrice: 120,
    },
    {
      id: 9,
      name: 'Banana',
      image: "https://cdn.pixabay.com/photo/2016/04/26/16/58/bananas-1354785_960_720.jpg",
      originalPrice: 100,
      discountedPrice: 70,
    },
    {
      id: 10,
      name: 'potato',
      image: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_960_720.jpg",
      originalPrice: 50,
      discountedPrice: 30,
    },
    {
      id: 11,
      name: 'Mushroom',
      image: "https://cdn.pixabay.com/photo/2021/06/08/11/27/mushrooms-6320451_1280.jpg",
      originalPrice: 80,
      discountedPrice: 60,
    },
    {
      id: 12,
      name: 'Carrot',
      image: "https://cdn.pixabay.com/photo/2016/11/23/00/22/carrots-1851424_960_720.jpg",
      originalPrice: 60,
      discountedPrice: 40,
    }
  ];

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = cart.some((product) => product.id === item.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const sectionRef = useRef(null);
  const scrollToSection = (inputRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const input = e.target.value;
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearch(input);
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <div>
        <Nav
          scrollToSection={scrollToSection}
          isOpen={isOffCanvasOpen}
          toggle={toggleOffCanvas}
          search={search}
          filteredProducts={filteredProducts}
          handleSearch={handleSearch}
        />

        <Vegetable products={filteredProducts} click={handleClick} />
        <Banner1 />
        <Fruits products={products} click={handleClick} />
      </div>

      <Banner2 />
      <div ref={sectionRef}>
        <Cart cart={cart} warning={warning} remove={handleRemove} />
      </div>
      <Foot />
    </div>
  );
};

export default App;