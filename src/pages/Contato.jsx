import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Formulario from "../components/Formulario/Formulario";

function Contato() {
  return (
    <main className="min-h-[calc(100vh-100px)] bg-[#0B0B0B]">
      <section className="bg-[#DC2626] text-[#F5F5F5] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Fale conosco
          </h1>
          <p className="mt-3 text-[#F5F5F5]/90 max-w-xl mx-auto text-base sm:text-lg">
            Tem alguma dúvida, sugestão ou quer fazer uma parceria? Envie sua
            mensagem e retornaremos o mais rápido possível.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#F5F5F5] mb-2">
                Informações de contato
              </h2>
              <p className="text-[#F5F5F5]/70 text-sm sm:text-base">
                Prefere falar diretamente? Use um dos canais abaixo.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#DC2626] border border-[#F5F5F5]/10">
                  <FaMapMarkerAlt className="text-lg" />
                </span>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Endereço</p>
                  <p className="text-sm text-[#F5F5F5]/60 mt-0.5">
                    Rua Belterra, 101 — Centro
                    <br />
                    São Paulo, SP — CEP 01000-000
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#DC2626] border border-[#F5F5F5]/10">
                  <FaPhoneAlt className="text-lg" />
                </span>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Telefone</p>
                  <p className="text-sm text-[#F5F5F5]/60 mt-0.5">
                    (11) 4000-1234
                    <br />
                    (11) 99999-8888 (WhatsApp)
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#DC2626] border border-[#F5F5F5]/10">
                  <FaEnvelope className="text-lg" />
                </span>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">E-mail</p>
                  <p className="text-sm text-[#F5F5F5]/60 mt-0.5">
                    gicos@gym.com.br
                    <br />
                    GIcosuporte@gym.com.br
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#171717] text-[#DC2626] border border-[#F5F5F5]/10">
                  <FaClock className="text-lg" />
                </span>
                <div>
                  <p className="font-semibold text-[#F5F5F5]">Horário de atendimento</p>
                  <p className="text-sm text-[#F5F5F5]/60 mt-0.5">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#F5F5F5] mb-6 text-center lg:text-left">
              Envie uma mensagem
            </h2>
            <Formulario />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contato;