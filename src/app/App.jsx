import { AppRoutes } from "./router/AppRoutes.jsx";
import { Toaster, toast } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
      position="top-center"
      toastOptions={{
        style: {
          fontFamily:"inherit",
          fontWeight: 600,
          fontSize: "1rem",
          borderRadius: "8px"
        }
      }}
      />

      {/*<button 
      onClick={() => toast("¡Hola, mundo!")}
      style={{margin:"20px"}}
      >
        Mensaje 
      </button>*/}

      <AppRoutes />
    </>
  );
}

export default App
