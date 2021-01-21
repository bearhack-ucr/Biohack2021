import '../styles/globals.css'
// Removes default focus border because its ugly
import 'what-input';
import { AuthProvider } from "react-auth-kit";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
  <AuthProvider
    authStorageType={"cookie"}
    cookieDomain="localhost"
    cookieSecure="false"
  ><Component {...pageProps} /></AuthProvider>
  </Provider>
}

export default MyApp
