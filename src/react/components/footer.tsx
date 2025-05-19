import "./footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <span>
        © {year} <a href="https://joeyjiron.com">Joey Jiron</a> . All rights
        reserved.
      </span>
    </footer>
  );
}
