"use client";
import { useState } from "react";
import { openWhatsApp } from "@/utils/whatsapp";
export default function Calculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  // SIP Formula
  const calculateSIP = () => {
    const r = rate / 12 / 100;
    const n = years * 12;

    const invested = monthly * n;
    const futureValue =
      monthly *
      ((Math.pow(1 + r, n) - 1) / r) *
      (1 + r);

    const returns = futureValue - invested;

    return {
      invested: Math.round(invested),
      returns: Math.round(returns),
      total: Math.round(futureValue),
    };
  };

  const data = calculateSIP();

  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <p className="text-yellow-500 font-semibold text-sm">
          PLAN YOUR FUTURE
        </p>

        <h2 className="mt-2 font-[var(--font-heading)] text-4xl md:text-5xl font-semibold text-gray-900">
          SIP Calculator
        </h2>

        <p className="mt-3 text-gray-500">
          See how small monthly investments can grow into a large corpus over time.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto mt-12 bg-white rounded-3xl shadow-md p-8 grid md:grid-cols-2 gap-10">
        
        {/* 🔷 LEFT SIDE */}
        <div className="space-y-8">
          
          {/* Monthly Investment */}
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>Monthly Investment</span>
              <span className="text-yellow-600 font-semibold">
                ₹{monthly.toLocaleString("en-IN")}
              </span>
            </div>

            <input
              type="range"
              min={500}
              max={100000}
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="w-full mt-2 accent-yellow-500"
            />

            <div className="flex justify-between text-xs text-gray-500">
              <span>₹500</span>
              <span>₹1,00,000</span>
            </div>
          </div>

          {/* Time Period */}
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>Time Period</span>
              <span className="text-yellow-600 font-semibold">
                {years} Years
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={30}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full mt-2 accent-yellow-500"
            />

            <div className="flex justify-between text-xs text-gray-500">
              <span>1 Year</span>
              <span>30 Years</span>
            </div>
          </div>

          {/* Expected Return */}
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>Expected Return (p.a.)</span>
              <span className="text-yellow-600 font-semibold">
                {rate}%
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={30}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full mt-2 accent-yellow-500"
            />

            <div className="flex justify-between text-xs text-gray-500">
              <span>1%</span>
              <span>30%</span>
            </div>
          </div>

        </div>

        {/* 🔷 RIGHT SIDE */}
        <div className="flex flex-col justify-between">
          
          {/* Progress Bar */}
          <div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-900 to-yellow-400"
                style={{
                  width: `${(data.returns / data.total) * 100}%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs mt-2 text-gray-500">
              <span>Invested</span>
              <span>Returns</span>
            </div>
          </div>

          {/* Values */}
          <div className="mt-8 space-y-4">
            
            <div>
              <p className="text-gray-500 text-sm">Total Invested</p>
              <p className="text-xl font-semibold">
                ₹{data.invested.toLocaleString("en-IN")}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Estimated Returns</p>
              <p className="text-xl font-semibold text-green-600">
                ₹{data.returns.toLocaleString("en-IN")}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Total Corpus</p>
              <p className="text-3xl font-bold text-yellow-600">
                ₹{data.total.toLocaleString("en-IN")}
              </p>
            </div>

          </div>

          {/* Button */}
          <button onClick={openWhatsApp} className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            ₹ Start Investing
          </button>

        </div>

      </div>
    </section>
  );
}