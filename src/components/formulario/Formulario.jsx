import { useState } from "react";
import { z } from "zod";
import { FaUser, FaCommentDots, FaCheckCircle } from "react-icons/fa";

const schema = z.object({
  nome: z
    .string()
    .min(3, "Digite um nome com pelo menos 3 caracteres.")
    .max(80, "O nome deve ter no máximo 80 caracteres."),
  email: z
    .string()
    .min(1, "O e-mail é obrigatório.")
    .email("Informe um e-mail válido."),
  telefone: z
    .string()
    .min(10, "Informe um telefone válido com DDD (mínimo 10 dígitos).")
    .max(15, "Telefone inválido.")
    .regex(/^[0-9()\s-]+$/, "Use apenas números e caracteres de telefone."),
  mensagem: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres.")
    .max(500, "A mensagem deve ter no máximo 500 caracteres."),
});

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (erros[name]) {
      setErros((prev) => {
        const novos = { ...prev };
        delete novos[name];
        return novos;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(false);

    const resultado = schema.safeParse(formData);

    if (!resultado.success) {
      const errosFormatados = {};
      resultado.error.issues.forEach((issue) => {
        const campo = issue.path[0];
        if (!errosFormatados[campo]) {
          errosFormatados[campo] = issue.message;
        }
      });
      setErros(errosFormatados);
      return;
    }

    setErros({});
    setEnviando(true);

    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
    }, 900);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {enviado && (
        <div className="flex items-center gap-3 rounded-lg bg-[#171717] border border-[#DC2626]/40 text-[#F5F5F5] px-4 py-3 mb-5">
          <FaCheckCircle className="text-xl shrink-0 text-[#DC2626]" />
          <p className="text-sm font-medium">
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-[#171717] rounded-xl shadow-lg border border-[#0B0B0B] p-6 sm:p-8 space-y-5"
      >
        <div>
          <label
            htmlFor="nome"
            className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]"
          >
            <FaUser className="text-[#DC2626]" />
            Nome completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: Maria Silva"
            className={`w-full rounded-lg border px-4 py-2.5 text-[#F5F5F5] placeholder:text-[#F5F5F5]/40 outline-none focus:ring-2 focus:ring-[#DC2626] bg-[#0B0B0B] ${
              erros.nome
                ? "border-[#DC2626] bg-[#DC2626]/10"
                : "border-[#F5F5F5]/15 hover:border-[#DC2626]/50"
            }`}
          />
          {erros.nome && (
            <p className="mt-1.5 text-sm text-[#DC2626]">{erros.nome}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@exemplo.com"
            className={`w-full rounded-lg border px-4 py-2.5 text-[#F5F5F5] placeholder:text-[#F5F5F5]/40 outline-none focus:ring-2 focus:ring-[#DC2626] bg-[#0B0B0B] ${
              erros.email
                ? "border-[#DC2626] bg-[#DC2626]/10"
                : "border-[#F5F5F5]/15 hover:border-[#DC2626]/50"
            }`}
          />
          {erros.email && (
            <p className="mt-1.5 text-sm text-[#DC2626]">{erros.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="telefone"
            className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className={`w-full rounded-lg border px-4 py-2.5 text-[#F5F5F5] placeholder:text-[#F5F5F5]/40 outline-none focus:ring-2 focus:ring-[#DC2626] bg-[#0B0B0B] ${
              erros.telefone
                ? "border-[#DC2626] bg-[#DC2626]/10"
                : "border-[#F5F5F5]/15 hover:border-[#DC2626]/50"
            }`}
          />
          {erros.telefone && (
            <p className="mt-1.5 text-sm text-[#DC2626]">{erros.telefone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="mensagem"
            className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#F5F5F5]"
          >
            <FaCommentDots className="text-[#DC2626]" />
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            placeholder="Escreva sua mensagem aqui..."
            className={`w-full rounded-lg border px-4 py-2.5 text-[#F5F5F5] placeholder:text-[#F5F5F5]/40 outline-none focus:ring-2 focus:ring-[#DC2626] resize-y min-h-[120px] bg-[#0B0B0B] ${
              erros.mensagem
                ? "border-[#DC2626] bg-[#DC2626]/10"
                : "border-[#F5F5F5]/15 hover:border-[#DC2626]/50"
            }`}
          />
          {erros.mensagem && (
            <p className="mt-1.5 text-sm text-[#DC2626]">{erros.mensagem}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#DC2626] px-6 py-3 font-semibold text-[#F5F5F5] hover:bg-[#b91c1c] focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:ring-offset-[#171717]"
        >
          {enviando ? "Enviando..." : "Enviar mensagem"}
        </button>
      </form>
    </div>
  );
}

export default Formulario;