import ProviderProducts from "./Context/ProviderPorducts.jsx";
import Routers from "./routers/Routers";

function App() {
  return (
    <ProviderProducts>
      <Routers />
    </ProviderProducts>
  );
}

export default App;
