// app/community/page.tsx
import Link from "next/link";

export default function Community() {
  return (
    <div style={{ 
      paddingTop: "80px",
      background: "linear-gradient(to bottom, #f9f9ff 0%, #f0f0ff 100%)"
    }}>
      {/* Hero section with more prominent styling */}
      <section className="container" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "3rem 1rem",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "800",
          background: "linear-gradient(to right, #ec3750, #ff8c37)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "1.5rem"
        }}>Join Our Community</h1>
        
        <p style={{
          fontSize: "1.5rem",
          color: "#444",
          maxWidth: "600px",
          margin: "0 auto 3rem",
          lineHeight: 1.5
        }}>
          Connect with other AI enthusiasts, share your projects, and collaborate on exciting ideas.
        </p>
        
        {/* Card grid with Hack Club styling */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "3rem"
        }}>
          <div style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
            padding: "2rem",
            transition: "transform 0.2s ease-in-out",
            border: "1px solid rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem", color: "#ec3750" }}>
              Discord Community
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#555", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Join our active Discord server where members share knowledge, get help with coding problems, and collaborate on projects.
            </p>
            <Link href="/discord" style={{
              background: "#ec3750",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.2s ease, background 0.2s ease",
              border: "none",
              cursor: "pointer",
              ":hover": { transform: "translateY(-2px)", background: "#e02040" }
            }}>
              Join Discord
            </Link>
          </div>
          
          <div style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
            padding: "2rem",
            transition: "transform 0.2s ease-in-out",
            border: "1px solid rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem", color: "#33d6a6" }}>
              Weekly Meetups
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#555", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Participate in our weekly online meetups where we discuss the latest in AI technology, work on group projects, and learn from each other.
            </p>
            <Link href="/events" style={{
              background: "#33d6a6",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.2s ease, background 0.2s ease",
              border: "none",
              cursor: "pointer",
              ":hover": { transform: "translateY(-2px)", background: "#20c594" }
            }}>
              View Schedule
            </Link>
          </div>
          
          <div style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
            padding: "2rem",
            transition: "transform 0.2s ease-in-out",
            border: "1px solid rgba(0,0,0,0.05)"
          }}>
            <h3 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem", color: "#ff8c37" }}>
              Hackathons
            </h3>
            <p style={{ fontSize: "1.125rem", color: "#555", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              Join our seasonal hackathons where members form teams to build innovative AI projects in a fun, collaborative environment.
            </p>
            <Link href="/events" style={{
              background: "#ff8c37",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-block",
              transition: "transform 0.2s ease, background 0.2s ease",
              border: "none",
              cursor: "pointer",
              ":hover": { transform: "translateY(-2px)", background: "#e67425" }
            }}>
              Upcoming Hackathons
            </Link>
          </div>
        </div>
      </section>
      
      {/* Community Guidelines section with Hack Club styling */}
      <section style={{
        background: "#252429",
        padding: "5rem 1.5rem",
        color: "white",
        marginTop: "4rem"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "2rem",
            lineHeight: 1.2
          }}>
            Community Guidelines
          </h2>
          
          <p style={{
            fontSize: "1.25rem",
            opacity: "0.9",
            marginBottom: "2.5rem",
            lineHeight: 1.6
          }}>
            Our community is built on respect, collaboration, and a shared love for AI and coding. We expect all members to:
          </p>
          
          <ul style={{
            listStyle: "none",
            padding: 0,
            marginBottom: "3rem",
            fontSize: "1.25rem",
            textAlign: "left",
            maxWidth: "600px",
            margin: "0 auto 3rem"
          }}>
            {[
              "Be respectful and inclusive to all members",
              "Share knowledge freely and help others learn",
              "Give credit for others' work and ideas",
              "Keep discussions relevant to AI, coding, and related topics",
              "Have fun and build amazing things together!"
            ].map((item, i) => (
              <li key={i} style={{
                marginBottom: "1rem",
                paddingLeft: "2rem",
                position: "relative",
                lineHeight: 1.5
              }}>
                <span style={{
                  position: "absolute",
                  left: 0,
                  top: "0.25rem",
                  color: "#ec3750",
                  fontWeight: "bold"
                }}>→</span>
                {item}
              </li>
            ))}
          </ul>
          
          <Link href="/join" style={{
            background: "#ec3750",
            color: "white",
            fontSize: "1.25rem",
            fontWeight: "600",
            padding: "1rem 2.5rem",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-block",
            transition: "transform 0.2s ease, background 0.2s ease",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(236, 55, 80, 0.4)"
          }}>
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}