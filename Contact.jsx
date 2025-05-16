import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const res = await fetch("#", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6">Hai să colaborăm! Completează formularul de mai jos:</p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Numele tău"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Emailul tău"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Mesajul tău"
          required
          className="w-full border px-4 py-2 rounded min-h-[120px]"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Trimite
        </button>
        {status === "success" && <p className="text-green-600">Mesaj trimis cu succes!</p>}
        {status === "error" && <p className="text-red-600">A apărut o eroare. Încearcă din nou.</p>}
      </form>
    </section>
  );
};

export default Contact;
