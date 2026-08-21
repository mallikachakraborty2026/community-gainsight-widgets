import "./banner.css";

export function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Welcome to Siemens Community</h1>

        <p>
          Find answers, connect with experts, and explore the community.
        </p>

        <button type="button" className="banner-button">
          Learn More
        </button>
      </div>
    </section>
  );
}