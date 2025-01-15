import { useParams } from "react-router-dom";

const modulesList = {
  DDDD: [
    { id: "ui-ux", name: "UI/UX Design for Apps", description: "This module focuses on the principles and practices of user interface (UI) and user experience (UX) design specifically for mobile and web applications. Students will explore the entire design process, from understanding user needs and conducting user research to creating wireframes and prototypes." },
    { id: "web-app-dev", name: "Web App Development", description: "This module provides a comprehensive introduction to the principles and practices of web application development. Students will learn how to design, build, and deploy robust web applications using modern technologies and frameworks. The course covers both front-end and back-end development, enabling students to create dynamic, interactive user interfaces as well as efficient server-side logic." },
  ],
  DIT: [
    { id: "cloud-computing", name: "Cloud Computing", description: "This module covers the fundamental concepts of cloud computing, including cloud service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), and the benefits of cloud technologies. Students will learn how to design and implement cloud-based solutions, manage cloud resources effectively, and understand security considerations in a cloud environment." },
    { id: "database-systems", name: "Database Systems", description: "This module provides an in-depth understanding of database design, implementation, and management. Students will learn to analyze data requirements, model database structures, and apply normalization techniques to ensure data integrity. The course covers SQL (Structured Query Language) for querying and manipulating databases, as well as best practices for database administration and security." },
  ],
  DCS: [
    { id: "network-security", name: "Network Security", description: "This module provides a comprehensive overview of network security principles and practices aimed at protecting computer networks from various threats and vulnerabilities. Students will explore the fundamental concepts of securing networks, including the identification of potential risks such as malware, phishing attacks, and unauthorized access." },
    { id: "ethical-hacking", name: "Ethical Hacking", description: "This module provides a comprehensive introduction to ethical hacking, focusing on the techniques and methodologies used to identify and mitigate vulnerabilities in computer systems and networks. Students will learn how ethical hackers operate within legal and ethical boundaries to assess the security of information systems." },
  ],
};

export default function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();
  
  const module = modulesList[diplomaId]?.find(mod => mod.id === moduleId);

  return (
    <div className="container">
      <h3>Module Details</h3>
      <p><strong>Diploma:</strong> {diplomaId}</p>
      <p><strong>Module Name:</strong> {module ? module.name : 'Module not found'}</p>
      <p><strong>Description:</strong> {module ? module.description : 'No description available'}</p>
    </div>
  );
}
