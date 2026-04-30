export function About(){
    return (
        <section id="About" className="min-h-screen flex flex-col justify-center gap-16 px-6 py-20">
            <div className="max-w-3xl mx-auto w-full">
                <div className="mb-6 md:mb-8">
                    <h2 className="font-medium text-center text-2xl md:text-4xl">Sobre <span className="text-sky-400">mim</span></h2>
                </div>

                <div className="text-left md:text-left bg-slate-900/20 p-6 md:p-10 rounded-2xl border border-slate-800/50 shadow-xl 
                transition-all duration-500 hover:scale-[1.02] hover:bg-slate-900/40 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10">
                    <p className="text-slate-200/85 leading-relaxed text-base md:text-lg">Olá! Sou a Penélope Vieira e desenvolvedora Front-End,
                    atualmente estou me formando como técnica de Redes de Computadores
                    e tenho focado meus estudos para o desenvolvimento, principalmente criando interfaces interativas e responsivas.</p>

                    <p className="text-slate-200/85 leading-relaxed text-base mt-4 md:text-lg"
                    >Sou apaixonada pela criação de aplicações e estou sempre aberta a aprender novas tecnologias, já que possuo
                        o desejo de evoluir para desenvolvimento Full-Stack.</p>
                </div>
            </div>


            <div className="max-w-4xl mx-auto w-full">
                <div className="mb-10">
                    <h2 className="font-medium text-center text-2xl md:text-4xl">Minhas <span className="text-sky-400">habilidades</span></h2>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center bg-slate-900/10 p-8 rounded-3xl border border-slate-800/30
                transition-all duration-500 hover:scale-[1.02] hover:bg-slate-900/40 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10">
                    <img src="/technology/HTML.png" className="w-12 md:w-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer" alt="HTML" />
                    <img src="/technology/CSS.png" className="w-12 md:w-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer" alt="CSS" />
                    <img src="/technology/JavaScript.png" className="w-12 md:w-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer" alt="JS" />
                    <img src="/technology/react.png" className="w-12 md:w-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer" alt="React" />
                    <img src="/technology/Tailwind.png" className="w-12 md:w-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer" alt="Tailwind" />
                    <img src="/technology/Git.png" className="w-12 md:w-16 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer" alt="Git" />
                </div>
            </div>
        </section>
    )
}
