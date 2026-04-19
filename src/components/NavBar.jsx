import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navData } from "../data/navData";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CartContext } from "../context/CartContext";
import "./NavBar.css";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showBusiness, setShowBusiness] = useState(false);
  const { user, setUser } = useContext(AppContext);
  const { cart } = useContext(CartContext);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setShowUserMenu(false);
  };

  const handleLogin = () => {
    navigate("/login");
    setShowUserMenu(false);
  };

  const handleItemClick = (item) => {
    if (item === "Web Development") {
      navigate("/webdev");
      setActiveDropdown(null);
    } else if (item === "Amazon Web Services (AWS)") {
      navigate("/ams");
      setActiveDropdown(null);
    }
  };

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="left">
        <h2 className="logo" onClick={() => navigate("/")}>Axion</h2>

        {/* FIND COURSES */}
        <div
          className="dropdownWrapper"
          onMouseEnter={() => {
            setActiveDropdown("Find Courses");
            setActiveCategory(navData["Find Courses"][0]);
          }}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <p className="link">Find Courses</p>

          {activeDropdown === "Find Courses" && (
            <div className="dropdown">

              {/* LEFT SIDE */}
              <div className="dropdownLeft">
                {navData["Find Courses"].map((cat) => (
                  <p
                    key={cat.title}
                    className={activeCategory?.title === cat.title ? "categoryItem activeItem" : "categoryItem"}
                    onMouseEnter={() => setActiveCategory(cat)}
                  >
                    {cat.title}
                  </p>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="dropdownRight">
                {activeCategory?.items.map((item, i) => (
                  <p
                    key={i}
                    className="dropdownItem"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* GET CERTIFIED */}
        <div
          className="dropdownWrapper"
          onMouseEnter={() => {
            setActiveDropdown("Get Certified");
            setActiveCategory(navData["Get Certified"][0]);
          }}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <p className="link">Get Certified</p>

          {activeDropdown === "Get Certified" && (
            <div className="dropdown">

              {/* LEFT */}
              <div className="dropdownLeft">
                {navData["Get Certified"].map((cat) => (
                  <p
                    key={cat.title}
                    className={activeCategory?.title === cat.title ? "categoryItem activeItem" : "categoryItem"}
                    onMouseEnter={() => setActiveCategory(cat)}
                  >
                    {cat.title}
                  </p>
                ))}
              </div>

              {/* RIGHT */}
              <div className="dropdownRight">
                {activeCategory?.items.map((item, i) => (
                  <p
                    key={i}
                    className="subItem"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>

            </div>
          )}
        </div>

        <p className="link" onClick={() => navigate("/subscribe")}>Subscribe</p>
      </div>

      {/* CENTER */}
      <input
        type="text"
        placeholder="Search for anything"
        className="search"
      />

      {/* RIGHT */}
      <div className="right">
        <div
          className="dropdownWrapper"
          onMouseEnter={() => setShowBusiness(true)}
          onMouseLeave={() => setShowBusiness(false)}
        >
          <p className="link">Axion Business</p>

          {showBusiness && (
            <div className="smallDropdown">
              <p className="smallItem" onClick={() => { navigate("/compare-plans"); setShowBusiness(false); }}>Compare Plans</p>
              <p className="smallItem">Try Axion Business</p>
            </div>
          )}
        </div>


        <p className="link">Teach on Axion</p>

        <div className="cart" onClick={() => navigate("/cart")}>
          <FiShoppingCart size={20} />
          {cart.length > 0 && (
            <span className="cart-badge">{cart.length}</span>
          )}
        </div>

        <div
          className="userWrapper"
          onMouseEnter={() => setShowUserMenu(true)}
          onMouseLeave={() => setShowUserMenu(false)}
        >
          <div className="userIcon">👤</div>

          {showUserMenu && (
            <div className="userDropdown">

              {!user ? (
                <p
                  className="dropdownItem"
                  onClick={handleLogin}
                >
                  Log in
                </p>
              ) : (
                <>
                  <p className="userName">{user.name}</p>
                  <p className="userEmail">{user.email}</p>

                  <hr />

                  <p
                    className="dropdownItem"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                </>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;