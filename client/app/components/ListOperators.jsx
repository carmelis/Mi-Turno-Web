import Link from "next/link";
import Button from "../commons/Button/Button";

const fetchOperators = () => {
  // Pendiente llamada al back para traer todos los operators
  /* return axios.get("https://localhost:5000/api/operators").then((res) => res.json()) */
  return [
    {
      id: 1,
      name: "Operador 1",
      mail: "operador1@test.com",
      dni: 24732129,
      branch: "Palermo",
      password: "hsfdu3aq1",
    },
    {
      id: 2,
      name: "Operador 2",
      mail: "operador2@test.com",
      dni: 56123894,
      branch: "Villa Crespo",
      password: "hsfserq124",
    },
  ];
};

export default async function ListOperators() {
  const operators = await fetchOperators();

  return (
    <section>
      <h1 className="list-title">Operadores</h1>
      <div className="list">
        {operators.map((operator) => (
          <div key={operator.id} className="list-item">
            <div className="list-column w22-5">
              <p className="list-label">Nombre</p>
              <p className="list-content">{operator.name}</p>
            </div>
            <div className="list-column w22-5">
              <p className="list-label">Mail</p>
              <p className="list-content">{operator.mail}</p>
            </div>
            <div className="list-column w22-5">
              <p className="list-label">DNI</p>
              <p className="list-content">{operator.dni}</p>
            </div>
            <div className="list-column w22-5">
              <p className="list-label">Sucursal</p>
              <p className="list-content">{operator.branch}</p>
            </div>
            <Link
              className="list-column w10"
              href={`/operators/edit/${operator.id}`}
            >
              <Button className={"btn-secondary"} title={"Editar"} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
