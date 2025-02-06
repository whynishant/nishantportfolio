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
       {/* Spotify Playlist */}
           <div className="spotify-playlist">
        <iframe
          style={{ borderRadius: '12px', position: 'fixed', bottom: '10px', right: '10px', zIndex: '1000' }}
          src="https://open.spotify.com/embed/playlist/1Vi7vReqfgQRoLrEsnR0KO?utm_source=generator&theme=0"
          width="300"
          height="150"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
