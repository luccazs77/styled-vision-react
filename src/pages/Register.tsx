import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { FloatingLabelSelect } from "@/components/ui/FloatingLabelSelect";
import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    senha: "",
    confirmarSenha: "",
    tipoUsuario: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nome ||
      !formData.matricula ||
      !formData.senha ||
      !formData.confirmarSenha ||
      !formData.tipoUsuario
    ) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não coincidem");
      return;
    }

    if (formData.nome.length < 15) {
      toast.error("O nome deve ter no mínimo 20 caracteres");
      return;
    }

    // 🔹 Validação da matrícula no formato 1-00XXXX
    const matriculaRegex = /^1-00\d{4}$/;
    if (!matriculaRegex.test(formData.matricula)) {
      toast.error("A matrícula deve estar no formato 1-00XXXX (ex: 1-001234)");
      return;
    }

    toast.success("Cadastro realizado com sucesso!");
    navigate("/"); // redireciona para a tela de login
  };

  const tiposUsuario = [
    { value: "aluno", label: "Aluno" },
    { value: "professor", label: "Professor" },
    { value: "coordenador", label: "Coordenador" },
    { value: "administrador", label: "Administrador" },
  ];

  return (
    <>
      <WaveBackground />
      <div className="min-h-screen flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-3xl shadow-xl p-8 space-y-6">
            {/* Logo */}
            <div className="text-start">
              <h1 className="text-5xl font-black text-primary mb-6 text-center">
                AVAL
              </h1>
              <h2 className="text-xl font-semibold text-primary mb-2">
                Crie sua conta no AVAL
              </h2>
              <p className="text-sm text-muted-foreground">
                Cadastre-se e comece a acompanhar <br /> atendimentos.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8 pt-4">
              <FloatingLabelInput
                label="Digite seu nome"
                type="text"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />

              <FloatingLabelInput
                label="Digite sua matrícula"
                type="text"
                value={formData.matricula}
                onChange={(e) =>
                  setFormData({ ...formData, matricula: e.target.value })
                }
              />

              <FloatingLabelInput
                label="Digite sua senha"
                type="password"
                value={formData.senha}
                onChange={(e) =>
                  setFormData({ ...formData, senha: e.target.value })
                }
              />

              <FloatingLabelInput
                label="Confirmar senha"
                type="password"
                value={formData.confirmarSenha}
                onChange={(e) =>
                  setFormData({ ...formData, confirmarSenha: e.target.value })
                }
              />

              <FloatingLabelSelect
                label="Tipo de usuário"
                options={tiposUsuario}
                value={formData.tipoUsuario}
                onChange={(e) =>
                  setFormData({ ...formData, tipoUsuario: e.target.value })
                }
              />

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-[#7b9cf5] hover:bg-[#0043FA] text-[#0043FA] hover:text-white border border-[#325fda] rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                Cadastrar
              </Button>
            </form>

            {/* Link */}
            <div className="text-start text-sm pt-2">
              <Link
                to="/login"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Já possuo uma conta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
