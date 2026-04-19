import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const scrollRef = useRef();
  const navigate = useNavigate();
  const { cart, removeFromCart } = useContext(CartContext);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div style={styles.wrapper}>

      {/* TITLE */}
      <h1 style={styles.title}>Shopping Cart</h1>

      {/* CART ITEMS */}
      {cart.length > 0 ? (
        <div style={styles.cartItems}>
          <h2 style={styles.cartCountTitle}>{cart.length} Course{cart.length > 1 ? "s" : ""} in Cart</h2>
          <div style={styles.cartItemsContainer}>
            {cart.map((course) => (
              <div key={course.id} style={styles.cartItem}>
                <img src={course.image} style={styles.cartItemImage} alt={course.title} />
                <div style={styles.cartItemDetails}>
                  <h3 style={styles.cartItemTitle}>{course.title}</h3>
                  <p style={styles.cartItemInstructor}>By {course.instructor}</p>
                  <div style={styles.cartItemMeta}>
                    <span style={styles.bestsellerBadge}>Bestseller</span>
                    <span style={styles.cartItemRating}>⭐ {course.rating}</span>
                    <span style={styles.cartItemReviews}>({course.students})</span>
                  </div>
                  <p style={styles.cartItemInfo}>
                    {course.duration} total hours • {course.lectures} lectures • All Levels
                  </p>
                </div>
                <div style={styles.cartItemActions}>
                  <div style={styles.cartItemPriceSection}>
                    <span style={styles.cartItemPrice}>₹{course.price}</span>
                    <span style={styles.cartItemOriginalPrice}>₹{course.originalPrice}</span>
                  </div>
                  <button
                    style={styles.removeBtn}
                    onClick={() => removeFromCart(course.id)}
                  >
                    Remove
                  </button>
                  <a href="#" style={styles.cartItemLink}>Save for Later</a>
                  <a href="#" style={styles.cartItemLink}>Move to Wishlist</a>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.cartTotal}>
            <h3>Total: ₹{cart.reduce((total, course) => total + course.price, 0)}</h3>
            <button
              style={styles.checkoutBtn}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* YOU MIGHT ALSO LIKE SECTION */}
          <h2 style={styles.subtitle}>You might also like</h2>
          <div style={styles.scrollWrapper}>
            <div style={styles.scroll} ref={scrollRef}>
              {courses.slice(0, 6).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <button style={styles.arrow} onClick={scrollRight}>
              →
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* EMPTY TEXT */}
          <p style={styles.empty}>
            <b>Your cart is empty</b> — let's change that. Time to learn some new skills!
          </p>

          {/* SUBTITLE */}
          <h2 style={styles.subtitle}>Learners are viewing</h2>

          {/* SCROLL */}
          <div style={styles.scrollWrapper}>

            <div style={styles.scroll} ref={scrollRef}>
              {courses.slice(0, 6).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            <button style={styles.arrow} onClick={scrollRight}>
              →
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default Cart;

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
  },

  empty: {
    color: "#6b7280",
    marginBottom: "40px",
    fontSize: "16px",
  },

  subtitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  scrollWrapper: {
    position: "relative",
  },

  scroll: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
  },

  arrow: {
    position: "absolute",
    right: "-10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "white",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },

  cartItems: {
    marginBottom: "40px",
  },

  cartCountTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#1f2937",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "16px",
  },

  cartItemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "30px",
  },

  cartItem: {
    display: "flex",
    gap: "20px",
    padding: "16px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    background: "white",
    alignItems: "flex-start",
  },

  cartItemImage: {
    width: "150px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "6px",
    flexShrink: 0,
  },

  cartItemDetails: {
    flex: 1,
  },

  cartItemTitle: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 8px 0",
    color: "#1f2937",
    lineHeight: "1.4",
  },

  cartItemInstructor: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 8px 0",
  },

  cartItemMeta: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
    flexWrap: "wrap",
  },

  bestsellerBadge: {
    background: "#eceb98",
    color: "#1f2937",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
  },

  cartItemRating: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#1f2937",
  },

  cartItemReviews: {
    fontSize: "13px",
    color: "#6b7280",
  },

  cartItemInfo: {
    fontSize: "13px",
    color: "#6b7280",
    margin: "0",
  },

  cartItemActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "8px",
    minWidth: "150px",
  },

  cartItemPriceSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "4px",
  },

  cartItemPrice: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1f2937",
  },

  cartItemOriginalPrice: {
    fontSize: "14px",
    color: "#9ca3af",
    textDecoration: "line-through",
  },

  removeBtn: {
    background: "#a435f0",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },

  cartItemLink: {
    color: "#a435f0",
    textDecoration: "none",
    fontSize: "13px",
    cursor: "pointer",
  },

  cartTotal: {
    textAlign: "right",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "20px",
  },

  checkoutBtn: {
    background: "#a435f0",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "15px",
    transition: "background 0.2s ease",
  },
};