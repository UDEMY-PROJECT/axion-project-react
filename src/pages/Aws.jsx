import { useRef, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Aws = () => {
  const scrollRef1 = useRef();
  const scrollRef2 = useRef();
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Filter states
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [showMoreLanguages, setShowMoreLanguages] = useState(false);
  const [showMoreLevels, setShowMoreLevels] = useState(false);
  const [showMorePrices, setShowMorePrices] = useState(false);

  const toggleLanguage = (lang) => {
    setSelectedLanguages(prev => 
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  const toggleLevel = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const togglePrice = (price) => {
    setSelectedPrices(prev => 
      prev.includes(price) ? prev.filter(p => p !== price) : [...prev, price]
    );
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // Filter courses based on selected filters
  const filteredCourses = awsCourses.filter(course => {
    if (selectedRating !== "all" && course.rating < parseInt(selectedRating)) return false;
    if (selectedLanguages.length > 0 && !selectedLanguages.includes(course.language)) return false;
    if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) return false;
    
    if (selectedPrices.length > 0) {
      const priceMatch = selectedPrices.some(price => {
        if (price === "free" && course.price === 0) return true;
        if (price === "paid" && course.price > 0) return true;
        if (price === "under-500" && course.price > 0 && course.price < 500) return true;
        if (price === "500-1000" && course.price >= 500 && course.price <= 1000) return true;
        if (price === "over-1000" && course.price > 1000) return true;
        return false;
      });
      if (!priceMatch) return false;
    }
    return true;
  });

  return (
    <div style={styles.wrapper}>

      {/* 🔥 HEADER SECTION */}
      <div style={styles.header}>
        <p style={styles.breadcrumb}>
          Certification Preparation &gt; AWS Certifications
        </p>

        <h1 style={styles.mainTitle}>
          Amazon Web Services (AWS) Certifications Courses
        </h1>

        <p style={styles.meta}>
          👤 11,389,177 learners • Prepare for your certification with these courses.
        </p>

        <p style={styles.desc}>
          Amazon Web Services (AWS) training and certification certifies professionals
          in various AWS cloud products and solutions, ranging from cloud practitioner
          to machine learning specialist.
        </p>
      </div>

      {/* 🔹 SECTION 1 */}
      <h2 style={styles.heading}>In Demand Certifications</h2>
      <p style={styles.sub}>
        Dive into Top Certifications that learners are preparing for
      </p>

      <div style={styles.rowWrapper}>
        <div style={styles.row} ref={scrollRef1}>
          {certifications.map((item, i) => (
            <div key={i} style={styles.card}>
              <div>
                <h4 style={styles.title}>{item.title}</h4>
                <p style={styles.learners}>👤 {item.learners} learners</p>
              </div>

              <img src={item.image} style={styles.badge} />
            </div>
          ))}
        </div>

        <button style={styles.arrow} onClick={() => scrollRight(scrollRef1)}>
          →
        </button>
      </div>

      {/* 🔹 SECTION 2 */}
      <h2 style={styles.heading}>
        Browse Amazon Web Services (AWS) Certifications by Skill
      </h2>

      <p style={styles.sub}>
        Get Certified for in-demand skills through our catalog
      </p>

      <div style={styles.rowWrapper}>
        <div style={styles.row} ref={scrollRef2}>
          {skills.map((item, i) => (
            <div key={i} style={styles.cardColumn}>
              <h4 style={styles.title}>{item.title}</h4>

              <p style={styles.learners}>👤 {item.learners} learners</p>

              <p style={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <button style={styles.arrow} onClick={() => scrollRight(scrollRef2)}>
          →
        </button>
      </div>

      {/* 🆕 NEW SECTIONS - FILTERS AND COURSES */}
      <div style={styles.mainContainer}>
        {/* LEFT SIDE - FILTERS */}
        <div style={styles.filtersSection}>
          <h3 style={styles.filterTitle}>Filters</h3>

          {/* Rating Filter */}
          <div style={styles.filterGroup}>
            <h4 style={styles.filterHeading}>Ratings</h4>
            <div style={styles.filterOptions}>
              <label style={styles.filterOption}>
                <input 
                  type="radio" 
                  name="rating" 
                  value="all"
                  checked={selectedRating === "all"}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  style={styles.radioInput}
                />
                <span style={styles.ratingLabel}>
                  ⭐⭐⭐⭐⭐ 4.5 & up <span style={styles.filterCount}>(10,000)</span>
                </span>
              </label>
              <label style={styles.filterOption}>
                <input 
                  type="radio" 
                  name="rating" 
                  value="4"
                  checked={selectedRating === "4"}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  style={styles.radioInput}
                />
                <span style={styles.ratingLabel}>
                  ⭐⭐⭐⭐ 4.0 & up <span style={styles.filterCount}>(10,000)</span>
                </span>
              </label>
              <label style={styles.filterOption}>
                <input 
                  type="radio" 
                  name="rating" 
                  value="3"
                  checked={selectedRating === "3"}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  style={styles.radioInput}
                />
                <span style={styles.ratingLabel}>
                  ⭐⭐⭐ 3.5 & up <span style={styles.filterCount}>(10,000)</span>
                </span>
              </label>
              <label style={styles.filterOption}>
                <input 
                  type="radio" 
                  name="rating" 
                  value="2"
                  checked={selectedRating === "2"}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  style={styles.radioInput}
                />
                <span style={styles.ratingLabel}>
                  ⭐⭐ 3.0 & up <span style={styles.filterCount}>(10,000)</span>
                </span>
              </label>
            </div>
          </div>

          {/* Language Filter */}
          <div style={styles.filterGroup}>
            <h4 style={styles.filterHeading}>Language</h4>
            <div style={styles.filterOptions}>
              {["English", "Spanish", "French"].map(lang => (
                <label key={lang} style={styles.filterOption}>
                  <input 
                    type="checkbox" 
                    checked={selectedLanguages.includes(lang)}
                    onChange={() => toggleLanguage(lang)}
                    style={styles.checkboxInput}
                  />
                  <span style={styles.filterLabel}>{lang} <span style={styles.filterCount}>(10,000)</span></span>
                </label>
              ))}
              {showMoreLanguages && (
                <label style={styles.filterOption}>
                  <input 
                    type="checkbox" 
                    checked={selectedLanguages.includes("German")}
                    onChange={() => toggleLanguage("German")}
                    style={styles.checkboxInput}
                  />
                  <span style={styles.filterLabel}>German <span style={styles.filterCount}>(105)</span></span>
                </label>
              )}
            </div>
            <button 
              style={styles.showMoreBtn}
              onClick={() => setShowMoreLanguages(!showMoreLanguages)}
            >
              {showMoreLanguages ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Level Filter */}
          <div style={styles.filterGroup}>
            <h4 style={styles.filterHeading}>Level</h4>
            <div style={styles.filterOptions}>
              {["Beginner", "Intermediate", "Advanced"].map(level => (
                <label key={level} style={styles.filterOption}>
                  <input 
                    type="checkbox" 
                    checked={selectedLevels.includes(level)}
                    onChange={() => toggleLevel(level)}
                    style={styles.checkboxInput}
                  />
                  <span style={styles.filterLabel}>{level} <span style={styles.filterCount}>(5,000)</span></span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div style={styles.filterGroup}>
            <h4 style={styles.filterHeading}>Price</h4>
            <div style={styles.filterOptions}>
              {["free", "paid", "under-500", "500-1000", "over-1000"].map(price => {
                const priceLabels = {
                  "free": "Free",
                  "paid": "Paid",
                  "under-500": "Under ₹500",
                  "500-1000": "₹500 - ₹1000",
                  "over-1000": "Over ₹1000"
                };
                return (
                  <label key={price} style={styles.filterOption}>
                    <input 
                      type="checkbox" 
                      checked={selectedPrices.includes(price)}
                      onChange={() => togglePrice(price)}
                      style={styles.checkboxInput}
                    />
                    <span style={styles.filterLabel}>{priceLabels[price]} <span style={styles.filterCount}>(3,000)</span></span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - COURSE CARDS */}
        <div style={styles.coursesSection}>
          <h3 style={styles.coursesTitle}>AWS Certification Courses ({filteredCourses.length})</h3>
          <div style={styles.coursesList}>
            {filteredCourses.map((course) => {
              const isInCart = cart.some((item) => item.id === course.id);
              return (
              <div 
                key={course.id} 
                style={{
                  ...styles.courseCard,
                  boxShadow: hoveredCardId === course.id ? "0 8px 16px rgba(0,0,0,0.15)" : "none",
                }}
                onMouseEnter={() => setHoveredCardId(course.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <div style={styles.imageContainer}>
                  <img src={course.image} style={styles.courseImage} alt={course.title} />
                  {hoveredCardId === course.id && (
                    <button
                      style={styles.addToCartOverlay}
                      onClick={() => isInCart ? removeFromCart(course.id) : addToCart(course)}
                    >
                      {isInCart ? "Remove from Cart" : "Add to Cart"}
                    </button>
                  )}
                </div>
                <div style={styles.courseContent}>
                  <h4 style={styles.courseTitle}>{course.title}</h4>
                  <p style={styles.courseDescription}>{course.description}</p>
                  <p style={styles.courseInstructor}>{course.instructor}</p>
                  <div style={styles.courseRatingSection}>
                    <span style={styles.courseRating}>⭐ {course.rating}</span>
                    <span style={styles.reviewCount}>({course.reviews.toLocaleString()})</span>
                  </div>
                  <p style={styles.courseDuration}>
                    {course.duration} total hours • {course.lectures} lectures • {course.level}
                  </p>
                  <div style={styles.courseFooter}>
                    <div>
                      <span style={styles.coursePrice}>₹{course.price}</span>
                      {course.originalPrice > course.price && (
                        <span style={styles.originalPrice}>₹{course.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Aws;

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    learners: "3,931,313",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    learners: "2,585,261",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "AWS Certified Developer – Associate",
    learners: "1,381,063",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
  },
  {
    title: "AWS Certified Solutions Architect – Professional",
    learners: "599,953",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
];

const skills = [
  {
    title: "Cloud Certification",
    learners: "18,621,113",
    desc: "Gain a solid foundation in cloud concepts, architecture, and services.",
  },
  {
    title: "Cybersecurity Certification",
    learners: "6,598,564",
    desc: "Prove your cybersecurity expertise with real-world skills.",
  },
  {
    title: "Networking Certification",
    learners: "5,963,131",
    desc: "Design and manage network systems with AWS tools.",
  },
  {
    title: "Coding Certification",
    learners: "2,444,298",
    desc: "Validate programming skills in Python, Java, and more.",
  },
];

const awsCourses = [
  {
    id: 1,
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2026",
    description: "Full Practice Exam included + explanations | Learn Cloud Computing | Pass the AWS Cloud Practitioner CLF-C02 exam!",
    instructor: "Stephane Maarek | AWS Certified Cloud Practitioner, Solutions Architect, Developer",
    rating: 4.7,
    reviews: 286116,
    language: "English",
    price: 539,
    originalPrice: 3469,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=320&h=180&fit=crop",
    duration: 14.5,
    lectures: 282,
    level: "Beginner",
  },
  {
    id: 2,
    title: "[NEW] Ultimate AWS Certified AI Practitioner AIF-C01",
    description: "Practice Exam included + explanations | Learn Artificial Intelligence | Pass the AWS AI Practitioner AIF-C01 exam!",
    instructor: "Stephane Maarek | AWS Certified Cloud Practitioner, Solutions Architect, Developer",
    rating: 4.7,
    reviews: 42961,
    language: "English",
    price: 479,
    originalPrice: 1629,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop",
    duration: 10.5,
    lectures: 150,
    level: "Beginner",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect - Associate",
    description: "Learn to design distributed systems on AWS. Master EC2, S3, RDS, and more with hands-on labs.",
    instructor: "Stephane Maarek | AWS Solutions Architect",
    rating: 4.8,
    reviews: 198234,
    language: "English",
    price: 599,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=320&h=180&fit=crop",
    duration: 28.5,
    lectures: 395,
    level: "Intermediate",
  },
  {
    id: 4,
    title: "AWS Certified Developer - Associate",
    description: "Develop and maintain applications on AWS. Learn SDK, CLI, and deployment best practices.",
    instructor: "Stephane Maarek | AWS Developer",
    rating: 4.6,
    reviews: 156789,
    language: "English",
    price: 499,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=320&h=180&fit=crop",
    duration: 26.0,
    lectures: 380,
    level: "Intermediate",
  },
  {
    id: 5,
    title: "AWS Certified DevOps Engineer - Professional",
    description: "Master CI/CD pipelines, infrastructure as code, and monitoring on AWS platform.",
    instructor: "Stephane Maarek | AWS DevOps Specialist",
    rating: 4.7,
    reviews: 98765,
    language: "English",
    price: 699,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=320&h=180&fit=crop",
    duration: 32.0,
    lectures: 450,
    level: "Advanced",
  },
  {
    id: 6,
    title: "AWS Certified Security - Specialty",
    description: "Specialized security skills for AWS cloud. Learn encryption, compliance, and threat detection.",
    instructor: "Stephane Maarek | AWS Security Expert",
    rating: 4.5,
    reviews: 87654,
    language: "English",
    price: 579,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=320&h=180&fit=crop",
    duration: 24.0,
    lectures: 340,
    level: "Advanced",
  },
  {
    id: 7,
    title: "AWS Certified Machine Learning - Specialty",
    description: "Build, train, and deploy ML models using AWS services like SageMaker and DeepLens.",
    instructor: "Stephane Maarek | ML Expert",
    rating: 4.4,
    reviews: 65432,
    language: "English",
    price: 699,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=320&h=180&fit=crop",
    duration: 30.0,
    lectures: 420,
    level: "Advanced",
  },
  {
    id: 8,
    title: "AWS Certified Data Analytics - Specialty",
    description: "Master data analytics on AWS with services like Redshift, EMR, and Kinesis.",
    instructor: "Stephane Maarek | Data Analytics Specialist",
    rating: 4.6,
    reviews: 54321,
    language: "English",
    price: 599,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&h=180&fit=crop",
    duration: 25.0,
    lectures: 360,
    level: "Intermediate",
  },
  {
    id: 9,
    title: "AWS Certified Database - Specialty",
    description: "Design and maintain database solutions using AWS database services.",
    instructor: "Stephane Maarek | Database Expert",
    rating: 4.5,
    reviews: 43210,
    language: "English",
    price: 549,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=320&h=180&fit=crop",
    duration: 22.0,
    lectures: 320,
    level: "Intermediate",
  },
  {
    id: 10,
    title: "AWS Certified SysOps Administrator - Associate",
    description: "Deploy, manage, and operate systems on AWS. Learn monitoring and automation.",
    instructor: "Stephane Maarek | SysOps Administrator",
    rating: 4.4,
    reviews: 32109,
    language: "English",
    price: 479,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 20.0,
    lectures: 280,
    level: "Beginner",
  },
  {
    id: 11,
    title: "AWS Lambda Serverless Computing",
    description: "Build serverless applications with AWS Lambda, API Gateway, and DynamoDB.",
    instructor: "Stephane Maarek | Serverless Architect",
    rating: 4.7,
    reviews: 87654,
    language: "English",
    price: 399,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 18.5,
    lectures: 260,
    level: "Intermediate",
  },
  {
    id: 12,
    title: "AWS EC2 Master Class",
    description: "Complete guide to Amazon EC2 instances, load balancing, and auto-scaling.",
    instructor: "Stephane Maarek | EC2 Expert",
    rating: 4.6,
    reviews: 76543,
    language: "English",
    price: 349,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 16.0,
    lectures: 220,
    level: "Intermediate",
  },
  {
    id: 13,
    title: "AWS S3 and Cloud Storage Solutions",
    description: "Master Amazon S3, Glacier, and other AWS storage services for any use case.",
    instructor: "Stephane Maarek | Storage Expert",
    rating: 4.5,
    reviews: 65432,
    language: "English",
    price: 299,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=320&h=180&fit=crop",
    duration: 14.0,
    lectures: 190,
    level: "Beginner",
  },
  {
    id: 14,
    title: "AWS Networking Essentials",
    description: "Learn VPC, subnets, security groups, and routing in AWS cloud networking.",
    instructor: "Stephane Maarek | Network Specialist",
    rating: 4.3,
    reviews: 54321,
    language: "English",
    price: 349,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 15.5,
    lectures: 210,
    level: "Beginner",
  },
  {
    id: 15,
    title: "AWS Fundamentals for Beginners",
    description: "Start your AWS journey with this free introductory course covering basic concepts.",
    instructor: "Stephane Maarek | AWS Trainer",
    rating: 4.2,
    reviews: 43210,
    language: "English",
    price: 0,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=320&h=180&fit=crop",
    duration: 12.0,
    lectures: 160,
    level: "Beginner",
  },
  {
    id: 16,
    title: "AWS Advanced Networking - Specialty",
    description: "Design and implement AWS and hybrid IT network architectures at scale.",
    instructor: "Stephane Maarek | Network Architect",
    rating: 4.4,
    reviews: 32109,
    language: "English",
    price: 599,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 27.0,
    lectures: 375,
    level: "Advanced",
  },
  {
    id: 17,
    title: "AWS Migration Accelerator Program",
    description: "Learn enterprise-scale cloud migration strategies and tools on AWS.",
    instructor: "Stephane Maarek | Migration Expert",
    rating: 4.5,
    reviews: 21987,
    language: "English",
    price: 649,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 24.0,
    lectures: 330,
    level: "Advanced",
  },
  {
    id: 18,
    title: "AWS Container Services - ECS & EKS",
    description: "Master containerization with Docker, ECS, and Kubernetes on AWS EKS.",
    instructor: "Stephane Maarek | Container Specialist",
    rating: 4.6,
    reviews: 19876,
    language: "English",
    price: 549,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=320&h=180&fit=crop",
    duration: 23.0,
    lectures: 310,
    level: "Advanced",
  },
];

const styles = {
  wrapper: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "0 20px",
  },

  header: {
    marginBottom: "30px",
  },

  breadcrumb: {
    color: "#a435f0",
    fontSize: "14px",
    marginBottom: "10px",
  },

  mainTitle: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  meta: {
    color: "#6b7280",
    marginBottom: "10px",
  },

  desc: {
    color: "#374151",
    maxWidth: "800px",
    lineHeight: "1.6",
  },

  heading: {
    fontSize: "24px",
    fontWeight: "700",
    marginTop: "30px",
  },

  sub: {
    color: "#6b7280",
    marginBottom: "20px",
  },

  rowWrapper: {
    position: "relative",
  },

  row: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollbarWidth: "none",
  },

  card: {
    minWidth: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
  },

  cardColumn: {
    minWidth: "300px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    background: "white",
  },

  title: {
    fontSize: "15px",
    fontWeight: "600",
    marginBottom: "6px",
  },

  learners: {
    fontSize: "13px",
    color: "#6b7280",
  },

  badge: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
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

  // New styles for filters and courses
  mainContainer: {
    display: "flex",
    gap: "30px",
    marginTop: "50px",
  },

  filtersSection: {
    flex: "0 0 250px",
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    height: "fit-content",
    position: "sticky",
    top: "20px",
  },

  filterTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#1f2937",
  },

  filterGroup: {
    marginBottom: "20px",
  },

  filterHeading: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#374151",
  },

  filterSelect: {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontSize: "14px",
    background: "white",
  },

  filterOptions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "8px",
  },

  filterOption: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },

  radioInput: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    margin: 0,
  },

  checkboxInput: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    margin: 0,
  },

  filterLabel: {
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
  },

  ratingLabel: {
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },

  filterCount: {
    color: "#6b7280",
    fontSize: "13px",
  },

  showMoreBtn: {
    background: "none",
    border: "none",
    color: "#7c3aed",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    padding: "4px 0",
    marginTop: "4px",
  },

  coursesSection: {
    flex: 1,
  },

  coursesTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#1f2937",
  },

  coursesList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  courseCard: {
    background: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "4px",
    overflow: "hidden",
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    gap: "16px",
    padding: "12px",
  },

  imageContainer: {
    position: "relative",
    width: "240px",
    height: "135px",
    flexShrink: 0,
    borderRadius: "4px",
    overflow: "hidden",
  },

  courseImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "4px",
  },

  addToCartOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    border: "none",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s ease",
  },

  courseContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },

  courseTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#1f2937",
    lineHeight: "1.3",
  },

  courseDescription: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px",
    lineHeight: "1.4",
  },

  courseInstructor: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "6px",
  },

  courseRatingSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },

  courseRating: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
  },

  reviewCount: {
    fontSize: "13px",
    color: "#6b7280",
  },

  courseDuration: {
    fontSize: "13px",
    color: "#6b7280",
    marginBottom: "8px",
  },

  courseFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },

  coursePrice: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#1f2937",
  },

  originalPrice: {
    fontSize: "14px",
    color: "#9ca3af",
    textDecoration: "line-through",
    marginLeft: "8px",
  },
};