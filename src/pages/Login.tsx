import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const loginSchema = z.object({
  matricula: z.string().min(3, "Matrícula inválida").max(50),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").max(100),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Dados do login:", data);
      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Erro ao realizar login. Verifique suas credenciais.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl border-2 border-primary/20 p-8 shadow-[0_4px_20px_-2px_hsl(220_90%_56%/0.15)] animate-in fade-in-0 zoom-in-95 duration-500">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black text-primary mb-3 tracking-tight">
              AVAL
            </h1>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Acesse sua conta
            </h2>
            <p className="text-sm text-muted-foreground">
              Digite suas credenciais para continuar
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Matrícula */}
            <div className="space-y-2">
              <Label htmlFor="matricula" className="text-foreground font-medium">
                Matrícula
              </Label>
              <Input
                id="matricula"
                type="text"
                placeholder="Número da matrícula"
                {...register("matricula")}
                className="h-11 transition-all duration-200 focus:border-primary"
              />
              {errors.matricula && (
                <p className="text-xs text-destructive">{errors.matricula.message}</p>
              )}
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <Label htmlFor="senha" className="text-foreground font-medium">
                Senha
              </Label>
              <Input
                id="senha"
                type="password"
                placeholder="••••••••"
                {...register("senha")}
                className="h-11 transition-all duration-200 focus:border-primary"
              />
              {errors.senha && (
                <p className="text-xs text-destructive">{errors.senha.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
            >
              Criar nova conta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
