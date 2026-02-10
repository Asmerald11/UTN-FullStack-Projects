import React from "react";
import insta from './images/instagram.png';
import tweet from './images/twitter.png';
import deviant from './images/devianart.png';
import tiktok from './images/tiktok.png';
import '../index.css'

const Registro = () => {
    return (
        <div className="forms">
            {/* <div className="login-form">
                <h1>Iniciar sesion</h1>
                <form action="/auth/contactoa" method="POST">
                    <input type="text" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Contraseña" required />
                    <input type="submit" placeholder="Conectarse" />
                </form>
            </div>
            <div className="reg-form">
                <h1>Registrarse</h1>
                <form action="/auth/registro" method="POST">
                    <input type="text" name="username" placeholder="Usuario" required />
                    <input type="password" name="password" placeholder="Contraseña" required />
                    <input type="password" name="confirmPassword" placeholder="Confirmar contraseña" required />
                    <input type="text" name="email" placeholder="Email" required />
                    <input type="submit" placeholder="Registrarse" />
                </form>
            </div> */}
            <div className="contactos">
                <div className="izq">

                    <a href="https://www.instagram.com/kakidraws_/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" /><span>Instagram</span></a>
                </div>
                <div className="der">

                    <a href="https://twitter.com/kakidraws_" target="_blank" rel="noopener noreferrer"><img src={tweet} alt="" /><span>Twitter</span></a>
                </div>
                <div className="izq">

                    <a href="https://www.deviantart.com/kakidraws" target="_blank" rel="noopener noreferrer"><img src={deviant} alt="" /><span>Deviantart</span></a>
                </div>
                <div className="der">

                    <a href="https://www.tiktok.com/@kakidraws_?lang=es" target="_blank" rel="noopener noreferrer"><img src={tiktok} alt="" /><span>TikTok</span></a>
                </div>
            </div>
        </div>
    );
};

export default Registro