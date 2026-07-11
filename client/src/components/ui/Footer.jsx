import Container from "./Container";

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-24">
      <Container>
        <div className="py-8 flex justify-between items-center text-slate-500 text-sm">
          <p>Built using Mesh API</p>

          <p>Hackathon 2026</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;