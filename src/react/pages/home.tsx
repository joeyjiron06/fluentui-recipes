import BasicLayout from "../layouts/basicLayout";
import {
  Button,
  Display,
  Body1Strong,
  Body1Stronger,
  Subtitle2,
  Caption1,
  Subtitle1,
} from "@fluentui/react-components";
import FluentLogo from "../icons/fluent";
import ReactLogo from "../icons/react";
import FileUploadImg from "../icons/file-upload.png";
import NavbarsImg from "../icons/navbars.png";
import "./home.scss";

type Category = {
  title: string;
  description: string;
  href: string;
  image: React.ReactNode;
};

const categories: Category[] = [
  {
    title: "File Upload",
    description: "12 components",
    href: "/file-upload",
    image: <img src={FileUploadImg.src} alt="file upload" />,
  },
  {
    title: "Navbars",
    description: "12 components",
    href: "/navbars",
    image: <img src={NavbarsImg.src} alt="navbars" />,
  },
];

export default function Home() {
  return (
    <BasicLayout className="container">
      <section className="hero">
        <div className="hero-text-container">
          <hgroup>
            <Body1Strong>UI BLOCKS WRITTEN IN REACT</Body1Strong>
            <Display as="h1">
              Beautiful UI components, crafted with Fluent UI
            </Display>
          </hgroup>

          <div className="hero-logos-container">
            <FluentLogo />

            <div className="hero-logo-react-icon-container">
              <ReactLogo className="hero-logo-react-icon" />
              <Body1Stronger>React</Body1Stronger>
            </div>
          </div>

          <Subtitle2>
            Professionally designed, fully responsive, expertly crafted
            component examples that you can copy/paste into your apps built with
            Fluent UI 2 React and customize to your hearts content.
          </Subtitle2>

          <div>
            <Button appearance="primary">Read Docs</Button>
          </div>
        </div>

        <div>right side</div>
      </section>

      <section className="components-section">
        <hgroup>
          <Subtitle1 as="h2">Components</Subtitle1>
        </hgroup>
        <div className="categories-grid">
          {categories.map((category) => (
            <a
              href={category.href}
              key={category.title}
              className="category-card"
            >
              <div className="category-card-image">{category.image}</div>
              <div className="category-card-text">
                <Body1Stronger>{category.title}</Body1Stronger>
                <Caption1>{category.description}</Caption1>
              </div>
            </a>
          ))}
        </div>
      </section>
    </BasicLayout>
  );
}
