export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Nishant</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Exploring, creating, and sharing my journey with the world.
            <br /> Leveraging my skills and passions to drive positive change and inspire others to do the same.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/nishant11/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get In Touch</a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
