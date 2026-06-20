import profileImg from '../assets/profile.png'

export default function About() {
  return (
    <section className="section" id="about">
      <span className="section-label">About</span>
      <h2 className="section-heading reveal">
        I build systems that scale.
      </h2>
      <div className="about-content">
        <div className="about-left">
          <p className="about-highlight reveal">
            Focused on backend architecture, distributed systems, and creating 
            reliable infrastructure that handles millions of requests without breaking a sweat.
          </p>
          <p className="about-text reveal">
            With expertise spanning from low-level system design to polished frontend 
            interfaces, I bring a full-stack perspective to every problem. I believe 
            great software is invisible — it just works, every time, at any scale.
          </p>
        </div>
        <div className="about-image reveal">
          <img src={profileImg} alt="Ravikant Tiwari" />
        </div>
      </div>
    </section>
  )
}
