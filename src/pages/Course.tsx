import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Factory, Layers, Brush, ArrowRight, Medal, Bolt, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoRound from '../assets/logo-round.png';

export function Course() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 max-w-7xl mx-auto space-y-12 pb-24">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <div className="w-6 h-6 bg-white rounded-full p-1 flex items-center justify-center">
              <img 
                src={logoRound}
                alt="TkxHi Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold tracking-widest uppercase">Basic 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-[0.9] lg:max-w-xl">
            Impressão 3D: <span className="text-primary">Basic</span>.
          </h1>
          <p className="text-lg text-zinc-900 font-medium max-w-md leading-relaxed">
            "Pense, prepare, imprima!" Domine os fundamentos da manufatura aditiva e transforme suas ideias em objetos tangíveis.
          </p>
          <p className="text-sm text-on-surface-variant/60 font-bold uppercase tracking-widest">
            Por G. P. Stoppa & M. H. Stoppa
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/registro"
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              Tenho Interesse
              <Rocket size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCynrekSoctkPTLp5_Pm4FR-P7InIICaFL-Ux9ULZvRgmIgZeUczoKpzYSlAlpp3z-1dN-x9y1gKceTLBGSXwXT75UoKj_6v54YiMPgjgXHcMyUH-Zq0G_yFirtH_JapzjBRal1AXWohPsZUUXR-WIUaUPwhCkRpiElR6mkND8S1li71MFPhaQgdPsW9N_Blx49bM_MqlVJ9lHsXaOgLGvBm0y9DlmVObYNLEuZkL4EkSkiNdoDjxSggaaJKgvNXwTrVhDVNShrZhk" 
              alt="3D printer nozzle"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-secondary-container text-white p-6 rounded-2xl z-20 shadow-xl max-w-[180px]">
            <span className="text-4xl font-black block mb-1">100%</span>
            <span className="text-xs font-bold uppercase tracking-wider leading-none">Prático & Técnico</span>
          </div>

          <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-outline-variant/20 z-20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Medal size={24} />
            </div>
            <div className="text-sm font-bold text-zinc-900">Certificação</div>
          </div>
        </motion.div>
      </section>

      {/* Modules Grid */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface">Módulos</h2>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
          <p className="text-on-surface-variant max-w-xs text-sm font-medium">Dividido em 4 pilares fundamentais para transformar sua produção.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Introdução",
              icon: Factory,
              color: "bg-primary",
              textColor: "text-primary",
              hoverBorder: "hover:border-primary/20",
              shadow: "shadow-primary/20",
              desc: "História, tecnologias (FDM, SLA, SLS), Projeto RepRap e anatomia da impressora Ender 3."
            },
            {
              title: "Manutenção",
              icon: Bolt,
              color: "bg-secondary-container",
              textColor: "text-secondary",
              hoverBorder: "hover:border-secondary/20",
              shadow: "shadow-secondary-container/20",
              desc: "Preservação, limpeza, lubrificação, troca de filamento e solução de falhas comuns como warping e stringing."
            },
            {
              title: "Configuração",
              icon: Layers,
              color: "bg-tertiary",
              textColor: "text-tertiary",
              hoverBorder: "hover:border-tertiary/20",
              shadow: "shadow-tertiary/20",
              desc: "Painel de controle, pré-aquecimento, nivelamento da mesa (Bed Levelling) e distância correta do bico."
            },
            {
              title: "Fatiamento",
              icon: Rocket,
              color: "bg-green-light",
              textColor: "text-green-light",
              hoverBorder: "hover:border-green-light/20",
              shadow: "shadow-green-light/20",
              desc: "Domínio do OrcaSlicer: parâmetros de qualidade, resistência, suportes e calibração avançada."
            }
          ].map((module, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`group bg-white hover:bg-surface-container-lowest transition-all p-8 rounded-[2rem] flex flex-col justify-start min-h-[320px] border border-outline-variant/10 ${module.hoverBorder} shadow-sm hover:shadow-xl`}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl ${module.color} flex items-center justify-center text-white shadow-lg ${module.shadow} group-hover:scale-110 transition-transform`}>
                  <module.icon size={30} />
                </div>
                <h3 className={`text-xl font-bold ${module.textColor}`}>{module.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{module.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-surface-container-high rounded-[3rem] p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-on-surface">Especificações Técnicas</h2>
            <div className="space-y-6">
              {[
                { label: "Materiais Abordados", bgColor: "bg-primary", textColor: "text-primary", dotColor: "bg-primary", items: ["PLA (Foco Prático)", "ABS", "PETG", "TPU", "Nylon", "Policarbonato", "Compósitos"] },
                { label: "Ecossistema de Software", bgColor: "bg-secondary", textColor: "text-secondary", dotColor: "bg-secondary", items: ["OrcaSlicer (Foco Principal)", "Cura", "PrusaSlicer", "Tinkercad", "Fusion 360", "Blender"] },
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`mt-1 w-2 h-2 rounded-full ${spec.dotColor} flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2 uppercase text-xs tracking-widest">{spec.label}</h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.items.map((item, i) => (
                        <span key={i} className={`${spec.bgColor}/10 ${spec.textColor} px-3 py-1 rounded-full text-[11px] font-bold`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-2 h-2 rounded-full bg-tertiary flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2 uppercase text-xs tracking-widest">Requisitos Mínimos</h4>
                  <p className="text-sm text-on-surface-variant">Notebook com requisitos mínimos para rodar o OrcaSlicer.</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/40 rounded-2xl border border-white/60">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-primary">+8h</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest leading-tight">
                  Práticas e Presenciais
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="p-12 bg-primary/5 rounded-[2rem] border border-primary/10 text-center space-y-4">
              <Rocket size={64} className="text-primary mx-auto" />
              <h3 className="text-2xl font-bold text-on-surface">Mão na Massa</h3>
              <p className="text-on-surface-variant text-sm max-w-xs">
                Aprendizado focado na prática real com equipamentos profissionais e suporte individualizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center space-y-8">
        <h3 className="text-3xl font-bold text-on-surface">Quer ser avisado sobre a próxima turma?</h3>
        <Link
          to="/registro"
          className="inline-block bg-primary hover:bg-primary-container text-white px-12 py-5 rounded-full font-black text-lg transition-all active:scale-95 shadow-2xl shadow-primary/30"
        >
          Entrar na Lista de Espera
        </Link>
        <p className="text-on-surface-variant text-sm font-medium">Vagas limitadas por turma para garantir suporte técnico individualizado.</p>
      </section>
    </div>
  );
}
