export const services = [
  { id: "all", label: "All services" },
  { id: "compute", label: "Compute" },
  { id: "object-storage", label: "Object Storage" },
];

export const legalDocs = [
  { title: "Services Agreement", href: "#services-agreement", services: ["all"] },
  { title: "Terms of Use", href: "#terms-of-use", services: ["all"] },
  { title: "Privacy Policy", href: "#privacy-policy", services: ["all"] },
  { title: "Data Processing Agreement", href: "#dpa", services: ["all"] },
  { title: "List of Processors/Sub-processors", href: "#sub-processors", services: ["all"] },
  { title: "Acceptable Use Policy", href: "#aup", services: ["all"] },
  { title: "Service Terms", href: "#object-storage-service-terms", services: ["object-storage"] },
  { title: "Pricing Policy", href: "#object-storage-pricing", services: ["object-storage"] },
  { title: "Object Storage Terms", href: "#object-storage-terms", services: ["object-storage"] },
  { title: "Object Storage SLA", href: "#object-storage-sla", services: ["object-storage"] },
  { title: "Compute Terms", href: "#compute-terms", services: ["compute"] },
  { title: "Compute SLA", href: "#compute-sla", services: ["compute"] },
  { title: "GPU Pricing Policy", href: "#gpu-pricing", services: ["compute"] },
  { title: "Reserved Capacity Addendum", href: "#reserved-capacity", services: ["compute"] },
];
