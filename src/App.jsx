import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import { routes } from "./routes";

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
