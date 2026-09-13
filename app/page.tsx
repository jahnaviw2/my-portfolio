// app/page.tsx
import {ProjectCard} from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { skillCategories } from "@/data/skills";
export default function Home() {
  const stats = [
    { value: "2+", label: "YEARS EXPERIENCE" },
    { value: "ELK & Grafana", label: "OBSERVABILITY STACK" },
    { value: "AWS /GCP", label: "CLOUD PLATFORMS" },
    { value: "100%", label: "AUTOMATION FOCUS" },
  ];

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center text-center pt-24 pb-16 px-4">
        {/* Terminal Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          SYSTEM // ONLINE
        </div>

        {/* Main Identity */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-4">
          Jahnavi A
        </h1>
        <p className="text-xl md:text-2xl font-mono text-cyan-400 mt-2">
          SRE & PLATFORM ENGINEER
        </p>

        {/* Quick Summary */}
        <p className="text-gray-400 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
          Associate Software Developer specializing in cloud monitoring, infrastructure observability, automated operational tools, and production incident troubleshooting across AWS and GCP environments.
        </p>

        {/* Metric Stat Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-white/[0.03] border border-white/10 text-center"
            >
              <div className="text-2xl md:text-3xl font-black font-mono text-cyan-300">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-gray-400 tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-colors"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium text-sm transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* --- FEATURED PROJECTS SECTION  */}
     
      <section id="projects" className="max-w-5xl mx-auto px-4 mt-8">
        <h2 className="text-xl font-bold text-white font-mono mb-6 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="text-cyan-400">&gt;</span> FEATURED_PROJECTS
        </h2>

        {/* Project Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Automated K8s GitOps Pipeline"
            subtitle="Infrastructure & Automation"
            description="Designed a zero-downtime deployment pipeline using ArgoCD and GitHub Actions for automated cluster rollouts."
            metric="< 2 MIN"
            metricLabel="DEPLOY TIME"
            tags={["Kubernetes", "ArgoCD", "Terraform", "GitHub Actions"]}
            githubUrl="https://github.com"
          />
        </div> */}
      </section>  
     
  

      {/* 3. PUT THE SPRINT 5 SECTION INSIDE THE <main> TAG HERE */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-white border-b border-gray-800 pb-2">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#131b2e] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-gray-700 transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded p-2 mb-4">
                  📈 {project.metrics}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="flex items-center gap-3 pt-4 border-t border-gray-800/60">
                <a 
                  href={project.liveDemoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 transition"
                >
                  Live Demo ↗
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-gray-400 hover:text-white transition"
                >
                  GitHub Code ↗
                </a>
              </div> */}
            </div>
          ))}
        </div>
        {/*sprint 6 */}
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-4 border border-gray-800 rounded-lg bg-white/5">
              <h3 className="font-semibold mb-3 text-cyan-400">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono font-medium bg-slate-800 text-slate-200 rounded-full border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
  {/* TransUnion - Full Time */}
  <div className="border border-slate-800 bg-slate-900/40 p-6 rounded-xl">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-white">Associate Software Developer</h3>
        <p className="text-cyan-400 font-mono text-sm">TransUnion • Hyderabad, India</p>
      </div>
      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
        Jul 2023 – Nov 2025
      </span>
    </div>
    <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
      <li>Built Grafana dashboards and Prometheus alerts to improve infrastructure visibility and proactive monitoring.</li>
      <li>Managed centralized logging using ELK Stack for production applications and performed log analysis to troubleshoot critical incidents.</li>
      <li>Supported Kubernetes workloads deployed across AWS and Google Cloud Platform (GCP).</li>
      <li>Automated operational monitoring tasks using Python, reducing manual effort and improving operational efficiency.</li>
      <li>Collaborated with cross-functional engineering teams using Agile methodologies to enhance platform reliability.</li>
    </ul>
    <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
      <span>#Python</span>
      <span>#AWS</span>
      <span>#GCP</span>
      <span>#Kubernetes</span>
      <span>#ELKStack</span>
      <span>#Grafana</span>
      <span>#Prometheus</span>
    </div>
  </div>

  {/* TransUnion - Internship */}
  <div className="border border-slate-800 bg-slate-900/40 p-6 rounded-xl">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <h3 className="text-xl font-bold text-white">Software Developer Intern</h3>
        <p className="text-cyan-400 font-mono text-sm">TransUnion • Hyderabad, India</p>
      </div>
      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
        Mar 2023 – Jul 2023
      </span>
    </div>
    <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
      <li>Assisted in monitoring, automation, testing, and debugging of enterprise applications.</li>
      <li>Worked with Python and SQL to support cloud-based operational tools and internal applications.</li>
    </ul>
  </div>
</div>
      </section>

      <footer className="mt-16 pt-8 border-t border-gray-800 text-center space-y-4">
        <p className="text-gray-400">Get in touch:</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/jahnaviw2" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/jahnavi-a-w2/" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="mailto:jahnaviw2@gmail.com" className="hover:underline">Email</a>
        </div>
      </footer>


    </main>
  );
}