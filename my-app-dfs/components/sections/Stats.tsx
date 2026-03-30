export default function Stats() {
  const stats = [
    {
      value: "2 Crore+",
      label: "Assets Under Management",
      icon: "📈",
    },
    {
      value: "5+",
      label: "Years Experience",
      icon: "⏱️",
    },
    {
      value: "200+",
      label: "Happy Investors",
      icon: "👥",
    },
    {
      value: "MP",
      label: "Based Advisor",
      icon: "📍",
    },
  ];

  return (
    <section className="relative z-10 -mt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="text-yellow-500 text-xl mb-3">
              {item.icon}
            </div>

            {/* Value */}
            <h2 className="font-[var(--font-playfair)] text-2xl font-semibold text-gray-900">
              {item.value}
            </h2>

            {/* Label */}
            <p className="text-gray-500 text-sm mt-2">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}