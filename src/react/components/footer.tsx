import "./footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="container">
      <span>
        © {year}{" "}
        <a href="https://joeyjiron.com" className="footer-link">
          Joey Jiron
        </a>{" "}
        . All rights reserved.
      </span>
    </footer>
  );
}
