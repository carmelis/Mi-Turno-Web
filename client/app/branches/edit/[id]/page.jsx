import FormBranch from "../../../components/FormBranch";

const fetchBranch = (id) => {
  return fetch(`http://localhost:5000/api/branch/${id}`).then((res) =>
    res.json()
  );
};

export default async function EditBranchPage({ params }) {
  const { id } = params;
  const branch = await fetchBranch(id);
  console.log("branch", branch);

  return (
    <section className="section bg-grey2">
      <FormBranch branch={branch} newMovie={false} />
    </section>
  );
}
