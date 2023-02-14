import Link from "next/link";
import Button from "../commons/Button/Button";

const fetchBranches = () => {
  // Pendiente llamada al back para traer todas las branches
  /* return axios.get("https://localhost:3000/api/branches").then((res) => res.json()) */
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

  return branches.map((branch) => (
    <div key={branch.id}>
      <p>Nombre</p>
      <p>{branch.name}</p>
      <p>Mail</p>
      <p>{branch.mail}</p>
      <p>Capacidad máxima</p>
      <p>{branch.maxShifts}</p>
      <p>Horario de Inicio y Cierre</p>
      <p>
        {branch.startTime} - {branch.endTime}
      </p>
      <Link href={`/branches/edit/${branch.id}`}>
        <Button title={"Editar"} />
      </Link>
    </div>
  ));
}
