# bloomspageco
website
import React from "react";
import { Instagram, ShoppingBag, Mail } from "lucide-react";

// Sample data - customize as needed
const products = [
  {
    icon: "📖",
    title: "Bible Activity Pages",
    text: "Engaging, faith-based learning activities designed for curious minds."
  },
  {
    icon: "📓",
    title: "Personalized Notebooks",
    text: "Custom-designed journals for creativity, reflection, and growth."
  },
  {
    icon: "📚",
    title: "Reading Trackers",
    text: "Beautiful trackers to inspire a love of reading and learning."
  }
];

const values = ["Faith-Centered", "Eco-Friendly", "Beautifully Designed", "Kid-Approved"];

export default function BloomspageHome() {
  return (
    <div className="min-h-screen bg-white">
      <section id="shop" className="py-20 bg-[#FFF8F1]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-[#D98B73] font-semibold mb-3">What We Create</p>
            <h2 className="text-4xl font-bold">Paper goods that bloom with purpose.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div key={index} className="rounded-3xl border border-[#F6D4C7] shadow-sm bg-white p-7">
                <div className="w-14 h-14 rounded-2xl bg-[#C9D8C2] flex items-center justify-center mb-5 text-[#4B3B35] text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#6B5B54]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#D98B73] font-semibold mb-3">Brand Values</p>
            <h2 className="text-4xl font-bold mb-6">Designed for little learners, loving homes, and creative hearts.</h2>
            <p className="text-lg text-[#6B5B54] mb-6">
              Our products are made for moms, homeschool families, teachers, church ministries, and anyone looking for beautiful learning tools with a gentle faith-centered foundation.
            </p>
            <div className="flex flex-wrap gap-3">
              {values.map((value) => (
                <span key={value} className="bg-[#FFF8F1] border border-[#F6D4C7] rounded-full px-4 py-2 text-sm font-medium">
                  {value}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-[#F6D4C7] p-6 min-h-[190px] flex items-end">
              <h3 className="text-2xl font-bold">Bible Activity Pages</h3>
            </div>
            <div className="rounded-3xl bg-[#C9E2F2] p-6 min-h-[190px] flex items-end">
              <h3 className="text-2xl font-bold">Personalized Notebooks</h3>
            </div>
            <div className="rounded-3xl bg-[#C9D8C2] p-6 min-h-[190px] flex items-end">
              <h3 className="text-2xl font-bold">Reading Trackers</h3>
            </div>
            <div className="rounded-3xl bg-[#F4C95D]/60 p-6 min-h-[190px] flex items-end">
              <h3 className="text-2xl font-bold">Gratitude Journals</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#C9D8C2]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-5">Be the first to see our launch collection.</h2>
          <p className="text-lg text-[#4B3B35]/80 mb-8">Join our list for printable freebies, product updates, and faith-inspired learning resources.</p>
          <div className="bg-white rounded-full p-2 flex flex-col sm:flex-row gap-2 shadow-sm max-w-xl mx-auto">
            <input className="flex-1 px-5 py-3 rounded-full outline-none" placeholder="Enter your email address" />
            <button className="rounded-full bg-[#D98B73] hover:bg-[#c97a64] text-white px-7 py-3 font-medium transition">
              Join the List
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-12 bg-[#4B3B35] text-white">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">BloomsPage Co.</h2>
            <p className="text-white/70">Growing little hearts through creativity.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Coming Soon</h3>
            <p className="text-white/70">Printable learning packs, personalized paper goods, children's books, and faith-inspired resources.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><Instagram className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><ShoppingBag className="w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition"><Mail className="w-5 h-5" /></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
