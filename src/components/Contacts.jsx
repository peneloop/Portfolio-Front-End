import { ContactRound, Mail, MessageCircle, Send } from "lucide-react";

export function Contacts(){
    return (
        <section id="Contacts" className="scroll-mt-20 min-h-screen px-6 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <div className="mb-12 md:mb-20">
                    <h2 className="font-medium text-center text-2xl md:text-4xl">Meus
                    <span className="text-sky-400"> contatos</span></h2>
                </div>

                {/* Grid principal: Contatos na esquerda, Formulário na direita */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    {/* Coluna da Esquerda: Info */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6 text-slate-100">Informações de contato</h3>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    <Mail className="h-6 w-6"/>
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400">Email</h4>
                                    <a href="mailto:vieirapenelope21@gmail.com" className="text-slate-200 hover:text-sky-400 transition-colors break-all">
                                        vieirapenelope21@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    <MessageCircle className="h-6 w-6"/>
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400">Número</h4>
                                    <a href="https://wa.me/5585992252181" className="text-slate-200 hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
                                        (85) 99225-2181
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    <ContactRound className="h-6 w-6"/>
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-400">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/penelope-vieira/?skipRedirect=true" className="text-slate-200 hover:text-sky-400 transition-colors" target="_blank" rel="noreferrer">
                                        Penélope Vieira
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita: Formulário (com efeito Glass) */}
                    <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold mb-6 text-slate-100">Me contate!</h3>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">Seu nome:</label>
                                <input type="text" id="name" name="name" required 
                                className="w-full px-4 py-3 bg-slate-950/50 rounded-lg border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder:text-slate-600"
                                placeholder="Nome...."/>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">Seu email:</label>
                                <input type="email" id="email" name="email" required 
                                className="w-full px-4 py-3 bg-slate-950/50 rounded-lg border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all placeholder:text-slate-600"
                                placeholder="contato@gmail.com"/>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">Mensagem:</label>
                                <textarea id="message" name="message" required rows="4"
                                className="w-full px-4 py-3 bg-slate-950/50 rounded-lg border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all resize-none placeholder:text-slate-600"
                                placeholder="Olá!"/>
                            </div>

                            <button type="submit"
                                className="w-full py-3 px-6 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-all active:scale-95 shadow-lg shadow-sky-500/20"
                            >
                                Enviar <Send size={18}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
