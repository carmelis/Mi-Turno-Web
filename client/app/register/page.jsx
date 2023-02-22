import React from "react";
import styles from "../../styles/register/Register.module.css";

function page() {
  return (
    <div className={styles.cajaLogin}>
      <div>
        <h1 className={styles.titulo}>Iniciar sesión</h1>
      </div>
      <div>
        <h3 className={styles.usuario}>Usuario</h3>
      </div>
      <div>
        <input type="text" className={styles.inputUsuario} />
      </div>
      <div>
        {" "}
        <h3 className={styles.contrasena}>Contraseña</h3>
      </div>
      <div>
        <input type="password" className={styles.inputContrasena} />
      </div>
      <div>
        <h2 className={styles.recordarContrasena}>¿Olvidaste tu Contraseña?</h2>
      </div>
      <div>
        <button className={styles.botonIngresar}>Ingresar</button>
      </div>

      <hr className={styles.border} />

      <div>
        <button className={styles.botonRegistrate}>
          ¿No tenés Cuenta? Registrate
        </button>
      </div>
    </div>
  );
}

export default page;
