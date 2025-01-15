import { Link } from "react-router-dom";

const diplomasList = [
  { id: "DDDD", name: "Diploma in Digital Design and Development"},
  { id: "DIT", name: "Diploma in Information Technology"},
  { id: "DCS", name: "Diploma in Cybersecurity"},
];

export default function Diplomas() {
  return (
    <div className="container">
      <h1>Available Diplomas</h1>
      <ul className="diploma-list">
        {diplomasList.map((diploma) => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
            <p>{diploma.description}</p> {/* Displaying diploma description */}
          </li>
        ))}
      </ul>
    </div>
  );
}
