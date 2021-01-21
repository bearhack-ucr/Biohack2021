import '../styles/globals.css'
// Removes default focus border because its ugly
import 'what-input';
import '../styles/themes.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
