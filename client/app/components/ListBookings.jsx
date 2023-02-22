//"use client";

import Link from "next/link";
import Button from "../commons/Button/Button";

const loadOptions = (rol) => {
  const options = ["Editar", "Cancelar"];
  return rol === "operator" ? ["Confirmación", ...options] : options;
};

const fetchBookings = (user) => {
  if (user.rol == "operator") {
    // Pendiente llamada al back para traer todas las bookings de una sucursal
    /* return axios.get("https://localhost:5000/api/bookings/branch/{user.branchId}").then((res) => res.json()) */
    return [
      {
        id: 1412418241,
        name: "Juan Perez",
        date: "12/03/2022 - 13 hs",
        createdAt: "21/02/2022",
      },
      {
        id: 1412418242,
        name: "Pablo Romano",
        date: "27/02/2022 - 10:30 hs",
        createdAt: "18/02/2022",
      },
    ];
  } else if (user.rol === "client") {
    // Pendiente llamada al back para traer todas las bookings de un ususario
    /* return axios.get("https://localhost:5000/api/bookings/user/{user.id}").then((res) => res.json()) */
    return [
      {
        id: 1412418241,
        name: "Juan Perez",
        date: "12/03/2022 - 13 hs",
        createdAt: "21/02/2022",
      },
      {
        id: 1412418242,
        name: "Juan Perez",
        date: "27/02/2022 - 10:30 hs",
        createdAt: "18/02/2022",
      },
    ];
  }
};

export default async function ListBookings() {
  // Pendiente recuperar usuario de redux o context para saber su rol
  const user = { rol: "operator" };
  const options = loadOptions(user.rol);
  const bookings = await fetchBookings(user);

  /* const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }; */

  return (
    <section>
      <h1 className="list-title">Reservas</h1>
      <div className="list">
        {bookings.map((booking) => (
          <div key={booking.id} className="list-item">
            <div className="list-column w20">
              <p className="list-label">Nombre</p>
              <p className="list-content">{booking.name}</p>
            </div>
            <div className="list-column w20">
              <p className="list-label">Reserva</p>
              <p className="list-content">{booking.date}</p>
            </div>
            <div className="list-column w20">
              <p className="list-label">Día de la reserva</p>
              <p className="list-content">{booking.createdAt}</p>
            </div>
            <div className="list-column w20">
              <p className="list-label">Nº de la reserva</p>
              <p className="list-content">{booking.id}</p>
            </div>
            <div className="list-column">
              <select
                className="btn-quarth w100"
                name="option"
                value={options[0]}
                // onChange={handleChange}
              >
                {options.map((op, i) => (
                  <option key={i} value={op} className="btn-quarth w100">
                    {op}
                  </option>
                ))}
              </select>
            </div>

            {/* <Link
              className="list-column w10"
              href={`/bookings/edit/${booking.id}`}
            >
              <Button className={"btn-secondary"} title={"Editar"} />
            </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
}
