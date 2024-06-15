import { Toaster } from "./components/ui/toaster";
import { Router } from "./routes/index.routes";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
