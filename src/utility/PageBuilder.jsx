import { Container } from "react-bootstrap";

const PageBuilder = ({ title, content }) => {
  return (
    <Container style={{ height: "100vh" }}>
      <h1 className="mt-5 text-center" style={{ color: "#fc0c8c" }}>
        {title}
      </h1>
      {content.map((paragraph, index) => {
        return (
          <p
            key={index}
            className="text-white"
            style={{ textAlign: "justify", lineHeight: "2rem" }}
          >
            {paragraph}
          </p>
        );
      })}
    </Container>
  );
};

export default PageBuilder;
