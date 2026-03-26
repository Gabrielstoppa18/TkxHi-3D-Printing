import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Factory, Layers, Brush, ArrowRight, Medal, Bolt, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoRound from '../lib/pics/TkxHi_round.png';

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
              color: "primary",
              textColor: "primary",
              desc: "História, tecnologias (FDM, SLA, SLS), Projeto RepRap e anatomia da impressora Ender 3."
            },
            {
              title: "Manutenção",
              icon: Bolt,
              color: "secondary-container",
              textColor: "secondary",
              desc: "Preservação, limpeza, lubrificação, troca de filamento e solução de falhas comuns como warping e stringing."
            },
            {
              title: "Configuração",
              icon: Layers,
              color: "tertiary",
              textColor: "tertiary",
              desc: "Painel de controle, pré-aquecimento, nivelamento da mesa (Bed Levelling) e distância correta do bico."
            },
            {
              title: "Fatiamento",
              icon: Rocket,
              color: "green-fluorescent",
              textColor: "green-dark",
              desc: "Domínio do OrcaSlicer: parâmetros de qualidade, resistência, suportes e calibração avançada."
            }
          ].map((module, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`group bg-white hover:bg-surface-container-lowest transition-all p-8 rounded-[2rem] flex flex-col justify-start min-h-[320px] border border-outline-variant/10 hover:border-${module.textColor}/20 shadow-sm hover:shadow-xl`}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl bg-${module.color} flex items-center justify-center text-white shadow-lg shadow-${module.color}/20 group-hover:scale-110 transition-transform`}>
                  <module.icon size={30} />
                </div>
                <h3 className={`text-xl font-bold text-${module.textColor}`}>{module.title}</h3>
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
                { label: "Materiais Abordados", color: "primary", items: ["PLA", "ABS", "PETG", "TPU", "Nylon", "Policarbonato", "Compósitos"] },
                { label: "Ecossistema de Software", color: "secondary", items: ["OrcaSlicer", "Cura", "PrusaSlicer", "Tinkercad", "Fusion 360", "Blender"] },
              ].map((spec, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`mt-1 w-2 h-2 rounded-full bg-${spec.color} flex-shrink-0`}></div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2 uppercase text-xs tracking-widest">{spec.label}</h4>
                    <div className="flex flex-wrap gap-2">
                      {spec.items.map((item, i) => (
                        <span key={i} className={`bg-${spec.color}/10 text-${spec.color} px-3 py-1 rounded-full text-[11px] font-bold`}>
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
                  <p className="text-sm text-on-surface-variant">Impressora FDM com mesa aquecida e computador com 8GB RAM.</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white/40 rounded-2xl border border-white/60">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-black text-primary">24h+</div>
                <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest leading-tight">
                  Conteúdo em Vídeo de alta definição
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex flex-col justify-center gap-8">
              {[
                { label: "Precisão de Camada", val: 98, color: "primary" },
                { label: "Otimização de Tempo", val: 45, color: "secondary" },
                { label: "Qualidade Estética", val: 85, color: "tertiary" },
              ].map((gauge, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                    <span>{gauge.label}</span>
                    <span>{gauge.val}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${gauge.val}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                      className={`h-full bg-${gauge.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonials */}
      <section className="py-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-on-surface">Resultados & <span className="text-primary">Depoimentos</span></h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Veja o que nossos alunos estão produzindo e como a TkxHi transformou sua visão técnica.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB2TDRGLPrN-AYjYVwplY8N8YeHcudmfjJLynDDBW4bzQJMC9vmlVVlRD4xzs1enTzO5axht9MKYTe05S-ee1L0jj5nSFc3Yp4LFvJRcmSbMiouL6_heM4nKXxv7zJdKZVCOJA7pEiQZgvW5PCMBtuaYEwsOoVDsnL8zkB_I88De2xOvwDaxltfxDYeds3hFdG_tf4CibgW7Jr6RoQ82ySSrJVoQIgvzt6ki_2GTNp75iughuGN26ENmSuc1BAtcUS5uoP9-kfkBFU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5S5Y20IPs3WD7tDUC5JCiyxncOrRIgLbRUoaY5_XJVazQfeb2qIGTbbQ7lP0X2zkBAYoHMGQlyHK0SFoYcvG-B8pSYhStMph9gPZFajbtz1O57U_YwvzNZjxykhF_qSy5qvsh71zlVe5J2_QOfiCYtBbcTwIOKVnaCW868G9OrQhr-HL8e9YDaiCgvcWQAtYqRPbhlKDnx5IrKw9ldJ3slZ9Z2GcQhNOPNyvHELRK_Gg9WB2nkDUiqfg-YJ9S_7jJA4PcYi3WUv8",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAh-iAk_FyuSGaCntvN2oCTtYv06i47cksTPE5B3_oLUC7uIGoLrZ-44vXCWfsDKKQ98oeKd7hTrK-mIjsFbtbScD_25J-FKZvWv89uxW8Amq7DrBWzg0hfbJ7hhkjsOujmMwLRJpAvcI5GF5qUmm3R0Cl_kbjbtg1VeMfJa8P_oPAT9omOvLrYZyC-TRlrfLxxa9voLM8psNhI1THqoThCSZJDAlsPl7XSdKawhqaNI-0MsT7uNz8i9rJkZeJncY_h-lp0-BEjgtU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCynrekSoctkPTLp5_Pm4FR-P7InIICaFL-Ux9ULZvRgmIgZeUczoKpzYSlAlpp3z-1dN-x9y1gKceTLBGSXwXT75UoKj_6v54YiMPgjgXHcMyUH-Zq0G_yFirtH_JapzjBRal1AXWohPsZUUXR-WIUaUPwhCkRpiElR6mkND8S1li71MFPhaQgdPsW9N_Blx49bM_MqlVJ9lHsXaOgLGvBm0y9DlmVObYNLEuZkL4EkSkiNdoDjxSggaaJKgvNXwTrVhDVNShrZhk"
          ].map((url, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={url} alt={`Resultado ${i}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Ricardo M.", role: "Engenheiro Mecânico", text: "O curso mudou minha percepção sobre prototipagem. A precisão técnica ensinada é incomparável." },
            { name: "Juliana S.", role: "Designer de Produto", text: "Finalmente entendi como configurar o fatiador para obter peças funcionais e estéticas ao mesmo tempo." },
            { name: "Marcos V.", role: "Entusiasta Maker", text: "O suporte dos instrutores e a profundidade do conteúdo sobre manutenção salvaram minha impressora." }
          ].map((testimonial, i) => (
            <div key={i} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 space-y-4">
              <div className="text-primary opacity-20">
                <Quote size={40} fill="currentColor" />
              </div>
              <p className="text-on-surface italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-on-surface">{testimonial.name}</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{testimonial.role}</p>
              </div>
            </div>
          ))}
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
