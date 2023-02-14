"use client";

import Link from "next/link";
import { useState } from "react";

const shifts = ["1", "2", "3", "4", "5", "6"];
const startTimes = ["07:30", "08:00", "08:30", "09:00", "09:30", "10:00"];
const endTimes = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00"];

export default function FormBranch({ branch = null, newMovie = true }) {
  const [form, setForm] = useState(branch);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie) {
      // Pendiente llamada al back para traer todas las branches
      // return axios.post(`https://localhost:3000/api/branches/create`).then((res) => res.json())
      console.log("agregar");
    } else {
      // Pendiente llamada al back para traer todas las branches
      // return axios.put(`https://localhost:3000/api/branches/edit/{branch.id}`).then((res) => res.json())
      console.log("editar");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input
        required
        type="text"
        autoComplete="off"
        name="name"
        value={form ? form.name : ""}
        onChange={handleChange}
      />
      <label>Correo electrónico</label>
      <input
        required
        type="email"
        autoComplete="off"
        name="mail"
        value={form ? form.mail : ""}
        onChange={handleChange}
      />
      <label>Teléfono</label>
      <input
        required
        type="tel"
        autoComplete="off"
        name="phone"
        value={form ? form.phone : ""}
        onChange={handleChange}
      />
      <label>Capacidad máxima</label>
      <select
        name="maxShifts"
        value={form ? form.maxShifts : ""}
        onChange={handleChange}
      >
        {shifts.map((shift, i) => (
          <option key={i} value={shift}>
            {shift}
          </option>
        ))}
      </select>
      <label>Horario de Inicio</label>
      <select
        name="startTime"
        value={form ? form.startTime : ""}
        onChange={handleChange}
      >
        {startTimes.map((startTime, i) => (
          <option key={i} value={startTime}>
            {startTime}
          </option>
        ))}
      </select>
      <label>Horario de Cierre</label>
      <select
        name="endTime"
        value={form ? form.endTime : ""}
        onChange={handleChange}
      >
        {endTimes.map((endTime, i) => (
          <option key={i} value={endTime}>
            {endTime}
          </option>
        ))}
      </select>
      <button className="btn-primary" type="submit">
        {newMovie ? "Agregar" : "Editar"}
      </button>
      <Link href="/branches">
        <button className="btn-tertiary">Volver</button>
      </Link>
    </form>
  );
}
