import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { poster } from "../lib/api";
const cards = [
  { icon: Mail, label: "Email", value: "zakisadaqatzada@email.com" },
  { icon: Phone, label: "Phone", value: "+7 771 579 4055" },
  { icon: MapPin, label: "Location", value: "Astana city, Kazakhstan" }
];
export default function ContactSection() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [feedback, setFeedback] = useState({ type:"", text:"" });
  const [loading, setLoading] = useState(false);
  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  async function onSubmit(e) {
    e.preventDefault(); setLoading(true); setFeedback({type:"",text:""});
    try { const r = await poster("/contact", form); setFeedback({ type:"success", text:r.message || "Message sent successfully."}); setForm({ name:"", email:"", subject:"", message:"" }); }
    catch (err) { setFeedback({ type:"error", text: err?.response?.data?.message || "Failed to send message." }); }
    finally { setLoading(false); }
  }
  return <section id="contact" className="bg-[#071b2b] px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle title="Contact" accent="Me"/><div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2">
    <div><p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg md:leading-9">Feel free to contact me for freelance projects, portfolio websites, dashboards, or backend development work.</p><div className="mt-4 space-y-3 sm:mt-6 md:mt-8 md:space-y-5">{cards.map(item=>{const Icon=item.icon; return <div key={item.label} className="flex items-center gap-3 rounded-lg border border-cyan-400/20 bg-[#0a2236] p-4 sm:rounded-[16px] sm:gap-4 md:rounded-[24px] md:p-5"><div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-[#071b2b] sm:h-13 sm:w-13 md:h-14 md:w-14 md:rounded-xl"><Icon size={20} className="sm:w-[22px] md:w-[24px]"/></div><div><p className="text-sm font-bold sm:text-base md:text-lg">{item.label}</p><p className="text-xs text-slate-300 sm:text-sm">{item.value}</p></div></div>})}</div></div>
    <div className="rounded-[20px] border border-cyan-400/20 bg-[#0a2236] p-4 sm:rounded-[24px] sm:p-6 md:rounded-[28px] md:p-8"><form className="space-y-3 sm:space-y-4 md:space-y-5" onSubmit={onSubmit}>
      <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your Name" className="w-full rounded-lg border border-cyan-400/20 bg-[#071b2b] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base md:px-5 md:py-4"/>
      <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Your Email" className="w-full rounded-lg border border-cyan-400/20 bg-[#071b2b] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base md:px-5 md:py-4"/>
      <input name="subject" value={form.subject} onChange={onChange} type="text" placeholder="Subject" className="w-full rounded-lg border border-cyan-400/20 bg-[#071b2b] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base md:px-5 md:py-4"/>
      <textarea name="message" value={form.message} onChange={onChange} rows="5" placeholder="Your Message" className="w-full rounded-lg border border-cyan-400/20 bg-[#071b2b] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-cyan-400 sm:rounded-xl sm:px-4 sm:py-3 sm:text-base sm:rows-6 md:px-5 md:py-4"/>
      {feedback.text ? <p className={`text-xs sm:text-sm ${feedback.type==="success"?"text-green-400":"text-red-400"}`}>{feedback.text}</p> : null}
      <button type="submit" disabled={loading} className="w-full rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-bold text-[#071b2b] transition hover:bg-cyan-400 disabled:opacity-60 sm:rounded-xl sm:px-5 sm:py-3 sm:text-base md:px-6 md:py-4 md:text-lg">{loading ? "Sending..." : "Send Message"}</button>
    </form></div>
  </div></div></section>;
}
