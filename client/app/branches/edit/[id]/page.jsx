import FormBranch from "../../../components/FormBranch";

const fetchBranch = (id) => {
  // Pendiente llamada al back para traer todas las branches
  /* return axios.get(`https://localhost:3000/api/branches/{id}`).then((res) => res.json()) */
  return {
    id,
    name: "Sucursal 1",
    mail: "sucursal1@test.com",
    phone: 21323123123,
    maxShifts: 2,
    startTime: "8:00",
    endTime: "17:00",
  };
};

export default function BranchPage({ params }) {
  const { id } = params;
  const branch = fetchBranch(id);

  return (
    <main>
      <FormBranch branch={branch} newMovie={false} />
    </main>
  );
}
