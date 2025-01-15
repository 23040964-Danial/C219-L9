import { useParams, Link, Outlet } from "react-router-dom";

const modulesList = {
  DDDD: [
    { id: "ui-ux", name: "UI/UX Design for Apps"},
    { id: "web-app-dev", name: "Web App Development"},
  ],
  DIT: [
    { id: "cloud-computing", name: "Cloud Computing"},
    { id: "database-systems", name: "Database Systems"},
  ],
  DCS: [
    { id: "network-security", name: "Network Security"},
    { id: "ethical-hacking", name: "Ethical Hacking"},
  ],
};

export default function DiplomaDetails() {
  const { diplomaId } = useParams();

  if (!modulesList[diplomaId]) {
    return (
      <div className="container">
        <h2>Invalid Diploma ID</h2>
        <p>Please select a valid diploma.</p>
      </div>
    );
  }

  const modules = modulesList[diplomaId];

  return (
    <div className="container">
      <h2>Modules for {diplomaId.toUpperCase()}</h2>
      <ul className="diploma-list"> 
        {modules.map((module) => (
          <li key={module.id}>
            <Link to={`/diplomas/${diplomaId}/${module.id}`}>{module.name}</Link>
            <p>{module.description}</p> 
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
