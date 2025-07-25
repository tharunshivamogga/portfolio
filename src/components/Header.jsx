export default function Header() {
  return (
    <header className="bg-black text-white py-6 text-center">
      <h1 className="text-3xl font-bold">Tharun A</h1>
      <p className="mt-1">Computer Science Student | Full Stack Developer</p>
      <div className="mt-2 space-x-4">
        <a
  href="/resume.pdf"
  download
  className="text-blue-300 hover:underline"
>
  📄 Download Resume
</a>

        <a href="mailto:tharunshivamogga@gmail.com" className="text-blue-300 hover:underline">tharunshivamogga@gmail.com</a>
        <a href="https://github.com/tharunshivamogga" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">💻 GitHub</a>
        <a href="https://www.linkedin.com/in/tharun-80880-ts" target="_blank" rel="noreferrer" className="text-blue-300 hover:underline">🔗 LinkedIn</a>
      </div>
    </header>
  );
}
