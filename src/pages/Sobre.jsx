import {
  FaDumbbell,
  FaUsers,
  FaTrophy,
  FaHeart,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Sobre = () => {
  const valores = [
    {
      id: 1,
      icon: <FaDumbbell className="w-10 h-10 object-contain" />,
      titulo: "Disciplina",
      descricao:
        "Acreditamos que consistência e foco são a base de qualquer transformação real.",
    },
    {
      id: 2,
      icon: <FaUsers className="w-10 h-10 object-contain" />,
      titulo: "Comunidade",
      descricao:
        "Mais do que uma academia, somos uma família que se apoia todos os dias.",
    },
    {
      id: 3,
      icon: <FaClock className="w-10 h-10 object-contain" />,
      titulo: "Resultados",
      descricao:
        "Treinamos com propósito. Cada treino é um passo em direção ao seu melhor.",
    },
    {
      id: 4,
      icon: <FaHeart  className="w-10 h-10 object-contain" />,
      titulo: "Saúde",
      descricao:
        "Cuidamos do corpo e da mente. Bem-estar completo é o nosso compromisso.",
    },
  ];

  const diferenciais = [
    {
      id: 1,
      titulo: "Equipamentos de ponta",
      descricao:
        "Máquinas modernas e bem cuidadas para todos os tipos de treino.",
    },
    {
      id: 2,
      titulo: "Profissionais qualificados",
      descricao:
        "Personal trainers e educadores físicos formados e experientes.",
    },
    {
      id: 3,
      titulo: "Ambiente motivador",
      descricao:
        "Espaço limpo, iluminado e com energia positiva o dia todo.",
    },
    {
      id: 4,
      titulo: "Horários flexíveis",
      descricao:
        "Aberto todos os dias, com turmas do amanhecer até a noite.",
    },
  ];

  const equipe = [
    {
      id: 1,
      nome: "Gilitos Perigo",
      cargo: "Fundador & Head Coach",
      especialidade: "Musculação e saúde mental",
      imagem: "/img3.png",
    },
    {
      id: 2,
      nome: "Davis Culhões",
      cargo: "Personal Trainer",
      especialidade: "Musculação e cross training",
      imagem: "/img6.png",
    },
    {
      id: 3,
      nome: "Milguais",
      cargo: "Educador Físico",
      especialidade: "Trabalho psicológico e treinamento funcional",
      imagem: "/img1.png",
    },
    {
      id: 4,
      nome: "Kaio Kaiser",
      cargo: "Nutricionista Esportivo",
      especialidade: "Nutrição esportiva",
      imagem: "/img5.png",
    },
    {
      id: 5,
      nome: "Lucas",
      cargo: "Personal Trainer",
      especialidade: "Treinamento e condicionamento físico",
      imagem: "/img2.png",
    },
    {
      id: 6,
      nome: "Matheus",
      cargo: "Educador Físico",
      especialidade: "Treinamento funcional e musculação",
      imagem: "/img4.png",
    },
  ];

  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F5] min-h-screen">

      {/* HERO */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717]/80 to-[#0B0B0B] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider uppercase text-[#DC2626] border border-[#DC2626]/40 rounded-full">
            Quem somos
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mais do que uma academia.
            <br />
            <span className="text-[#DC2626]">
              Somos uma família.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Você não será caçoado em nossa academia. Nós somos como uma
            família para ajudar nossos clientes a alcançarem seus objetivos
            e se sentirem bem consigo mesmos.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Nossa{" "}
            <span className="text-[#DC2626]">
              história
            </span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            Em 1946, Gilitos, após voltar da guerra, abriu uma academia
            com o objetivo de ajudar as pessoas a se sentirem bem com
            elas mesmas e alcançar seus objetivos.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            Ao longo dos anos investimos em estrutura, equipe e metodologia.
            Hoje somos referência na região, com centenas de alunos que
            confiam em nosso trabalho diariamente.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Nosso compromisso continua o mesmo: te ajudar a alcançar a
            melhor versão de você.
          </p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Conheça nossa{" "}
              <span className="text-[#DC2626]">
                equipe
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Profissionais apaixonados por transformação e prontos para
              te acompanhar em cada treino.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap sm:flex flex-col">

            {equipe.map((membro) => (
              <div
                key={membro.id}
                className="bg-[#171717] w-[30%] p-6 rounded-xl border border-gray-800 hover:border-[#DC2626]/50 transition-colors duration-300 text-center sm: w-full"
              >

                {/* IMAGEM */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#DC2626]/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={membro.imagem}
                    alt={membro.nome}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {membro.nome}
                </h3>

                <p className="text-[#DC2626] text-sm font-medium mb-2">
                  {membro.cargo}
                </p>

                <p className="text-gray-400 text-sm">
                  {membro.especialidade}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#171717]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossos{" "}
              <span className="text-[#DC2626]">
                valores
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Princípios que guiam cada treino, cada conversa e cada
              conquista dentro da nossa academia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {valores.map((valor) => (
              <div
                key={valor.id}
                className="bg-[#0B0B0B] p-6 rounded-xl border border-gray-800 hover:border-[#DC2626]/50 transition-colors duration-300"
              >

                <div className="mb-4">
                  {valor.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {valor.titulo}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {valor.descricao}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Por que treinar{" "}
              <span className="text-[#DC2626]">
                conosco
              </span>
              ?
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Diferenciais que fazem a diferença no seu dia a dia e nos
              seus resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {diferenciais.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-5 bg-[#171717] rounded-xl border border-gray-800"
              >

                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#DC2626]/20 flex items-center justify-center">
                  <span className="text-[#DC2626] font-bold">
                    {item.id}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {item.titulo}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.descricao}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
};

export default Sobre;
