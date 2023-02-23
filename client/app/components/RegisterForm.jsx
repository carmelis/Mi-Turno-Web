import styles from "../../styles/components/Register.module.css";

function RegisterForm() {
  return (
    <div className={styles.cajaRegister}>
      <div>
        <p className={styles.botonAtras}>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.58753 13.4209C7.912 13.0964 7.912 12.5703 7.58753 12.2459L3.17503 7.83337H13.6667C14.1269 7.83337 14.5 7.46027 14.5 7.00003C14.5 6.53979 14.1269 6.1667 13.6667 6.1667H3.17503L7.58753 1.7542C7.912 1.42973 7.912 0.903667 7.58753 0.579199C7.26306 0.254732 6.737 0.254732 6.41253 0.579199L0.698806 6.29293C0.308281 6.68345 0.308282 7.31661 0.698806 7.70714L6.41253 13.4209C6.737 13.7453 7.26306 13.7453 7.58753 13.4209Z"
              fill="#A442F1"
            />
          </svg>
          Atrás
        </p>
      </div>
      <div>
        <h1 className={styles.titulo}>Crear cuenta</h1>
      </div>
      <div className={styles.cajaInputs}>
        <div>
          <div className={styles.cajaLeft}>
            <p className={styles.subTitulo}>Nombre y Apellido</p>
            <input type="text" className={styles.inputChico} />
          </div>
          <div className={styles.cajaRigth}>
            <p className={styles.subTitulo}>DNI</p>
            <input type="text" className={styles.inputChico} />
          </div>
        </div>
      </div>
      <div>
        <p className={styles.subTitulo}>Mail</p>
        <input type="text" className={styles.inputGrande} />
      </div>
      <div className={styles.cajaInputs}>
        <div>
          <div className={styles.cajaLeft}>
            <p className={styles.subTitulo}>Contraseña</p>
            <input type="password" className={styles.inputChico} />
          </div>
          <div className={styles.cajaRigth}>
            <p className={styles.subTitulo}>Repetir Contraseña </p>
            <input type="password" className={styles.inputChico} />
          </div>
        </div>
      </div>
      <div className={styles.cajaAdvertencia}>
        <h3 className={styles.tituloAdvertencia}>
          La contraseña debe contener:
        </h3>
        <dir>
          <hr className={styles.borderAdvertencia} />
        </dir>
        <div>
          <div className={styles.cajaLeft}>
            <p className={styles.subtituloAdvertencia}>
              ABC Una letra mayúscula
            </p>
          </div>
          <div className={styles.cajaRigth}>
            <p className={styles.subtituloAdvertencia}>
              abc Una letra minúscula
            </p>
          </div>
        </div>
        <div>
          <div className={styles.cajaLeft}>
            <p className={styles.subtituloAdvertencia}>123 Un número</p>
          </div>
          <div className={styles.cajaRigth}>
            <p className={styles.subtituloAdvertencia}>
              *** Mínimo 8 caracteres
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.cajaRegistrarme}>
          <p className={styles.botonRegistrarme}>Registrarme</p>
        </div>
      </div>
      <hr className={styles.borderAdvertencia} />
      <div className={styles.cajaIniciarSesion}>
        <div>
          <button className={styles.botonIniciarSesion}>
            ¿Ya tenés Cuenta? Iniciá sesion
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
