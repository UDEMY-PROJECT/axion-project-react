import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navData } from "../data/navData";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CartContext } from "../context/CartContext";
import { courses } from "../data/courses";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Filter courses based on search query
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5); // Limit to 5 results

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  const handleSearchResultClick = (course) => {
    setSearchQuery("");
    setShowSearchResults(false);
    // For now, just navigate to home - you can add specific course pages later
    navigate("/");
  };

  const handleSearchBlur = () => {
    // Delay hiding results to allow clicking on them
    setTimeout(() => setShowSearchResults(false), 150);
  };

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
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Search for anything"
          className="search"
          value={searchQuery}
          onChange={handleSearchChange}
          onBlur={handleSearchBlur}
          onFocus={() => searchQuery.length > 0 && setShowSearchResults(true)}
        />

        {showSearchResults && filteredCourses.length > 0 && (
          <div className="searchResults">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="searchResultItem"
                onClick={() => handleSearchResultClick(course)}
              >
                <img src={course.image} alt={course.title} className="searchResultImage" />
                <div className="searchResultDetails">
                  <h4 className="searchResultTitle">{course.title}</h4>
                  <p className="searchResultInstructor">{course.instructor}</p>
                  <div className="searchResultMeta">
                    <span className="searchResultRating">⭐ {course.rating}</span>
                    <span className="searchResultStudents">({course.students})</span>
                    <span className="searchResultPrice">₹{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

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