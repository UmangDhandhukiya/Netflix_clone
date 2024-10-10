
const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container position-relative z-index-1">
        <h1 className="display-6 fw-bold">Unlimited movies, TV </h1>
        <h1 className="display-6 fw-bold">shows, and more</h1>
        <p className="lead mt-2"> Starts at ₹149. Cancel at any time.</p>
        <button className="button btn-lg mt-4 fw-bold" style={{width:"210px",height:"52px",fontSize:"20px"}}>Finish Sign-Up &gt;</button>
      </div>
    </div>
  );
};

export default HeroSection;
