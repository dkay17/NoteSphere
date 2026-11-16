export default function Home() {
  return (
    <main className="shell">
      <div className="hero">
        <p className="eyebrow">NoteSphere API</p>
        <h1>Serverless backend is ready.</h1>
        <p className="lede">
          API routes are served by Vercel Functions. Check{" "}
          <code>/api/health</code> to confirm the service is available.
        </p>
      </div>
    </main>
  );
}
