const projects = [
  {
    title: 'DocMind',
    description: 'AI-powered chatbot enabling users to upload PDFs and have intelligent, context-aware conversations based on document content.',
    tags: ['FastAPI', 'React', 'LangChain', 'Gemini', 'Pinecone', 'PostgreSQL'],
    link: 'https://docmind.toolsstack.dev/'
  },
  {
    title: 'DevTool',
    description: 'A comprehensive utility toolkit for developers — data format conversions, JSON visualizers, mock data generators, and everyday dev tools.',
    tags: ['FastAPI', 'Python', 'React'],
    link: 'https://toolsstack.dev/data-converter/json-to-excel'
  }
]

export default function Projects() {
  return (
    <section className="section" id="work">
      <span className="section-label">Selected Work</span>
      <h2 className="section-heading reveal">Projects</h2>
      <div className="projects-container">
        {projects.map((project, i) => (
          <a key={project.title} href={project.link} target="_blank" rel="noreferrer" className="project-item reveal">
            <div className="project-header">
              <span className="project-number">0{i + 1}</span>
              <h3 className="project-name">{project.title}</h3>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
