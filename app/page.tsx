// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section 
  className="hero-section" 
  style={{ 
    backgroundImage: "url('/images/IMG_1039.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  }}
>
  {/* Add a dark overlay to ensure text readability */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)"
  }}></div>
  
  <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
    <h1 className="hero-title">WELCOME TO THE AI-CONIC CLUB</h1>
    <h2 className="hero-subtitle">
      We are <span className="highlight">AI Enthusiasts</span> from around the world who code together
    </h2>
    <Link href="/join" className="cta-button">
      JOIN OUR COMMUNITY
    </Link>
    <p style={{ marginTop: '20px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
      AI-onic Members at Noskathon
    </p>
  </div>
</section>

<section className="section" style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
  <h2 className="section-title" style={{ 
    fontSize: "2.5rem", 
    textAlign: "center", 
    marginBottom: "1.5rem",
    fontWeight: "700"
  }}>
    Discover the <span style={{ color: '#ff6b6b' }}>joy of code</span>, together.
  </h2>
  
  <p className="subtitle" style={{ 
    fontSize: "1.2rem", 
    textAlign: "center", 
    maxWidth: "800px", 
    margin: "0 auto 3rem", 
    lineHeight: "1.6",
    color: "#555"
  }}>
    Every week, The AI-Conic members gather online and in-person to make things with
    code. Whether you're a beginner programmer or have years of experience, there's a
    place for you at AI-Conic.
  </p>

  <div className="features" style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
    gap: "2rem" 
  }}>
    <div className="feature-card" style={{ 
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
      overflow: "hidden"
    }}>
      <div className="feature-number" style={{ 
        position: "absolute",
        top: "1rem",
        right: "1rem",
        backgroundColor: "#ff6b6b",
        color: "white",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.2rem"
      }}>1</div>
      <h3 className="feature-title" style={{ 
        fontSize: "1.5rem", 
        marginBottom: "1rem",
        position: "relative",
        paddingBottom: "0.5rem"
      }}>Connect with other teenage coders</h3>
      <p className="feature-description" style={{ lineHeight: "1.6", color: "#666" }}>
        Have a coding question? Looking for project feedback? You'll find hundreds of fabulous
        people to talk to in our global <Link href="/discord" style={{ color: '#ff6b6b', textDecoration: 'underline', fontWeight: "500" }}>Discord</Link>, active
        at all hours.
      </p>
    </div>
    
    <div className="feature-card" style={{ 
      backgroundColor: "#f8f9fa",
      borderRadius: "12px",
      padding: "2rem",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
      overflow: "hidden"
    }}>
      <div className="feature-number" style={{ 
        position: "absolute",
        top: "1rem",
        right: "1rem",
        backgroundColor: "#ff6b6b",
        color: "white",
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.2rem"
      }}>2</div>
      <h3 className="feature-title" style={{ 
        fontSize: "1.5rem", 
        marginBottom: "1rem",
        position: "relative",
        paddingBottom: "0.5rem"
      }}>Build open source learning tools</h3>
      <p className="feature-description" style={{ lineHeight: "1.6", color: "#666" }}>
        We build large open source projects together
        (<Link href="https://github.com/ai-conic-club" style={{ color: '#ff6b6b', textDecoration: 'underline', fontWeight: "500" }}>Github</Link>) like this website, a game engine,
        daily streak system, and more using AI.
      </p>
    </div>
  </div>
</section>

<section className="recap-section">
  <p className="recap-subtitle">WE'VE GOT A LOT GOING ON - LET'S RECAP</p>
  <h2 className="recap-title">
    Find your second home at <br />
    <span className="club-name">The AI-Conic Club</span>
  </h2>

  <div className="action-cards">
    {/* Discord Card */}
    <Link href="https://discord.gg/VYMC4J36wu">
      <div className="action-card discord">
        <div className="action-icon">
          {/* Ensure visibility with currentColor */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.553.074.074..." />
          </svg>
        </div>
        <h3 className="action-title">Join Our Discord</h3>
        <p className="action-description">
          Connect with other AI enthusiasts on Discord and hack on things together.
        </p>
      </div>
    </Link>

    {/* GitHub Card */}
    <Link href="https://github.com/Aiconic-club">
      <div className="action-card github">
        <div className="action-icon">
          {/* Same fix applied to GitHub icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205..." />
          </svg>
        </div>
        <h3 className="action-title">Explore Our Open Source Tools</h3>
        <p className="action-description">
          We're currently building a game engine, daily streak system, graphing game, and more!
        </p>
      </div>
    </Link>
  </div>
</section>



      <section className="community-section">
        <div className="community-content">
          <h2 className="community-title">Our Online Community</h2>
          <p className="community-description">
            Coding doesn't have to be a solitary activity. At The AI-Conic Club, we make remarkable things together, and in our
            Discord you'll find awesome people to hang out with too. Code together, find your programming community, dream up
            something wild, or just #lounge.
          </p>
          <a href="https://discord.gg/VYMC4J36wu" className="discord-button">
            <span className="discord-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.553.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.834 19.834 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
              </svg>
            </span>
            Join our Discord
          </a>
        </div>
      </section>
    </>
  );
}