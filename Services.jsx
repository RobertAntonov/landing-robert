const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Servicii</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 border rounded shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Fotografie</h3>
          <p>Portrete, evenimente, fotografie de produs și brand personal.</p>
        </div>
        <div className="p-6 border rounded shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Video & Reels</h3>
          <p>Clipuri scurte cu impact, montaj dinamic, storytelling modern.</p>
        </div>
        <div className="p-6 border rounded shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
          <p>Strategie, planificare, design vizual și conținut care convertește.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
