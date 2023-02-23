import Button from "../commons/Button/Button";
import styles from "../../styles/components/LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.cajaLogin}>
      <div>
        <h1 className={styles.titulo}>Iniciar sesión</h1>
      </div>
      <div>
        <h3 className={styles.usuario}>Usuario</h3>
      </div>
      <div>
        <input type="text" className="input" />
      </div>
      <div>
        {" "}
        <h3 className={styles.contrasena}>Contraseña</h3>
      </div>
      <div>
        <input type="password" className="input" />
      </div>
      <div>
        <h2 className={styles.recordarContrasena}>¿Olvidaste tu Contraseña?</h2>
      </div>
      <div>
        <Button className={"btn-primary w100"} title={"Ingresar"} />
      </div>

      <hr className={styles.border} />

      <div>
        <Button
          className={"btn-secondary w100"}
          title={"¿No tenés Cuenta? Registrate"}
        />
      </div>
    </div>
  );
};

export default LoginForm;
