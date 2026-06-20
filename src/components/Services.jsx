const services = [
  { name: 'Scalable Backend Systems', desc: 'High-performance APIs, microservices, and distributed architectures built to handle real traffic.' },
  { name: 'Website Development', desc: 'Modern, responsive web applications — from landing pages to full-stack platforms.' },
  { name: 'Automation Scripts', desc: 'Custom scripts and bots to automate repetitive workflows and save hours of manual work.' },
  { name: 'AI-Powered Solutions', desc: 'Integrating LLMs, chatbots, and intelligent features into your existing products.' },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <span className="section-label">What I Offer</span>
      <h2 className="section-heading reveal">Services</h2>
      <div className="services-container">
        {services.map((service, i) => (
          <div key={service.name} className="service-item reveal">
            <div className="service-header">
              <span className="service-number">0{i + 1}</span>
              <h3 className="service-name">{service.name}</h3>
            </div>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
