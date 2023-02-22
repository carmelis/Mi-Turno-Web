import Link from "next/link";
import Button from "../commons/Button/Button";

const fetchBranches = () => {
  // Pendiente llamada al back para traer todas las branches
  /* return axios.get("https://localhost:5000/api/branches").then((res) => res.json()) */
  return [
    {
      id: 1,
      name: "Sucursal 1",
      mail: "sucursal1@test.com",
      phone: 21323123123,
      maxShifts: 2,
      startTime: "8:00",
      endTime: "17:00",
    },
    {
      id: 2,
      name: "Sucursal 2",
      mail: "sucursal2@test.com",
      phone: 56378101,
      maxShifts: 2,
      startTime: "9:30",
      endTime: "18:30",
    },
  ];
};

export default async function ListBranches() {
  const branches = await fetchBranches();

  return (
    <section>
      <h1 className="list-title">Sucursales</h1>
      <div className="list">
        {branches.map((branch) => (
          <div key={branch.id} className="list-item">
            <div className="list-column w22-5">
              <p className="list-label">Nombre</p>
              <p className="list-content">{branch.name}</p>
            </div>
            <div className="list-column w22-5">
              <p className="list-label">Mail</p>
              <p className="list-content">{branch.mail}</p>
            </div>
            <div className="list-column w22-5">
              <p className="list-label">Capacidad máxima</p>
              <p className="list-content">{branch.maxShifts}</p>
            </div>
            <div className="list-column w22-5">
              <p className="list-label">Horario de Inicio y Cierre</p>
              <p className="list-content">
                {branch.startTime} - {branch.endTime}
              </p>
            </div>
            <Link
              className="list-column w10"
              href={`/branches/edit/${branch.id}`}
            >
              <Button className={"btn-secondary"} title={"Editar"} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
