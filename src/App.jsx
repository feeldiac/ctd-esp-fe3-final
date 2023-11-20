import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import { routes } from "./routes";
import { GlobalContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <GlobalContextProvider>
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
      </GlobalContextProvider>
    </Suspense>
  );
}

export default App;
