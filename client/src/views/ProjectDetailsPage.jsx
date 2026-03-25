import { Link, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const { data: project, loading, error } = useApi(`/projects/${slug}`);
  return <section className="bg-[#071b2b] px-4 py-16 text-white sm:px-6 md:pb-24 md:pt-36 lg:px-8"><div className="mx-auto max-w-5xl">
    {loading ? <p className="text-slate-300">Loading...</p> : error ? <p className="text-red-400">{error}</p> : project ? <>
      <p className="text-xs uppercase tracking-wider text-cyan-400 sm:text-sm">{project.category}</p>
      <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl md:mt-3 md:text-4xl lg:text-5xl">{project.title}</h1>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-6 md:text-lg md:leading-9">{project.summary}</p>
      <div className="my-4 h-48 rounded-[16px] bg-gradient-to-br from-cyan-500/30 to-[#0a2236] sm:rounded-[20px] md:my-8 md:h-80 md:rounded-[24px]" />
      <div className="grid gap-3 sm:gap-4 md:gap-6 md:grid-cols-2">
        <div className="rounded-[16px] border border-cyan-400/20 bg-[#0a2236] p-4 sm:rounded-[20px] sm:p-5 md:rounded-[24px] md:p-6"><h2 className="text-lg font-bold sm:text-xl md:text-2xl">Overview</h2><p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7 sm:mt-3 md:mt-4 md:text-base md:leading-8">{project.description}</p></div>
        <div className="rounded-[16px] border border-cyan-400/20 bg-[#0a2236] p-4 sm:rounded-[20px] sm:p-5 md:rounded-[24px] md:p-6"><h2 className="text-lg font-bold sm:text-xl md:text-2xl">Solution</h2><p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7 sm:mt-3 md:mt-4 md:text-base md:leading-8">{project.solution}</p></div>
      </div>
      <div className="mt-3 rounded-[16px] border border-cyan-400/20 bg-[#0a2236] p-4 sm:mt-4 sm:rounded-[20px] sm:p-5 md:mt-6 md:rounded-[24px] md:p-6"><h2 className="text-lg font-bold sm:text-xl md:text-2xl">Tech Stack</h2><div className="mt-2 flex flex-wrap gap-2 sm:mt-3 md:mt-4 md:gap-3">{(project.techStack||[]).map(tech=><span key={tech} className="rounded-full border border-cyan-400/20 bg-[#071b2b] px-3 py-1 text-xs text-slate-200 sm:px-4 sm:py-2 sm:text-sm">{tech}</span>)}</div></div>
      <Link to="/projects" className="mt-4 inline-block rounded-lg border border-cyan-500 px-4 py-2 text-xs font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-[#071b2b] sm:px-5 sm:py-2 sm:text-sm md:mt-8 md:px-6 md:py-3">Back to projects</Link>
    </> : null}
  </div></section>;
}
