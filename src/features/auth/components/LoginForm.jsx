export const LoginForm = () => {

    return (
        <form action="space-y-5">
            <div>
                <label htmlFor="block text-sm medium
                text-gray-800 mb-1.5">
                    Email o Usuario
                </label>

                <input className="w-full px-3 py-2 mb-2 text-sm
                    border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-blue-500"/>

                <div>
                    <label htmlFor="block text-sm medium
                     text-gray-800 mb-1.5">
                        Constraseña
                    </label>

                    <input className="w-full px-3 py-2 mb-4 text-sm
                    border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-blue-500"/>
                </div>

                <button className="w-full py-2 text-sm font-medium
                text-white bg-blue-500 rounded-lg hover:bg-blue-600
                focus:ring-2 focus:ring-blue-500">
                    Iniciar Sesión
                </button>
            </div>
        </form>
    );
}