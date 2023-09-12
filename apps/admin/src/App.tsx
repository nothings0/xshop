import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MantineProvider } from "ui/mantine";

function App() {
  return (
    <MantineProvider withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
