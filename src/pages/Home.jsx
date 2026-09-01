import {
  FiActivity,
  FiUsers,
  FiClock,
  FiAward,
  FiCheck,
  FiArrowRight,
  FiPlay,
} from "react-icons/fi";
import { GiMuscleUp, GiWeightLiftingUp, GiRunningShoe } from "react-icons/gi";
import { MdSportsGymnastics } from "react-icons/md";
import Button from "../components/button/Button";
import Card from "../components/card/Card";

const benefits = [
  {
    icon: FiActivity,
    title: "Treinos personalizados",
    description: "Programas feitos com base no seu objetivo",
  },
  {
    icon: FiUsers,
    title: "Profissionais certificados",
    description: "Equipe de personal trainers profissionais.",
  },
  {
    icon: FiClock,
    title: "Horário flexível",
    description: "Abertos de Segunda a Domingo, das 3:99 as 67:67",
  },
  {
    icon: FiAward,
    title: "Estrutura premium",
    description: "Equipamentos de última geração.",
  },
];

const modalities = [
  {
    icon: GiWeightLiftingUp,
    title: "Musculação",
    description:
      "Área completa para levantar as roscas mais pesadas e ganhar massa muscular.",
  },
  {
    icon: GiRunningShoe,
    title: "Cardio & Performance",
    description: "Esteiras e bicicletas de ultima geração.",
  },
  {
    icon: GiMuscleUp,
    title: "Cross Training",
    description:
      "Treinos funcionais de alta intensidade para queimar gordura e ganhar resistência.",
  },
  {
    icon: MdSportsGymnastics,
    title: "Aulas coletivas",
    description: "Spinjitsu, Hayshi e muito mais",
  },
];

const plans = [
  {
    name: "Pobricios",
    price: "89",
    period: "/mês",
    description: "Para quem quer começar",
    features: [
      "Acesso à musculação",
      "Área de cardio",
      "Horário comercial",
      "Avaliação física inicial",
    ],
    highlighted: false,
  },
  {
    name: "Goldstein",
    price: "149",
    period: "/mês",
    description: "Best Sale",
    features: [
      "Plano basico ++",
      "Aulas coletivas ilimitadas",
      "Acesso 24h (dias úteis)",
      "1 sessão de personal/mês",
      "App de treinos",
    ],
    highlighted: true,
  },
  {
    name: "Black Gigicos",
    price: "229",
    period: "/mês",
    description: "Máximo desempenho e treino com o melhor",
    features: [
      "Goldstein ++",
      "Treine com gigicos",
      "Acesso total 24h",
      "Nutricionista incluso",
      "Vestiário premium",
      "Convidado 2x/mês",
    ],
    highlighted: false,
  },
];

const stats = [
  { value: "1945+", label: "Anos de experiência" },
  { value: "6.767+", label: "Alunos transformados" },
  { value: "69", label: "Profissionais" },
  { value: "12+", label: "Modalidades" },
];

const Home = () => {
  return (
    <main className="bg-[#0B0B0B] text-[#F5F5F5]">
      {/* hero */}
      <section className=" bg-black/50 relative min-h-screen flex items-center justify-center overflow-hidden pt-20  bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/Gymage.jpg')" }}>
        <div className="absolute inset-0   from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B] z-10" />
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(220,38,38,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(220,38,38,0.08) 0%, transparent 40%)",
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="inline-flex items-center gap-2 text-[#DC2626] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            <span className="w-8 h-px bg-[#DC2626]" />
            Melhor academia
            <span className="w-8 h-px bg-[#DC2626]" />
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.05] mb-6">
            Transforme seu
            <br />
            <span className="text-[#DC2626]">corpo</span> e sua{" "}
            <span className="text-[#DC2626]">mente</span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#F5F5F5]/70 text-lg md:text-xl leading-relaxed mb-10">
            Equipamentos de ponta, treinos personalizados e uma comunidade que
            acolhe voce. Comece agora!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/*">
              <Button size="lg" className="min-w-[200px]">
                Começar agora
                <FiArrowRight size={18} />
              </Button>
            </a>
            <a href="/*">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                <FiPlay size={18} />
                Ver modalidades
              </Button>
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-[#DC2626]">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-[#F5F5F5]/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benicios */}
      <section className="py-20 md:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#DC2626] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Por que escolher a GicosFitis
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Mais que uma academia, uma família
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#DC2626]/10 text-[#DC2626] mb-5 group-hover:bg-[#DC2626] group-hover:text-[#F5F5F5] transition-colors duration-300">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#F5F5F5]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      <section id="modalidades" className="py-20 md:py-28 bg-[#171717]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[#DC2626] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                O que oferecemos
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                Modalidades
              </h2>
            </div>
            <p className="text-[#F5F5F5]/60 max-w-md text-sm md:text-base">
              Escolha o estilo de treino que combina com você. Todas as
              modalidades estão inclusas nos planos Premium e Black.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalities.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="group">
                  <div className="text-[#DC2626] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#F5F5F5]/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* naisPerso */}
      <section className="py-20 md:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#DC2626] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Nosso time
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Conheça nossos personais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* P1 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg border border-[#2a2a2a] mb-5">
                <img
                  src="/image.png"
                  alt="Personal 1"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Gilitos Perigo
              </h3>
              <p className="text-[#F5F5F5]/60 text-sm mt-3 leading-relaxed">
                Especialista em hipertrofia e emagrecimento. +67 anos de
                experiência.
              </p>
            </div>

            {/* P2 */}
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg border border-[#2a2a2a] mb-5">
                <img
                  src="wow.png"
                  alt="Personal 2"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Davi Culhões
              </h3>
              <p className="text-[#F5F5F5]/60 text-sm mt-3 leading-relaxed">
                Foco em performance e treinamento funcional. Acompanhamento
                próximo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section id="planos" className="py-20 md:py-28 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#DC2626] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Planos e preços
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Escolha o seu ritmo
            </h2>
            <p className="mt-4 text-[#F5F5F5]/60 max-w-xl mx-auto">
              Cancele quando quiser sem taxas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                hover={!plan.highlighted}
                className={`
                  relative flex flex-col
                  ${
                    plan.highlighted
                      ? "border-[#DC2626] shadow-[0_0_40px_-12px_rgba(220,38,38,0.45)] scale-[1.02] md:scale-105 z-10"
                      : ""
                  }
                `}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#DC2626] text-[#F5F5F5] text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Mais popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-black uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-[#F5F5F5]/50 text-sm mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-black">
                    R$ {plan.price}
                  </span>
                  <span className="text-[#F5F5F5]/50 text-sm">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#F5F5F5]/80"
                    >
                      <FiCheck
                        className="text-[#DC2626] shrink-0 mt-0.5"
                        size={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/assinatura" className="mt-auto">
                  <Button
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    Assinar {plan.name}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* final */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.25) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Pronto para o <span className="text-[#DC2626]">próximo nível</span>?
          </h2>
          <p className="text-[#F5F5F5]/70 text-lg mb-10 max-w-2xl mx-auto">
            Faça parte da comunidade GicosFitis. Agende uma aula experimental
            gratuita e descubra o que a gente pode fazer por você.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contato">
              <Button size="lg">
                Agendar aula grátis
                <FiArrowRight size={18} />
              </Button>
            </a>
            <a href="/sobre">
              <Button variant="ghost" size="lg">
                Conhecer a academia
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
