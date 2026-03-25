const stats = [
  { value: "3+", label: "Years of", label2: "experience" },
  { value: "30+", label: "Projects", label2: "completed" },
  { value: "5+", label: "Technologies", label2: "mastered" },
  { value: "34+", label: "Satisfied", label2: "client" }
];
export default function StatsSection() {
  return <section className="bg-[#071b2b] px-4 py-12 text-white sm:px-6 md:pb-16 md:pt-12 lg:px-8"><div className="mx-auto grid max-w-7xl gap-4 border-t border-white/10 pt-8 sm:gap-6 md:gap-10 md:pt-10 md:grid-cols-2 xl:grid-cols-4">{stats.map((item,index)=><div key={item.value+item.label} className={`flex items-center justify-center gap-3 text-center sm:gap-4 md:gap-6 xl:text-left ${index!==stats.length-1?"xl:border-r xl:border-white/20":""}`}><h3 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">{item.value}</h3><div className="text-left text-lg leading-tight text-slate-300 sm:text-xl md:text-2xl"><p>{item.label}</p><p>{item.label2}</p></div></div>)}</div></section>;
}
