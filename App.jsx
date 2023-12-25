import "./app.scss"
import Contact from "./compos/contact/Contact";
import Navbar from "./compos/navbar/navbar";

const App = () => {
  return(
  <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
</div>
);
};
export default App;
