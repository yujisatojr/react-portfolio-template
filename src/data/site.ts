// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Muhammad Waleed Asaf',
  role: 'DevOps Engineer',
  email: 'iwaleedasaf@gmail.com',
  phone: '+92 325 5653654',
  github: 'https://github.com/waleedasaf',
  linkedin: 'https://www.linkedin.com/in/waleed-asaf-devops',
  // Set to a status string to show the availability badge, or '' to hide it.
  status: 'Open to new DevOps roles',
  summary:
    'DevOps Engineer with around 2 years of experience automating AWS infrastructure with Terraform and designing CI/CD pipelines with GitHub Actions. I work across Linux, Docker, Kubernetes/EKS and production monitoring with Prometheus, Grafana and CloudWatch.',
  resumeUrl: '/Muhammad_Waleed_Asaf_DevOps_Engineer_Resume.pdf',
};

export const metrics = [
  { value: '50%', label: 'faster deployments', note: 'CI/CD automation with GitHub Actions' },
  { value: '80%', label: 'less provisioning effort', note: 'Infrastructure as code with Terraform' },
  { value: '30%', label: 'lower cloud cost', note: 'Infrastructure optimization' },
  { value: '2 yrs', label: 'hands-on experience', note: 'AWS, Kubernetes, Linux in production' },
];

export const experience = [
  {
    role: 'Junior DevOps Engineer',
    company: 'WriteO',
    place: 'Lahore, Pakistan',
    period: 'Jul 2025 – Sep 2026',
    stages: ['build', 'test', 'deploy'],
    points: [
      'Primary point of contact for developers on CI/CD and deployment issues; owned pipeline design and delivery with GitHub Actions and evaluated Gitleaks and Dependabot, cutting deployment time by ~40%.',
      'Architected scalable AWS infrastructure (VPC, security groups, ALB/ELB, Route 53) as code with Terraform, with Ansible for configuration management.',
      'Automated resource tagging and EC2 lifecycle management with Python (boto3), reducing manual cleanup.',
      'Set up monitoring, logging, alerting and tracing with CloudWatch, Prometheus/Grafana and EFK, resolving incidents with minimal escalation.',
    ],
  },
  {
    role: 'Cloud Support Engineer',
    company: 'Softoholic',
    place: 'Birmingham, UK (Remote)',
    period: 'Oct 2024 – Jun 2025',
    stages: ['provision', 'operate'],
    points: [
      'Provisioned and managed AWS resources (EC2, S3, IAM), DNS (Route 53), load balancing and SSL certificates, with access control and cost monitoring.',
      'Troubleshot workload incidents in Linux environments and documented fixes in a team knowledge base to speed up incident response.',
    ],
  },
];

export const skills = [
  { group: 'Cloud & IaC', items: ['AWS (EC2, ECS, S3, RDS, Lambda, VPC, IAM)', 'Route 53', 'Load Balancing', 'SSL', 'Terraform', 'CloudFormation', 'Ansible'] },
  { group: 'Containers', items: ['Docker', 'Kubernetes', 'Amazon EKS', 'Amazon ECS', 'Helm'] },
  { group: 'CI/CD & GitOps', items: ['GitHub Actions', 'Argo CD', 'GitOps', 'Git / GitHub', 'Pipeline design'] },
  { group: 'Observability', items: ['Prometheus', 'Grafana', 'CloudWatch', 'EFK Stack', 'OpenTelemetry', 'Jaeger', 'OpenSearch'] },
  { group: 'Security', items: ['IAM & Security Groups', 'Gitleaks', 'Pre-commit hooks', 'Dependabot', 'OWASP Threat Dragon', 'SOC2 / HIPAA / CIS-aligned controls'] },
  { group: 'Scripting & Systems', items: ['Python (Boto3)', 'Bash', 'Linux administration'] },
];

export const projects = [
  {
    id: 'eks',
    title: 'Cloud-Native E-Commerce Platform on AWS EKS',
    blurb:
      'A polyglot microservices store, provisioned end to end with modular Terraform and delivered through GitOps.',
    points: [
      'Modular Terraform for VPC, public/private subnets, Internet/NAT gateways, EKS, IAM roles and node groups, with S3 remote state and DynamoDB locking.',
      'Dockerized microservices deployed on Kubernetes with Services, service accounts and inter-service discovery.',
      'AWS Load Balancer Controller with EKS IAM/OIDC and Helm, exposing the frontend through Ingress and an internet-facing ALB.',
      'GitOps CI/CD: GitHub Actions for CI, Argo CD for continuous delivery.',
      'Observability with OpenTelemetry, Prometheus, Grafana, Jaeger and OpenSearch.',
    ],
    tags: ['Terraform', 'EKS', 'Kubernetes', 'Helm', 'Argo CD', 'OpenTelemetry', 'Grafana'],
    // TODO: replace with the exact repo URL for this project
    link: 'https://github.com/waleedasaf',
    diagram: 'eks',
  },
  {
    id: 'cicd',
    title: 'End-to-End CI/CD Pipeline for a Node.js App',
    blurb:
      'A GitHub Actions pipeline that tests, builds, scans and ships a Node.js microservices app to ECS.',
    points: [
      'Cut manual deployment time by 50% with multi-version Node.js testing, optimized Docker images and pushes to Amazon ECR.',
      'Deployed to Amazon ECS across a microservices architecture; fixed container startup failures, image bloat and service networking issues.',
      'Secured the pipeline with Gitleaks secret scanning, branch protection and mandatory code review.',
    ],
    tags: ['GitHub Actions', 'Docker', 'ECR', 'ECS', 'Gitleaks'],
    link: 'https://github.com/waleeddevops111/cicd-nodejs',
    diagram: 'cicd',
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect', level: 'Associate' },
  { name: 'AWS Certified Cloud Practitioner', level: 'Foundational' },
];

export const education = {
  degree: 'BS, Computer Science',
  school: 'University of Engineering & Technology (UET), Lahore',
  period: '2020 – 2024',
};

export const typedLines = [
  'terraform apply -auto-approve',
  'kubectl rollout status deploy/frontend',
  'gh workflow run deploy.yml',
  'argocd app sync storefront',
];
