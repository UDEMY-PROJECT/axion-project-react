import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navData } from "../data/navData";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [showBusiness, setShowBusiness] = useState(false);
  const { user, setUser } = useContext(AppContext);
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
    <div style={styles.navbar}>

      {/* LEFT */}
      <div style={styles.left}>
        <h2 style={styles.logo}>Axion</h2>

        {/* FIND COURSES */}
        <div
          style={styles.dropdownWrapper}
          onMouseEnter={() => {
            setActiveDropdown("Find Courses");
            setActiveCategory(navData["Find Courses"][0]);
          }}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <p style={styles.link}>Find Courses</p>

          {activeDropdown === "Find Courses" && (
            <div style={styles.dropdown}>

              {/* LEFT SIDE */}
              <div style={styles.dropdownLeft}>
                {navData["Find Courses"].map((cat) => (
                  <p
                    key={cat.title}
                    style={{
                      ...styles.categoryItem,
                      ...(activeCategory?.title === cat.title
                        ? styles.activeItem
                        : {}),

                    }}
                    onMouseEnter={() => setActiveCategory(cat)}
                  >
                    {cat.title}
                  </p>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div style={styles.dropdownRight}>
                {activeCategory?.items.map((item, i) => (
                  <p
                    key={i}
                    style={styles.dropdownItem}
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
          style={styles.dropdownWrapper}
          onMouseEnter={() => {
            setActiveDropdown("Get Certified");
            setActiveCategory(navData["Get Certified"][0]);
          }}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <p style={styles.link}>Get Certified</p>

          {activeDropdown === "Get Certified" && (
            <div style={styles.dropdown}>

              {/* LEFT */}
              <div style={styles.dropdownLeft}>
                {navData["Get Certified"].map((cat) => (
                  <p
                    key={cat.title}
                    style={{
                      ...styles.dropdownItem,
                      ...(activeCategory?.title === cat.title
                        ? styles.activeItem
                        : {}),
                    }}
                    onMouseEnter={() => setActiveCategory(cat)}
                  >
                    {cat.title}
                  </p>
                ))}
              </div>

              {/* RIGHT */}
              <div style={styles.dropdownRight}>
                {activeCategory?.items.map((item, i) => (
                  <p
                    key={i}
                    style={styles.subItem}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </p>
                ))}
              </div>

            </div>
          )}
        </div>

        <p style={styles.link} onClick={() => navigate("/subscribe")}>Subscribe</p>
      </div>

      {/* CENTER */}
      <input
        type="text"
        placeholder="Search for anything"
        style={styles.search}
      />

      {/* RIGHT */}
      <div style={styles.right}>
        <div
          style={styles.dropdownWrapper}
          onMouseEnter={() => setShowBusiness(true)}
          onMouseLeave={() => setShowBusiness(false)}
        >
          <p style={styles.link}>Axion Business</p>

          {showBusiness && (
            <div style={styles.smallDropdown}>
              <p style={styles.smallItem} onClick={() => { navigate("/compare-plans"); setShowBusiness(false); }}>Compare Plans</p>
              <p style={styles.smallItem}>Try Axion Business</p>
            </div>
          )}
        </div>


        <p style={styles.link}>Teach on Axion</p>

<div
  style={styles.userWrapper}
  onMouseEnter={() => setShowUserMenu(true)}
  onMouseLeave={() => setShowUserMenu(false)}
>
  <div style={styles.userIcon}>👤</div>

  {showUserMenu && (
    <div style={styles.userDropdown}>
      
      {!user ? (
        <p 
          style={styles.dropdownItem}
          onClick={handleLogin}
        >
          Log in
        </p>
      ) : (
        <>
          <p style={styles.userName}>{user.name}</p>
          <p style={styles.userEmail}>{user.email}</p>

          <hr />

          <p 
            style={styles.dropdownItem}
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

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ddd",
    background: "white",
    position: "relative",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },

  link: {
    cursor: "pointer",
    fontSize: "14px",
  },

  search: {
    width: "400px",
    padding: "8px",
    borderRadius: "20px",
    border: "1px solid #ccc",
  },

  login: {
    background: "transparent",
    border: "1px solid black",
    padding: "6px 12px",
    cursor: "pointer",
  },

  signup: {
    background: "#a435f0",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
  },

  /* DROPDOWN */
  dropdownWrapper: {
    position: "relative",
  },

  dropdown: {
    position: "absolute",
    top: "30px",
    left: "0",
    display: "flex",
    background: "white",
    border: "1px solid #ddd",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    padding: "20px",
    gap: "60px",
    zIndex: 1000,
  },

  dropdownLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    minWidth: "200px",
  },

  dropdownRight: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    minWidth: "240px",
  },

  dropdownItem: {
    cursor: "pointer",
    fontSize: "14px",
    padding: "4px 0",
  },

  /* NEW */
  categoryItem: {
    fontWeight: "600",
    fontSize: "15px",
    color: "#1c1d1f",
  },

  subItem: {
    fontSize: "14px",
    color: "#6a6f73",
  },

  activeItem: {
    color: "#a435f0",
  },
  smallDropdown: {
  position: "absolute",
  top: "35px",
  right: "0",
  background: "white",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  minWidth: "200px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 1000,
  fontWeight: "700"
},

smallItem: {
  cursor: "pointer",
  fontSize: "14px",
  padding: "5px 0",
},
userWrapper: {
  position: "relative",
  cursor: "pointer",
},

userIcon: {
  fontSize: "20px",
},

userDropdown: {
  position: "absolute",
  top: "100%",
  right: "0",
  background: "white",
  border: "1px solid #ddd",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  padding: "15px",
  minWidth: "200px",
  marginTop: "0px",
  zIndex: 1000,
},

userName: {
  fontWeight: "600",
},

userEmail: {
  fontSize: "12px",
  color: "gray",
  marginBottom: "10px",
},
}