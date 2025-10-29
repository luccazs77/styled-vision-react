import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { Button } from "@/components/ui/button";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    matricula: "",
    senha: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.matricula || !formData.senha) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    toast.success("Login realizado com sucesso!");
    // Aqui você implementaria a lógica de login real
  };

  return (
    <>
      <WaveBackground />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-3xl shadow-xl p-8 space-y-6">
            {/* Logo */}
            <div className="text-start">
              <h1 className="text-5xl font-black text-primary mb-6 text-center">AVAL</h1>
              <h2 className="text-xl font-semibold text-primary mb-2">
                Faça seu login no AVAL
              </h2>
              <p className="text-sm text-muted-foreground">
                Gerencie atendimentos e métricas em <br /> tempo real.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8 pt-4">
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

              <Link
                to="/dashboard"
                className="w-full h-12 flex items-center justify-center text-base font-semibold bg-[#7b9cf5] hover:bg-[#0043FA] text-[#0043FA] hover:text-white border border-[#325fda] rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
              >
                Entrar
              </Link>
            </form>

            {/* Links */}
            <div className="flex justify-between items-center text-sm pt-2">
              <Link
                to="/register"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Esqueceu a senha?
              </Link>
              <Link
                to="/register"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Não tem conta? <span className="text-primary font-semibold">Criar agora</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
