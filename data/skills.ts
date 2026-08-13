export interface Project {
  title: string;
  skills: string;
}
export const skillCategories = [
  {
    title: "Infrastructure & Cloud",
    skills: ["AWS", "Kubernetes", "Terraform", "Docker"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitHub Actions", "Helm", "ArgoCD", "Bash"],
  },
  {
    title: "Observability & SRE",
    skills: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
  },
];