/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Award, 
  Globe, 
  ChevronRight,
  ExternalLink,
  Code,
  BarChart3,
  Languages
} from "lucide-react";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header / Hero Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">NARZIKULOVA MUKADDAS</h1>
            <p className="text-emerald-600 font-medium text-sm">Academic Scholar & Social Leader</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-600"
          >
            <button 
              onClick={() => window.print()}
              className="no-print flex items-center gap-1.5 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium shadow-sm"
            >
              <ExternalLink size={16} />
              <span>Download PDF</span>
            </button>
            <div className="h-4 w-px bg-gray-200 mx-2 hidden md:block no-print"></div>
            <a href="mailto:narziqulovamuqaddas@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a href="tel:01072936602" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <Phone size={16} />
              <span>010-7293-6602</span>
            </a>
            <a href="https://www.linkedin.com/in/mukaddas-narzikulova-b1799a340/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>Seoul, South Korea</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        
        {/* Professional Summary */}
        <motion.section {...fadeIn} id="summary" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Professional Summary</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light max-w-4xl mx-auto text-center italic">
            "Top 0.3% Academic Scholar & Award-Winning Social Leader. Currently ranked #1 out of 293 students at Kyung Hee University with a perfect 4.3 GPA. A 'Gold Fond' laureate recognized for exceptional societal contributions."
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Education & Experience */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Education */}
            <section id="education" className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-emerald-600" size={24} />
                <h2 className="text-xl font-bold tracking-tight">Education</h2>
              </div>
              
              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8">
                <motion.div variants={fadeIn} className="relative pl-8 border-l-2 border-emerald-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Kyung Hee University</h3>
                      <p className="text-gray-600">B.A. in Business Management (English Track)</p>
                    </div>
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 md:mt-0">Expected Aug 2027</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span><strong>Academic Rank:</strong> #1 out of 293 students (2025/2 Semester)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span><strong>GPA:</strong> 4.18 / 4.3 (Cumulative)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span><strong>Honors:</strong> Full Academic Scholarship A (100th percentile performance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span><strong>Certifications:</strong> FMVA (Financial Modeling & Valuation Analyst) — Candidate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span><strong>Test Scores:</strong> IELTS: 7.5 (Expert User)</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={fadeIn} className="relative pl-8 border-l-2 border-emerald-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-200 border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">1st Specialized Presidential School</h3>
                      <p className="text-gray-600">Specialized in Math-Physics-IT</p>
                    </div>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">Graduated 2023</span>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span><strong>GPA:</strong> 5.0 / 5.0 (Graduated with Honors and Silver Medal)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="mt-1 text-emerald-400 flex-shrink-0" />
                      <span>Selected for the nation's most prestigious specialized school system based on elite academic testing.</span>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </section>

            {/* Experience */}
            <section id="experience" className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-emerald-600" size={24} />
                <h2 className="text-xl font-bold tracking-tight">Leadership & Experience</h2>
              </div>

              <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-10">
                <motion.div variants={fadeIn} className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">Youth Affairs Agency of Uzbekistan</h3>
                      <p className="text-emerald-600 font-medium">Regional Coordinator — “Qizlar Ovozi” & Youth Union Leader</p>
                    </div>
                    <span className="text-sm font-bold text-gray-400 mt-1 md:mt-0">2020 – 2023</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Social Impact</h4>
                      <p className="text-sm text-gray-600">Orchestrated regional youth empowerment programs impacting 1,000+ young women, focusing on entrepreneurship, health, and professional skill acquisition.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Strategic Leadership</h4>
                      <p className="text-sm text-gray-600">Managed a portfolio of free extracurricular courses (English, Russian, Korean, Vocational Skills), bridging the resource gap for underprivileged youth.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Executive Networking</h4>
                      <p className="text-sm text-gray-600">Collaborated with high-profile women leaders to deliver seminars on leadership and community contribution.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Public Speaking</h4>
                      <p className="text-sm text-gray-600">Served as the regional spokesperson, delivering keynote addresses to large audiences to drive social change.</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">BEST Education Center</h3>
                      <p className="text-emerald-600 font-medium">IELTS Specialist / English Instructor</p>
                    </div>
                    <span className="text-sm font-bold text-gray-400 mt-1 md:mt-0">2022 – 2023</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600"><strong>Performance Metrics:</strong> Mentored 30+ students to achieve IELTS 6.5+ within 4 months, achieving a 100% success rate.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600"><strong>Curriculum Design:</strong> Developed accelerated learning modules that improved proficiency by an average of 20% per term.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </section>
          </div>

          {/* Right Column: Skills, Honors, Languages */}
          <div className="space-y-12">
            
            {/* Honors & Achievements */}
            <section id="honors" className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <Trophy className="text-emerald-600" size={20} />
                <h2 className="text-lg font-bold tracking-tight">Honors</h2>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Award className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Gold Fond Member</h4>
                    <p className="text-xs text-gray-500 mt-1">Highest regional honor for societal contribution (Awarded at age 15).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Award className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Bronze Medalist</h4>
                    <p className="text-xs text-gray-500 mt-1">Regional Girls’ Boxing Championship (Discipline & Resilience).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Award className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">100+ Certifications</h4>
                    <p className="text-xs text-gray-500 mt-1">Mathematics Olympiads, English Proficiency, and Community Service.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Competencies */}
            <section id="skills" className="space-y-6">
              <div className="flex items-center gap-3">
                <Code className="text-emerald-600" size={20} />
                <h2 className="text-lg font-bold tracking-tight">Competencies</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 size={16} className="text-emerald-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Technical</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Excel (Data Analysis)", "Financial Modeling", "PowerPoint", "Social Media Strategy"].map(skill => (
                      <span key={skill} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase size={16} className="text-emerald-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Analytical</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Strategic Planning", "Operations Management", "Quantitative Research", "Project Coordination"].map(skill => (
                      <span key={skill} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Languages size={16} className="text-emerald-500" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Languages</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">English</span>
                      <span className="text-xs font-bold text-emerald-600">IELTS 7.5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Uzbek</span>
                      <span className="text-xs text-gray-400">Native</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Korean</span>
                      <span className="text-xs text-gray-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Turkish / Russian</span>
                      <span className="text-xs text-gray-400">Basic</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="text-sm text-gray-500">© 2026 NARZIKULOVA MUKADDAS. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/mukaddas-narzikulova-b1799a340/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:narziqulovamuqaddas@gmail.com" className="text-gray-400 hover:text-emerald-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
