import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const registerSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  matricula: z.string().min(3, "Matrícula inválida").max(50),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres").max(100),
  confirmarSenha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  tipoUsuario: z.string().min(1, "Selecione um tipo de usuário"),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Dados do cadastro:", data);
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao realizar cadastro. Tente novamente.");
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
              Crie sua conta no AVAL
            </h2>
            <p className="text-sm text-muted-foreground">
              Cadastre-se e comece a acompanhar seus atendimentos
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nome */}
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-medium">
                Digite seu nome
              </Label>
              <Input
                id="nome"
                type="text"
                placeholder="Seu nome completo"
                {...register("nome")}
                className="h-11 transition-all duration-200 focus:border-primary"
              />
              {errors.nome && (
                <p className="text-xs text-destructive">{errors.nome.message}</p>
              )}
            </div>

            {/* Matrícula */}
            <div className="space-y-2">
              <Label htmlFor="matricula" className="text-foreground font-medium">
                Digite sua matrícula
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
                Digite sua senha
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

            {/* Confirmar Senha */}
            <div className="space-y-2">
              <Label htmlFor="confirmarSenha" className="text-foreground font-medium">
                Confirmar senha
              </Label>
              <Input
                id="confirmarSenha"
                type="password"
                placeholder="••••••••"
                {...register("confirmarSenha")}
                className="h-11 transition-all duration-200 focus:border-primary"
              />
              {errors.confirmarSenha && (
                <p className="text-xs text-destructive">
                  {errors.confirmarSenha.message}
                </p>
              )}
            </div>

            {/* Tipo de Usuário */}
            <div className="space-y-2">
              <Label htmlFor="tipoUsuario" className="text-foreground font-medium">
                Tipo de usuário
              </Label>
              <Select
                onValueChange={(value) => setValue("tipoUsuario", value)}
              >
                <SelectTrigger className="h-11 transition-all duration-200 focus:border-primary">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="aluno">Aluno</SelectItem>
                  <SelectItem value="professor">Professor</SelectItem>
                  <SelectItem value="coordenador">Coordenador</SelectItem>
                  <SelectItem value="administrativo">Administrativo</SelectItem>
                </SelectContent>
              </Select>
              {errors.tipoUsuario && (
                <p className="text-xs text-destructive">
                  {errors.tipoUsuario.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full mt-6"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-200"
            >
              Já possui uma conta?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
