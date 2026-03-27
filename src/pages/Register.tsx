import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bolt, School, Rocket, Factory, Check, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [knowledgeLevel, setKnowledgeLevel] = useState('Nenhum');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsLoading(true);
    try {
      const waitlistRef = collection(db, 'waitlist');
      await addDoc(waitlistRef, {
        name,
        email,
        knowledgeLevel,
        createdAt: serverTimestamp(),
      });
      setIsSuccess(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'waitlist');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-surface">
        <main className="flex-grow flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full bg-surface-container-lowest p-10 rounded-3xl shadow-2xl border border-outline-variant/10 text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold text-on-surface">Você está na lista!</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Obrigado pelo interesse, <strong>{name}</strong>! <br />
              Enviamos um e-mail de confirmação para <strong>{email}</strong>. Fique atento às novidades da edição 2026.
            </p>
            <Link 
              to="/"
              className="inline-block w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-container transition-all"
            >
              Voltar para o Início
            </Link>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <main className="flex-grow pt-24 pb-12 px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <div className="relative group">
              <img 
                className="w-full h-[300px] object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2TDRGLPrN-AYjYVwplY8N8YeHcudmfjJLynDDBW4bzQJMC9vmlVVlRD4xzs1enTzO5axht9MKYTe05S-ee1L0jj5nSFc3Yp4LFvJRcmSbMiouL6_heM4nKXxv7zJdKZVCOJA7pEiQZgvW5PCMBtuaYEwsOoVDsnL8zkB_I88De2xOvwDaxltfxDYeds3hFdG_tf4CibgW7Jr6RoQ82ySSrJVoQIgvzt6ki_2GTNp75iughuGN26ENmSuc1BAtcUS5uoP9-kfkBFU" 
                alt="Maker culture"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary-container p-4 rounded-xl shadow-lg text-on-secondary-container">
                <Bolt size={32} />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-on-surface tracking-tight leading-tight">
                Tenha interesse no <span className="text-primary">Futuro 3D</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Estamos preparando a próxima turma do curso <strong>Impressão 3D: Basic</strong>. Entre na lista de espera para receber informações exclusivas e garantir sua vaga.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "2026", label: "Edição", color: "tertiary" },
                { val: "Basic", label: "Nível", color: "secondary" },
                { val: "Vagas", label: "Limitadas", color: "primary" }
              ].map((stat, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-xl text-center">
                  <span className={`block text-2xl font-bold text-${stat.color}`}>{stat.val}</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant opacity-60">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-xl p-2 shadow-sm border border-outline-variant/10 flex items-center justify-center">
                  <img 
                    src="/tkx-round.png"
                    alt="TkxHi Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-on-surface">Lista de Espera</h2>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative group">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-1">Nome Completo</label>
                    <input 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-on-surface-variant/40" 
                      placeholder="Ex: Alex Silva" 
                      type="text"
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 ml-1">E-mail para Contato</label>
                    <input 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-on-surface-variant/40" 
                      placeholder="alex@exemplo.com" 
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-on-surface-variant ml-1">Qual seu nível de conhecimento?</label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { title: "Nenhum", desc: "Nunca tive contato com impressoras 3D", icon: School, color: "primary" },
                      { title: "Básico", desc: "Já imprimi algumas peças", icon: Rocket, color: "secondary" },
                      { title: "Intermediário", desc: "Tenho minha própria impressora e conheço o processo", icon: Factory, color: "tertiary" }
                    ].map((opt, i) => (
                      <label key={i} className={`relative flex items-center p-4 bg-surface rounded-xl border border-outline-variant/20 cursor-pointer hover:bg-${opt.color}/5 transition-colors group ${knowledgeLevel === opt.title ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
                        <input 
                          className="hidden peer" 
                          name="level" 
                          type="radio" 
                          checked={knowledgeLevel === opt.title}
                          onChange={() => setKnowledgeLevel(opt.title)}
                        />
                        <div className={`w-10 h-10 rounded-lg bg-${opt.color}/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform text-${opt.color}`}>
                          <opt.icon size={20} />
                        </div>
                        <div className="flex-grow">
                          <span className="block font-bold text-on-surface">{opt.title}</span>
                          <span className="text-xs text-on-surface-variant">{opt.desc}</span>
                        </div>
                        <div className={`${knowledgeLevel === opt.title ? 'flex' : 'hidden'} absolute right-4 w-6 h-6 bg-${opt.color} rounded-full items-center justify-center text-white`}>
                          <Check size={14} />
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  disabled={isLoading}
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-container disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <span>Entrar na Lista de Espera</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-on-surface-variant/60 leading-relaxed px-4">
                  Ao entrar na lista, você será notificado assim que as inscrições para a edição 2026 forem abertas.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  );
}
