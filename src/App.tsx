export default function App() {
  return (
    <main className="stage">
      {/* Ambient light drifting across the studio, like sun through a tall window */}
      <div className="light" aria-hidden="true" />
      <div className="mullions" aria-hidden="true" />

      <section className="card">
        <p className="eyebrow">A studio in the making</p>

        <h1 className="wordmark">
          Mud <span className="amp">&amp;</span> Brush
        </h1>

        <p className="coming">Coming&nbsp;soon</p>

        <p className="tagline">
          Somewhere light and unhurried, made for working with your hands.
        </p>

        <a className="contact" href="mailto:info@mudandbrush.com">
          <span>Want to know more?</span>
          <span className="email">info@mudandbrush.com</span>
        </a>
      </section>

      <footer className="foot">
        <span>Mud &amp; Brush</span>
      </footer>
    </main>
  )
}
