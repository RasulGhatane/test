import Link from "next/link";

export default function JoinPage() {
  return (
    <div style={{ 
      paddingTop: "80px",
      background: "linear-gradient(to bottom, #f9f9ff 0%, #f0f0ff 100%)",
      minHeight: "100vh"
    }}>
      <section style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "3rem 1.5rem",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "3.5rem",
          fontWeight: "800",
          background: "linear-gradient(to right, #ec3750, #ff8c37)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2rem"
        }}>
          Become a Member
        </h1>
        
        <p style={{
          fontSize: "1.25rem",
          color: "#444",
          marginBottom: "2.5rem",
          lineHeight: 1.6
        }}>
          Join AI-Conic Club and become part of a community of AI enthusiasts building the future together.
        </p>
        
        <form style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
          textAlign: "left",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{
              display: "block",
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "0.5rem"
            }}>
              Name
            </label>
            <input type="text" placeholder="Your name" style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "2px solid #eaeaea",
              outline: "none"
            }} />
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{
              display: "block",
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "0.5rem"
            }}>
              Email
            </label>
            <input type="email" placeholder="you@example.com" style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "2px solid #eaeaea",
              outline: "none"
            }} />
          </div>
          
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{
              display: "block",
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "0.5rem"
            }}>
              Why do you want to join?
            </label>
            <textarea placeholder="Tell us a bit about yourself and why you're interested in AI-Conic Club" style={{
              width: "100%",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "2px solid #eaeaea",
              outline: "none",
              minHeight: "120px"
            }}></textarea>
          </div>
          
          <button type="submit" style={{
            background: "#ec3750",
            color: "white",
            fontSize: "1.125rem",
            fontWeight: "600",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            width: "100%",
            marginTop: "1rem",
            transition: "transform 0.2s ease, background 0.2s ease",
            boxShadow: "0 4px 12px rgba(236, 55, 80, 0.4)"
          }}>
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}