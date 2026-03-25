export default function SectionTitle({ title, accent }) {
  return <div className="mb-8 text-center sm:mb-10 md:mb-14"><h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{title} <span className="text-cyan-400">{accent}</span></h2></div>;
}
