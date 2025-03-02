// app/community/page.tsx
import Link from "next/link";

export default function Community() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <section className="section">
        <h1 className="section-title">Join Our Community</h1>
        <p className="subtitle">
          Connect with other AI enthusiasts, share your projects, and collaborate on exciting ideas.
        </p>
        
        <div className="card-grid">
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Discord Community</h3>
              <p className="card-description">
                Join our active Discord server where members share knowledge, get help with coding problems, and collaborate on projects.
              </p>
              <Link href="https://discord.gg/VYMC4J36wu" className="cta-button" style={{ marginTop: "1rem", display: "inline-block" }}>
                Join Discord
              </Link>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Weekly Meetups</h3>
              <p className="card-description">
                Participate in our weekly online meetups where we discuss the latest in AI technology, work on group projects, and learn from each other.
              </p>
              <Link href="/events" className="cta-button" style={{ marginTop: "1rem", display: "inline-block" }}>
                View Schedule
              </Link>
            </div>
          </div>
          
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Hackathons</h3>
              <p className="card-description">
                Join our seasonal hackathons where members form teams to build innovative AI projects in a fun, collaborative environment.
              </p>
              <Link href="/events" className="cta-button" style={{ marginTop: "1rem", display: "inline-block" }}>
                Upcoming Hackathons
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="community-section">
        <div className="community-content">
          <h2 className="community-title">Community Guidelines</h2>
          <p className="community-description">
            Our community is built on respect, collaboration, and a shared love for AI and coding. We expect all members to:
          </p>
          <ul style={{ marginBottom: "2rem", listStylePosition: "inside" }}>
            <li>Be respectful and inclusive to all members</li>
            <li>Share knowledge freely and help others learn</li>
            <li>Give credit for others' work and ideas</li>
            <li>Keep discussions relevant to AI, coding, and related topics</li>
            <li>Have fun and build amazing things together!</li>
          </ul>
          <Link href="/join" className="cta-button">
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}