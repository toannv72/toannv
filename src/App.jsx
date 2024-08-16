import { RouterProvider } from "react-router-dom";
import { routers } from "./routes.tsx";

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
