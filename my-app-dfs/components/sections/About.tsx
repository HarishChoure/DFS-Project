export default function About() {
  const features = [
    {
      title: "Right Fund Selection",
      desc: "Expert analysis to find the best mutual funds matching your goals and risk appetite.",
      icon: "🛡️",
    },
    {
      title: "One-Stop Solution",
      desc: "Manage all your investments — SIP, SWP, Insurance — from a single trusted advisor.",
      icon: "🎯",
    },
    {
      title: "Maximum Returns Guidance",
      desc: "Strategic portfolio planning to help you earn the best possible returns over time.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🔷 LEFT CONTENT */}
        <div>
          
          {/* Small Tag */}
          <p className="text-yellow-500 font-semibold text-sm tracking-wide mb-3">
            ABOUT SWARAN FINPRO
          </p>

          {/* Heading */}
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
            Your Trusted Partner for{" "}
            <span className="text-yellow-500">Financial Growth</span>
          </h2>

          {/* Paragraphs */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            I'm <span className="font-semibold text-gray-900">Laxman</span>, an AMFI registered Mutual Fund Distributor with 5+ years of experience helping families and individuals build wealth, plan for retirement, buy their dream home, and fund their children's education.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At Swaran FinPro, we believe investing should be simple, safe, and accessible for everyone. Whether you're starting your first SIP of ₹500 or managing a large portfolio, I'm here to guide you every step.
          </p>

        </div>

        {/* 🔷 RIGHT CARDS */}
        <div className="space-y-6">
          
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 text-xl">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}