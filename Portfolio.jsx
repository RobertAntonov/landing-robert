const Portfolio = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">Portofoliu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-gray-200 h-64">Imagine 1</div>
        <div className="bg-gray-200 h-64">Imagine 2</div>
        <div className="bg-gray-200 h-64">Imagine 3</div>
      </div>
    </section>
  );
};

export default Portfolio;
