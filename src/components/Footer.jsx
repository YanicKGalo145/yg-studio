export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="studio-footer">
      <p>
        <span>Y-G</span> Studio · Y-G, quand vos idées prennent enfin forme ·{" "}
        {year}
      </p>
    </footer>
  );
}
