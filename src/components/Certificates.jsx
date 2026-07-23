import React from 'react';
import { certificates } from '../data/certificatesData';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-emerald-400" />
            الشهادات والتراخيص المعتمدة
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            اعتمادات ودورات متخصصة في الذكاء الاصطناعي، تعلم الآلة، وتطوير البرمجيات من أكبر المؤسسات العالمية.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between group"
            >
              {/* Certificate Image Preview */}
              {cert.image && (
                <div className="w-full h-48 sm:h-56 overflow-hidden bg-slate-950 border-b border-slate-700/50">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
              )}

              {/* Certificate Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                        <p className="text-emerald-400 font-medium text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full border border-slate-600 shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  {/* Skills Badges */}
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">المهارات المكتسبة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="flex items-center gap-1.5 text-xs bg-slate-900/80 text-slate-300 px-3 py-1 rounded-lg border border-slate-700/50"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}