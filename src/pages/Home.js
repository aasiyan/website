import About from "../components/About/About";
import ContactForm from "../components/Contact/ContactForm";
import Hero from "../components/Hero/Hero";
import News from "../components/News/News";
// import Records from "../components/Records/Records";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Records /> */}
      <News />
      <ContactForm />
    </div>
  );
}

export default Home;
