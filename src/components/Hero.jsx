export function Hero(){
    return (
        <section id="Hero" className="scroll-mt-20 min-h-screen">
            <div>
                <div className="font-medium min-h-screen flex flex-col items-center justify-center">
                    <p className="font-medium text-xl md:text-2xl md:mb-2 text-slate-200/95 mb-1">Olá! Eu sou a</p>
                    <h1 className="text-sky-500 text-4xl md:text-7xl font-bold drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                        Penélope Vieira
                    </h1>
                    <p className="font-normal text-slate-200/85 text-sm md:text-lg mt-4">
                        Desenvolvedora <span className="text-sky-500/70 font-medium italic">Front-End</span>
                    </p>
                
                    <div className="items-center font-normal justify-center flex gap-7 md:gap-10">
                        <a href="#Projects" className="bg-slate-900/55 rounded-full p-3 mt-8 md:mt-12 border-2 border-slate-900 text-slate-200/80 px-6 py-2 md:px-8 md:py-3 shadow-lg shadow-sky-950/20
                         transition-all hover:border-slate-900 hover:border-b-4 hover:bg-sky-950/45"
                        >Ver Projetos</a>
                        <a href="#Contacts" className="bg-slate-900/55 rounded-full p-3 mt-8 md:mt-12 border-2 border-slate-900 text-slate-200/80 px-6 py-2 md:px-8 md:py-3 shadow-lg shadow-sky-950/20
                         transition-all hover:border-slate-900 hover:border-b-4 hover:bg-sky-950/45"
                        >Contate-me</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
