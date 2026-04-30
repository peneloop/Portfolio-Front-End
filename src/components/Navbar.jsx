import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <div>
            <header>
                <div className="fixed top-0 w-full z-50 backdrop-blur-sm transition-all bg-slate-950/50 md:px-6">
                    <div className="flex justify-between p-4">
                        <div className="font-medium">
                            <a href="/">Penélope <span className="text-sky-400">Vieira</span></a>
                        </div>
                        
                        {/* Menu para computador */}
                        <nav className="hidden md:block">
                            <ul className="flex justify-between gap-4 font-medium">
                                <li className="hover:text-sky-400 transition-all hover:border-b "><a href="#Hero">Início</a></li>
                                <li className="hover:text-sky-400 transition-all hover:border-b"><a href="#About">Sobre</a></li>
                                <li className="hover:text-sky-400 transition-all hover:border-b"><a href="#Projects">Projetos</a></li>
                                <li className="hover:text-sky-400 transition-all hover:border-b"><a href="#Contacts">Contato</a></li>
                            </ul>
                        </nav>

                        {/* Burguer menu mobile */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-slate-200 focus:outline-none">
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                    <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden backdrop-blur-lg`}>
                        <ul className="flex items-center px-4 py-4 justify-evenly gap-4 font-medium border-t border-white/10">
                            <li className="hover:text-sky-400 transition-all hover:border-b "><a href="#Hero" onClick={toggleMenu}>Início</a></li>
                            <li className="hover:text-sky-400 transition-all hover:border-b"><a href="#About" onClick={toggleMenu}>Sobre</a></li>
                            <li className="hover:text-sky-400 transition-all hover:border-b"><a href="#Projects" onClick={toggleMenu}>Projetos</a></li>
                            <li className="hover:text-sky-400 transition-all hover:border-b"><a href="#Contacts" onClick={toggleMenu}>Contato</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
