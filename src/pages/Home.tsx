import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FlaskConical, CheckCircle, CircleDot, Layers, Factory, Bolt, Brain, Sparkles, Share2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoRound from '../assets/TkxHi_round.png';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-12 md:py-20 bg-surface overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-white font-label text-sm mb-6 tracking-widest">
              TECNOLOGIA 3D
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none text-on-surface mb-6">
              Pense, prepare, <span className="text-primary italic">imprima!</span>
            </h1>
            <div className="mb-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl">
              <p className="text-on-surface font-medium text-sm md:text-base">
                Inicie sua jornada com o nível <span className="text-primary font-bold">Basic</span>, nossa oferta atual. 
                Em breve, expandiremos seu domínio com os níveis <span className="opacity-60 italic">Intermediário</span> e <span className="opacity-60 italic">Avançado</span>.
              </p>
            </div>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-md mb-8">
              Domine a manufatura aditiva com a TkxHi. Transformamos ideias abstratas em objetos tangíveis, desbloqueando o potencial da inovação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/registro"
                className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                Tenho Interesse
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500 relative">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5S5Y20IPs3WD7tDUC5JCiyxncOrRIgLbRUoaY5_XJVazQfeb2qIGTbbQ7lP0X2zkBAYoHMGQlyHK0SFoYcvG-B8pSYhStMph9gPZFajbtz1O57U_YwvzNZjxykhF_qSy5qvsh71zlVe5J2_QOfiCYtBbcTwIOKVnaCW868G9OrQhr-HL8e9YDaiCgvcWQAtYqRPbhlKDnx5IrKw9ldJ3slZ9Z2GcQhNOPNyvHELRK_Gg9WB2nkDUiqfg-YJ9S_7jJA4PcYi3WUv8" 
                alt="Modern high-tech 3D printing laboratory"
                referrerPolicy="no-referrer"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute top-6 right-6 w-20 h-20 bg-white rounded-full p-3 shadow-2xl z-20 flex items-center justify-center border-4 border-white/50"
              >
                <img 
                  src={logoRound}
                  alt="TkxHi Mark"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl flex items-center gap-4 border-l-4 border-tertiary"
            >
              <div className="bg-tertiary/10 p-3 rounded-full text-tertiary">
                <FlaskConical size={24} />
              </div>
              <div>
                <p className="font-bold text-on-surface leading-tight">Laboratório Maker</p>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider font-label">Aulas 100% Práticas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services & Portfolio */}
      <section className="py-20 px-6 bg-surface-container-low">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
                Nossos <span className="text-primary">Serviços</span> & Soluções
              </h2>
              <div className="h-1 w-24 bg-primary mt-4"></div>
            </div>
            <p className="text-on-surface-variant max-w-sm">Além da educação, oferecemos soluções técnicas de alta precisão para o mercado industrial e criativo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Impressão Sob Demanda",
                desc: "Produção de peças técnicas e protótipos funcionais com materiais de engenharia de alta performance.",
                icon: CircleDot,
                items: ["Peças de Reposição", "Protótipos Rápidos"]
              },
              {
                title: "Consultoria Técnica",
                desc: "Otimização de processos produtivos e implementação de laboratórios de manufatura aditiva.",
                icon: Layers,
                items: ["Setup de Laboratórios", "Treinamento In-company"]
              },
              {
                title: "Manutenção Especializada",
                desc: "Suporte técnico preventivo e corretivo para impressoras 3D industriais e de mesa.",
                icon: Factory,
                items: ["Calibração de Precisão", "Upgrade de Hardware"]
              }
            ].map((module, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-surface-container-lowest p-8 rounded-2xl group hover:shadow-xl transition-all border-b-4 border-primary/20 hover:border-primary"
              >
                <module.icon className="text-primary size-10 mb-6" />
                <h3 className="text-xl font-bold mb-3 font-headline">{module.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{module.desc}</p>
                <ul className="space-y-3 mb-8">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-on-surface">
                      <CheckCircle className="text-primary size-4 fill-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 px-6 bg-surface overflow-hidden relative">
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <img 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-iAk_FyuSGaCntvN2oCTtYv06i47cksTPE5B3_oLUC7uIGoLrZ-44vXCWfsDKKQ98oeKd7hTrK-mIjsFbtbScD_25J-FKZvWv89uxW8Amq7DrBWzg0hfbJ7hhkjsOujmMwLRJpAvcI5GF5qUmm3R0Cl_kbjbtg1VeMfJa8P_oPAT9omOvLrYZyC-TRlrfLxxa9voLM8psNhI1THqoThCSZJDAlsPl7XSdKawhqaNI-0MsT7uNz8i9rJkZeJncY_h-lp0-BEjgtU" 
              alt="Industrial 3D printer"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-secondary-container text-white px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse">
              SISTEMA ATIVO
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-8">
              O Processo <span className="text-tertiary">TkxHi</span>
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Exploração", icon: Bolt, desc: "Análise de viabilidade técnica e escolha do material ideal para o projeto." },
                { step: "02", title: "Prototipagem", icon: Brain, desc: "Fatiamento avançado e execução em nossas máquinas de alta fidelidade." },
                { step: "03", title: "Finalização", icon: Sparkles, desc: "Tratamento de superfície e entrega técnica com laudo de qualidade." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-none w-12 h-12 rounded-full border-2 border-tertiary flex items-center justify-center font-bold text-tertiary group-hover:bg-tertiary group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                      {item.title} <item.icon className="text-orange-500 size-5" />
                    </h4>
                    <p className="text-on-surface-variant text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-20">
        <div className="container mx-auto bg-primary rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-primary mb-6">Interessado na próxima turma?</h2>
            <p className="text-on-primary/80 mb-10 text-lg">Entre na lista de espera e receba o guia técnico 2026 em primeira mão.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/registro"
                className="flex-1 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary-fixed transition-colors text-center"
              >
                Entrar na Lista de Espera
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
