import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Weather App",
        description: "Aplicativo de previsão do tempo feito com React e TailwindCSS utilizando Openweather e Axios.",
        image: "/projects/weather-app.jpg",
        tags: ["React", "TailwindCSS", "OpenWeather", "Axios"],
        demoUrl: "https://weather-app-react-omega-ruddy.vercel.app/",
        githubUrl: "https://github.com/peneloop/WeatherAPP-React",
    },
    {
        id: 2,
        title: "To-Do List",
        description: "Lista de afazeres (to-do list) feita com React e tailwind, utilizando React Router e localStorage",
        image: "/projects/todo-list.jpg",
        tags: ["React", "TailwindCSS", "React Router", "localStorage"],
        demoUrl: "https://react-to-do-list-xi-plum.vercel.app/",
        githubUrl: "https://github.com/peneloop/React-ToDo-List",
    },
    {
        id: 3,
        title: "Landing page com JS puro",
        description: "Landing page de um restaurante típico brasileiro ficticio para a prática de html, css e javascript puro.",
        image: "/projects/landing-page.jpg",
        tags: ["JavaScript", "HTML", "CSS"],
        demoUrl: "https://peneloop.github.io/Landing-page.Restaurante/",
        githubUrl: "https://github.com/peneloop/Landing-page.Restaurante",
    },
]

export function Projects(){
    return (
        <section id="Projects" className="min-h-screen px-6 py-20">
            <div className="max-w-3xl mx-auto w-full">
                <div>
                    <h2 className="font-medium text-center text-2xl md:text-4xl">Meus <span className="text-sky-400"
                    >projetos</span></h2>

                    <p className="text-slate-200/85 text-center leading-relaxed text-base mt-4 mb-12 md:text-lg">Meus projetos mais recentes, onde cada um foi criado 
                    pensando nos detalhes e na experiência do usuário.</p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projects.map((project, key) => (
                    <div key={key} className="group rounded-2xl overflow-hidden bg-slate-900/20 border border-slate-800/50 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-sky-500/10">
                        <div className="h-48 overflow-hidden border-b border-slate-800">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-slate-100 group-hover:text-sky-400 transition-colors"> {project.title}</h3>
                            <p className="text-sm mb-6 text-slate-400 leading-relaxed line-clamp-3"> {project.description}</p>

                            <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                                <div className="flex space-x-4">
                                    <a href={project.demoUrl} target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1 text-sm">
                                        <ExternalLink className="w-5 h-5"/> Demo
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1 text-sm">
                                        <img src="./public/GitHub.svg" className="invert w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"/> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <a className="w-fit flex items-center mx-auto gap-2 px-6 py-2 rounded-full border border-slate-800 bg-slate-900/30 hover:bg-slate-800 hover:border-sky-500/50 transition-all group" 
                   href="https://github.com/peneloop" target="_blank">
                    Veja meu GitHub! <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </a>
            </div>
        </section>
    )
}
