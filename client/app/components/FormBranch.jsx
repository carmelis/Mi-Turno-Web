"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../commons/Button/Button";
import styles from "../../styles/components/Form.module.css";

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
      // Pendiente llamada al back para crear una branch
      // return axios.post(`https://localhost:5000/api/branches/create`).then((res) => res.json())
      console.log("agregar");
    } else {
      // Pendiente llamada al back para traer todas las branches
      // return axios.put(`https://localhost:5000/api/branches/edit/{branch.id}`).then((res) => res.json())
      console.log("editar");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles["form-title"]}>
        {newMovie ? "Crear una nueva sucursal" : "Editar sucursal"}
      </h2>
      <div className={`${styles["form-input-group"]} w100`}>
        <label className={styles["form-label"]}>Nombre</label>
        <input
          className="input w100"
          required
          type="text"
          autoComplete="off"
          name="name"
          value={form ? form.name : ""}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles["form-input-group"]} w100`}>
        <label className={styles["form-label"]}>Correo electrónico</label>
        <input
          className="input w100"
          required
          type="email"
          autoComplete="off"
          name="mail"
          value={form ? form.mail : ""}
          onChange={handleChange}
        />
      </div>
      <div className={styles["form-row"]}>
        <div className={`${styles["form-input-group"]} w50`}>
          <label className={styles["form-label"]}>Teléfono</label>
          <input
            className="input w100"
            required
            type="tel"
            autoComplete="off"
            name="phone"
            value={form ? form.phone : ""}
            onChange={handleChange}
          />
        </div>
        <div className={`${styles["form-input-group"]} w50`}>
          <label className={styles["form-label"]}>Capacidad máxima</label>
          <select
            className="input w100"
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
        </div>
      </div>
      <div className={styles["form-row"]}>
        <div className={`${styles["form-input-group"]} w50`}>
          <label className={styles["form-label"]}>Horario de Inicio</label>
          <select
            className="input w100"
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
        </div>
        <div className={`${styles["form-input-group"]} w50`}>
          <label className={styles["form-label"]}>Horario de Cierre</label>
          <select
            className="input w100"
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
        </div>
      </div>
      <Button
        className={"btn-primary w100"}
        title={newMovie ? "Agregar" : "Editar"}
        type="submit"
      />
      <Link className="w100" href="/branches">
        <Button className={"btn-tertiary w100"} title={"Volver"} />
      </Link>
    </form>
  );
}
