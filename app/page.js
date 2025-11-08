'use client'

export default function HomePage() {
  return (
    <main className="container">
      <div className="hero">
        <h1>Mirmbrema</h1>
        <p>Welcome. A crisp, minimal landing crafted for speed.</p>
        <a className="cta" href="#">Get Started</a>
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: radial-gradient(1000px 500px at 50% -20%, #e8f3ff 10%, transparent),
                      radial-gradient(800px 400px at 120% 0%, #ffe9f3 10%, transparent),
                      radial-gradient(600px 300px at -20% 20%, #f0ffe9 10%, transparent),
                      #0b1020;
          color: #e7ecf3;
        }
        .hero {
          text-align: center;
          padding: 2rem 1.25rem;
          border-radius: 16px;
          background: rgba(10, 14, 28, 0.55);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }
        h1 {
          margin: 0 0 0.5rem;
          font-size: 3.25rem;
          letter-spacing: -0.02em;
        }
        p {
          margin: 0 0 1.25rem;
          color: #b6c4d9;
        }
        .cta {
          display: inline-block;
          padding: 0.75rem 1.1rem;
          background: linear-gradient(135deg, #5b8cff, #7a5bff);
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 6px 16px rgba(91, 140, 255, 0.35);
          transition: transform 150ms ease, box-shadow 150ms ease, filter 150ms ease;
        }
        .cta:hover{
          transform: translateY(-1px);
          filter: saturate(1.1);
          box-shadow: 0 10px 24px rgba(91, 140, 255, 0.45);
        }
        @media (max-width: 640px) {
          h1 { font-size: 2.4rem; }
          .hero { padding: 1.5rem 1rem; }
        }
      `}</style>
    </main>
  );
}
