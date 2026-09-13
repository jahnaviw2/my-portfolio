export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  // liveDemoUrl: string;
  // githubUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "Enterprise Observability & Alerting Platform",
    description: "Built centralized cloud monitoring and alerting solutions across AWS and GCP Kubernetes environments to ensure high platform uptime.",
    tags: ["ELK Stack", "Grafana", "Prometheus", "Catchpoint", "Kubernetes", "AWS", "GCP"],
    metrics: "Proactive Monitoring & Incident Alerting"
  },
  {
    title: "Centralized Production Log Aggregation",
    description: "Managed log ingestion and retention for production workloads using the ELK Stack, enabling fast log analysis for critical incident resolution.",
    tags: ["ELK Stack", "Python", "Kubernetes", "AWS"],
    metrics: "Production Log Analysis & Troubleshooting"
  },
  {
    title: "Operational Task Automation Framework",
    description: "Automated routine operational monitoring tasks using Python and SQL, eliminating manual effort and improving team efficiency.",
    tags: ["Python", "SQL", "AWS", "GCP", "Automation"],
    metrics: "Reduced Manual Operational Effort"
  }
];


//   {
//     title: "Project 1: Observability Pipeline",
//     description: "Automated deployment of Prometheus and Grafana stacks using Terraform for real-time cluster monitoring.",
//     metrics: "Reduced MTTR by 35% | 99.9% Uptime",
//     tags: ["Terraform", "Prometheus", "Grafana", "Kubernetes"],
//     liveDemoUrl: "https://example.com/demo1",
//     githubUrl: "https://github.com/example/project1"
//   },
//   {
//     title: "Project 2: Centralized Log Aggregation",
//     description: "Configured Vector and Loki for high-throughput log processing across distributed microservices.",
//     metrics: "40% Storage Cost Reduction | 500ms Query Latency",
//     tags: ["Loki", "Vector", "LogQL", "Docker"],
//     liveDemoUrl: "https://example.com/demo2",
//     githubUrl: "https://github.com/example/project2"
//   },
//   {
//     title: "Project 3: Incident Response & Alertmanager",
//     description: "Designed custom routing rules and PagerDuty webhooks to eliminate notification fatigue.",
//     metrics: "Zero False Positives | <2 min Alert Latency",
//     tags: ["Alertmanager", "Go", "PagerDuty", "Slack API"],
//     liveDemoUrl: "https://example.com/demo3",
//     githubUrl: "https://github.com/example/project3"
//   }
// ];

