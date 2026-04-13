import { useState } from "react";
import { LoginForm } from "../components/LoginForm.jsx";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
 
const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isForgot, setIsForgot] = useState(false);
 
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    {/* Contenedor principal: ocupa toda la pantalla y centra el contenido */}
 
    <div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-10">
        {/* Tarjeta blanca: caja central con sombra, borde y padding */}
 
        <div className="flex justify-center mb-6">
        {/* Contenedor del logo: centrado horizontalmente */}
 
            <img
                src="/src/assets/img/kinal_sports.png"
                alt="Kinal Sports"
                className="h-20 w-auto"
            />
        {/* Logo de la aplicación */}
        </div>
 
        <div className="text-center mb-6">
        {/* Contenedor del texto: título y descripción centrados */}
 
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {/* Título dinámico según estado */}
            {isForgot
            ? "Recuperar Contraseña"
            : isLogin
                ? "Bienvenido de Nuevo"
                : "Crear Cuenta"}
        </h1>
 
        <p className="text-gray-600 text-base max-w-md mx-auto">
            {/* Descripción debajo del título */}
            {/* SECCIÓN DEL FORMULARIO */}
            {isForgot ? (
                <ForgotPasswordForm
                    onSwitch={() => {
                        setIsForgot(false);
                    }}
                />
            ) : (
                <LoginForm onForgot={() => setIsForgot(true)} />
            )}
        </p>
        </div>
    </div>
    </div>
    );
};  
 
export { AuthPage };