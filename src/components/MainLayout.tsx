import Intro from "./Intro";
import About from "./About";
import Journey from "./Journey";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main">
        <div id="HOME"><Intro /></div>
        <div id="ABOUT"><About /></div>
        <div id="PROJECTS"><Works /></div>
        <Journey />
        <div id="CONTACT"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
