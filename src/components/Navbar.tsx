import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, School, Printer, User } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/', icon: Home },
    { name: 'Cursos', path: '/curso', icon: School },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg p-1 shadow-sm border border-outline-variant/10 flex items-center justify-center">
            <img 
              alt="TkxHi Icon" 
              className="w-full h-full object-contain" 
              src="/logos/TkxHi_round.png"
            />
          </div>
          <img 
            alt="TkxHi Logo" 
            className="h-6 w-auto" 
            src="/logos/TkxHi_single_transp.png"
          />
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "font-medium transition-colors hover:text-secondary",
                  location.pathname === item.path ? "text-secondary font-bold" : "text-on-surface-variant"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="h-8 w-[1px] bg-outline-variant/30"></div>
          <Link 
            to="/registro" 
            className="bg-secondary/10 text-secondary px-6 py-2 rounded-full font-bold text-sm hover:bg-secondary/20 transition-all"
          >
            Lista de Espera
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Link to="/registro" className="text-secondary font-bold text-sm">
            Lista
          </Link>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-20 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0_-4px_20px_0_rgba(0,0,0,0.03)]">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all",
              location.pathname === item.path 
                ? "text-secondary bg-secondary/5 rounded-xl px-3 py-1" 
                : "text-on-surface-variant opacity-70 hover:opacity-100"
            )}
          >
            <item.icon size={24} />
            <span className="font-headline text-[10px] font-medium uppercase tracking-widest mt-1">{item.name}</span>
          </Link>
        ))}
        <Link
          to="/registro"
          className={cn(
            "flex flex-col items-center justify-center transition-all",
            location.pathname === '/registro' 
              ? "text-secondary bg-secondary/5 rounded-xl px-3 py-1" 
              : "text-on-surface-variant opacity-70 hover:opacity-100"
          )}
        >
          <User size={24} />
          <span className="font-headline text-[10px] font-medium uppercase tracking-widest mt-1">Interesse</span>
        </Link>
      </nav>
    </>
  );
}
