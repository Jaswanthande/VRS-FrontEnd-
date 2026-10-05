
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">

      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            ✦ YOUR JOURNEY STARTS HERE
          </span>

          <h1>
            Drive Your
            <br />
            <span>Next Adventure.</span>
          </h1>

          <p className="hero-description">
            Discover the freedom of the open road.
            From powerful motorcycles to luxury cars,
            your perfect ride is just a click away.
          </p>

          <div className="hero-buttons">
            <Link to="/vehicles" className="home-btn">
              Explore Vehicles <span>→</span>
            </Link>

            <Link to="/vehicles/add" className="secondary-btn">
              + Add Vehicle
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>50<span>+</span></h3>
              <p>Vehicles</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <h3>24<span>/7</span></h3>
              <p>Support</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <h3>100<span>%</span></h3>
              <p>Adventure</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow"></div>

          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=85"
            alt="Motorcycle on an open road"
          />

          <div className="hero-image-overlay"></div>

          <div className="floating-card">
            <div className="floating-icon">🏍️</div>
            <div>
              <h4>Ride Your Way</h4>
              <p>Every road has a story.</p>
            </div>
            <span className="floating-arrow">↗</span>
          </div>

          <div className="hero-badge">
            <span className="pulse-dot"></span>
            YOUR NEXT RIDE AWAITS
          </div>
        </div>
      </section>

      {/* SECTION 2: EXPLORE */}
      <section className="explore-section">

        <div className="section-top">
          <div>
            <span className="section-tag">
              FIND YOUR PERFECT MATCH
            </span>

            <h2>
              Choose Your <span>Ride.</span>
            </h2>

            <p>
              Every journey deserves the right vehicle.
              Find yours below.
            </p>
          </div>

          <Link to="/vehicles" className="view-all-btn">
            View All Vehicles <span>↗</span>
          </Link>
        </div>

        <div className="vehicle-types">

          {/* BIKE CARD */}
          <div className="type-card">
            <div className="type-image">
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=85"
                alt="Adventure motorcycle"
              />

              <span className="type-number">01</span>
              <span className="type-label">FOR THE ADVENTUROUS</span>
            </div>

            <div className="type-content">
              <div className="type-title">
                <div>
                  <h3>Powerful Bikes</h3>
                  <p>Feel the freedom of the open road.</p>
                </div>
                <span className="type-emoji">🏍️</span>
              </div>

              <Link to="/vehicles" className="card-link">
                Explore Bikes <span>→</span>
              </Link>
            </div>
          </div>

          {/* CAR CARD */}
          <div className="type-card">
            <div className="type-image">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85"
                alt="Modern luxury car"
              />

              <span className="type-number">02</span>
              <span className="type-label">COMFORT MEETS STYLE</span>
            </div>

            <div className="type-content">
              <div className="type-title">
                <div>
                  <h3>Comfortable Cars</h3>
                  <p>Make every road trip unforgettable.</p>
                </div>
                <span className="type-emoji">🚘</span>
              </div>

              <Link to="/vehicles" className="card-link">
                Explore Cars <span>→</span>
              </Link>
            </div>
          </div>

          {/* PREMIUM CARD */}
          <div className="type-card">
            <div className="type-image">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
                alt="Premium sports car"
              />

              <span className="type-number">03</span>
              <span className="type-label">EXPERIENCE THE EXTRAORDINARY</span>
            </div>

            <div className="type-content">
              <div className="type-title">
                <div>
                  <h3>Premium Rides</h3>
                  <p>Make an entrance wherever you go.</p>
                </div>
                <span className="type-emoji">✨</span>
              </div>

              <Link to="/vehicles" className="card-link">
                Explore Premium <span>→</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: WHY CHOOSE US */}
      <section className="why-section">

        <div className="why-left">
          <span className="section-tag">
            THE ROAD IS YOURS
          </span>

          <h2>
            More Than a Ride.
            <br />
            <span>It's Your Story.</span>
          </h2>

          <p>
            Your next adventure starts with the right vehicle.
            Explore your options, compare details, and find
            the ride that fits your plans.
          </p>

          <Link to="/vehicles" className="home-btn">
            Find Your Ride <span>→</span>
          </Link>

          <div className="why-decoration">
            <span>DRIVE</span>
            <span className="decoration-dot">✦</span>
            <span>EXPLORE</span>
            <span className="decoration-dot">✦</span>
            <span>DISCOVER</span>
          </div>
        </div>

        <div className="features">

          <div className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">🚘</span>
              <span className="feature-number">01</span>
            </div>
            <h3>Wide Selection</h3>
            <p>
              From everyday rides to premium vehicles,
              discover options for every occasion.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">⚡</span>
              <span className="feature-number">02</span>
            </div>
            <h3>Easy to Explore</h3>
            <p>
              Browse vehicles and discover their
              features with a simple experience.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">🛡️</span>
              <span className="feature-number">03</span>
            </div>
            <h3>Explore with Confidence</h3>
            <p>
              Review vehicle information and details
              before choosing your next ride.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">💎</span>
              <span className="feature-number">04</span>
            </div>
            <h3>Clear Vehicle Details</h3>
            <p>
              Check prices, ratings, and specifications
              to compare your options.
            </p>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bottom-cta">
        <div>
          <span>READY FOR THE ROAD?</span>
          <h2>Your next adventure starts here.</h2>
        </div>

        <Link to="/vehicles" className="cta-button">
          Explore the Collection <span>→</span>
        </Link>
      </section>

    </main>
  );
}

export default Home;