export default function Services() {
  const services = [
    {
      title: "Mutual Funds",
      desc: "Diversified equity, debt & hybrid funds for every goal.",
      icon: "📊",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "SIP",
      desc: "Systematic Investment Plans starting from just ₹500/month.",
      icon: "🔄",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "SWP",
      desc: "Regular income through Systematic Withdrawal Plans.",
      icon: "⬇️",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Loan Against MF",
      desc: "Get instant liquidity without redeeming your investments.",
      icon: "🏦",
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Insurance",
      desc: "Protect your family with term, health & life insurance.",
      icon: "🛡️",
      color: "bg-red-100 text-red-600",
    },
    {
      title: "NFO",
      desc: "Early access to New Fund Offers with expert analysis.",
      icon: "✨",
      color: "bg-cyan-100 text-cyan-600",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔷 Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-yellow-500 font-semibold text-sm tracking-wide">
            OUR SERVICES
          </p>

          <h2 className="mt-2 font-[var(--font-heading)] text-4xl md:text-5xl font-semibold text-gray-900">
            Products & Services
          </h2>

          <p className="mt-3 text-gray-500">
            Comprehensive financial solutions tailored to your life goals.
          </p>
        </div>

        {/* 🔷 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((item, i) => (
            <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm 
                        hover:shadow-lg 
                        hover:-translate-y-3 
                        hover:scale-105
                        transition-all duration-300 ease-in-out cursor-pointer"
            >
              
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-xl ${item.color}`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 font-semibold text-gray-900 text-lg hover:text-yellow-500">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}