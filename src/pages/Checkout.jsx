import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, course) => total + course.price, 0);
  const tax = Math.round(totalAmount * 0.18); // 18% GST
  const finalTotal = totalAmount + tax;

  const handlePayment = (method) => {
    // In a real app, this would integrate with payment gateway
    alert(`Payment of ₹${finalTotal} via ${method} processed successfully!`);
    // Clear the cart after successful payment
    clearCart();
    // Redirect to home page or success page
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Checkout</h1>

      <div style={styles.checkoutContainer}>
        {/* ORDER SUMMARY */}
        <div style={styles.orderSummary}>
          <h2 style={styles.sectionTitle}>Order Summary</h2>

          <div style={styles.orderItems}>
            {cart.map((course) => (
              <div key={course.id} style={styles.orderItem}>
                <img src={course.image} style={styles.orderItemImage} alt={course.title} />
                <div style={styles.orderItemDetails}>
                  <h4 style={styles.orderItemTitle}>{course.title}</h4>
                  <p style={styles.orderItemInstructor}>{course.instructor}</p>
                  <p style={styles.orderItemPrice}>₹{course.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.orderTotal}>
            <div style={styles.totalRow}>
              <span>Subtotal:</span>
              <span>₹{totalAmount}</span>
            </div>
            <div style={styles.totalRow}>
              <span>Tax (GST 18%):</span>
              <span>₹{tax}</span>
            </div>
            <div style={styles.totalRowFinal}>
              <span>Total:</span>
              <span>₹{finalTotal}</span>
            </div>
          </div>
        </div>

        {/* PAYMENT OPTIONS */}
        <div style={styles.paymentSection}>
          <h2 style={styles.sectionTitle}>Payment Method</h2>

          <div style={styles.paymentOptions}>
            <button
              style={styles.paymentBtn}
              onClick={() => handlePayment("Credit/Debit Card")}
            >
              💳 Credit/Debit Card
            </button>

            <button
              style={styles.paymentBtn}
              onClick={() => handlePayment("UPI")}
            >
              📱 UPI
            </button>

            <button
              style={styles.paymentBtn}
              onClick={() => handlePayment("Net Banking")}
            >
              🏦 Net Banking
            </button>

            <button
              style={styles.paymentBtn}
              onClick={() => handlePayment("PayPal")}
            >
              🌐 PayPal
            </button>
          </div>

          <div style={styles.actions}>
            <button
              style={styles.backBtn}
              onClick={() => navigate("/cart")}
            >
              ← Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },

  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
  },

  checkoutContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "40px",
    alignItems: "start",
  },

  orderSummary: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
  },

  sectionTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#1f2937",
  },

  orderItems: {
    marginBottom: "24px",
  },

  orderItem: {
    display: "flex",
    alignItems: "center",
    padding: "16px 0",
    borderBottom: "1px solid #f3f4f6",
  },

  orderItemImage: {
    width: "80px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "6px",
    marginRight: "16px",
  },

  orderItemDetails: {
    flex: 1,
  },

  orderItemTitle: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0 0 4px 0",
    color: "#1f2937",
  },

  orderItemInstructor: {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 4px 0",
  },

  orderItemPrice: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1f2937",
    margin: 0,
  },

  orderTotal: {
    borderTop: "2px solid #e5e7eb",
    paddingTop: "16px",
  },

  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "16px",
  },

  totalRowFinal: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
    fontSize: "20px",
    fontWeight: "700",
    color: "#1f2937",
  },

  paymentSection: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "24px",
    position: "sticky",
    top: "20px",
  },

  paymentOptions: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "24px",
  },

  paymentBtn: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "left",
  },

  actions: {
    marginTop: "24px",
  },

  backBtn: {
    background: "transparent",
    border: "1px solid #d1d5db",
    color: "#6b7280",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};