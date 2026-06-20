const skills = [
  'Java', 'C++', 'Python', 'Node.js', 'FastAPI', 'React',
  'AWS', 'Docker', 'PostgreSQL', 'System Design', 'Microservices', 'Redis'
]

export default function Skills() {
  return (
    <section className="skills-marquee" id="skills">
      <div className="marquee">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="marquee-item">{skill}</span>
          ))}
        </div>
      </div>
      <div className="marquee marquee-reverse">
        <div className="marquee-track">
          {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, i) => (
            <span key={i} className="marquee-item">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
