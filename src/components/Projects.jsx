import { useState } from 'react';
import { projects } from '../data/projectsData';
import { Code2, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-slate-950 text-slate-100 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* العنوان */}
        <div className="mb-16">
          <h2 className="text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-2">معرض الأعمال</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-100">مشاريع تم بناؤها بمعايير برمجية عالية</h3>
        </div>

        {/* شبكة الكروت (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all group flex flex-col justify-between"
            >
              {/* الصورة المصغرة */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* بيانات المشروع */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                  
                  {/* التقنيات */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-emerald-400 border border-slate-700/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-sm font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
                >
                  <span>عرض التفاصيل</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up / Modal التفاصيل الكاملة للمشروع */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-slate-100">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white font-bold">✕</button>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedProject.fullDescription}</p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h5 className="text-emerald-400 font-semibold text-xs mb-1">المشكلة</h5>
                <p className="text-slate-300 text-sm">{selectedProject.problem}</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h5 className="text-emerald-400 font-semibold text-xs mb-1">الحل البرمجي</h5>
                <p className="text-slate-300 text-sm">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="flex gap-4">
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-slate-200 hover:bg-slate-700 text-sm">
                  <Code2 size={16} /> الكود على GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}