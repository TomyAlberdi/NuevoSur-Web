import "@/App.scss";
import CustomRouter from "@/routes.jsx";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
import ProductContextComponent from "@/Hooks/ProductContextComponent";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

function App() {
  useEffect(() => {
    register();
  }, []);

  return (
    <KindeProvider
      clientId="38d7c265f1a14882b4cfde437a22d383"
      domain="https://nuevosursa-dev.us.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
      audience="ns-backend-api"
    >
      <div className="App">
        <ProductContextComponent>
          <CustomRouter />
        </ProductContextComponent>
      </div>
    </KindeProvider>
  );
}

export default App;
