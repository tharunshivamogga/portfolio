const projects = [
  {
    title: "Vehicle Rental Management System",
    description: "Full-stack system using React.js and Spring Boot for vehicle listings and rentals."
  },
  {
    title: "Pharmacy Inventory Management System",
    description: "Manage medicine stock and sales with React and MySQL. Real-time inventory updates."
  },
  {
    title: "HSRP Number Plate Detection",
    description: "Python + OpenCV system to detect high-security number plates with OCR."
  },
  {
    title: "Fruit Spoilage Detection (Arduino)",
    description: "Sensor-based alert system to detect spoilage in fruits using Arduino."
  }
];

export default function Projects() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🛠 Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <div key={idx} className="p-4 border rounded bg-white shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
            <p className="text-sm">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}