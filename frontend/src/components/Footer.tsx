const Footer: React.FC = () => {
  return (
    <footer
      className="footer footer-center p-10 text-primary-content"
      style={{
        width: "100%",
      }}
    >
      <aside
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          width: "100%",
        }}
      >
        <p>
          Copyright © 2024 Seedling Education - All rights reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;