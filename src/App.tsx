import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

(function() {
  let host = window.location.hostname;
  let canonicalDomain = 'hauzofdabs.com';
  if (host !== canonicalDomain && host !== 'localhost' && host !== '127.0.0.1' && !host.startsWith('192.168.') && host.indexOf('readdy.ai') === -1 && host.indexOf('webcontainer.io') === -1) {
    window.location.replace('https://' + canonicalDomain + window.location.pathname + window.location.search + window.location.hash);
  }
})();

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AppRoutes />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;