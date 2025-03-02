// app/events/page.tsx
import Link from "next/link";

export default function Events() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="section">
        <h1 className="section-title">Upcoming Events</h1>
        <p className="subtitle">
          Join our community events to learn, collaborate, and have fun with fellow AI enthusiasts!
        </p>
        
        <div className="card-grid">
          <div className="card">
            <div className="card-content">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <h3 className="card-title">Weekly discussion Session</h3>
                <span style={{ backgroundColor: "#f0f0f0", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.9rem" }}>
                  Every Thursday
                </span>
              </div>
              <p className="card-description">
                Join our weekly discussion sessions where we work on group projects, solve coding challenges, and help each other with technical problems.
              </p>
              <p style={{ marginTop: "1rem", color: "#666" }}>
                <strong>Time:</strong> 1:45 PM - 2:30 PM
              </p>
              <p style={{ color: "#666" }}>
                <strong>Location:</strong> Discord Voice Channel / NCIT Room No. 602 (Software Block)
              </p>
              <a href="https://discord.gg/VYMC4J36wu" className="cta-button" style={{ marginTop: "1rem", display: "inline-block" }}>
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="call-to-action">
        <h2 className="cta-title">Want to host an event?</h2>
        <p className="cta-description">
          Have knowledge to share or an idea for a workshop? We welcome community-led events!
        </p>
        <a href="" className="discord-button">
          <span className="discord-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.553.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.834 19.834 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
            </svg>
          </span>
          Propose an Event
        </a>
      </section>
    </div>
  );
}