import { Bell, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Recebe a matrícula vinda da página de login
  const userMatricula = location.state?.matricula || "1-000000";

  const userName = "Vitória";
  const userFullName = "Vitória Rocha";
  const userRole = "Administrador";

  const topics = [
    {
      title: "STATUS",
      icon: "/status.png",
      color: "bg-yellow-100",
    },
    {
      title: "LISTA",
      icon: "/lista.png",
      color: "bg-blue-100",
    },
    {
      title: "FEEDBACK",
      icon: "/feedback.png",
      color: "bg-orange-100",
    },
    {
      title: "NOVO\nATENDIMENTO",
      icon: "/novoAtendimento.png",
      color: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background pt-6">
        <div className="container max-w-md mx-auto px-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/login")}
            className="mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-start justify-between mb-6">
            <div className="flex gap-3">
              <Avatar className="w-16 h-16 border-2 border-border">
                <AvatarImage src="/placeholder.svg" alt={userFullName} />
                <AvatarFallback className="text-lg">VR</AvatarFallback>
              </Avatar>
              <div className="pt-1">
                <h2 className="font-semibold text-foreground text-base">
                  {userFullName}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Matrícula: {userMatricula}
                </p>
                <Badge
                  variant="secondary"
                  className="mt-1.5 text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-100 font-normal"
                >
                  Cargo: {userRole}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-xl border border-border mt-1"
            >
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-md mx-auto px-5">
        {/* Welcome Message */}
        <h1 className="text-2xl font-normal text-foreground mb-5">
          Bem-vinda de volta {userName}, 👋
        </h1>

        {/* Featured Card */}
        <Card className="mb-6 bg-primary/90 text-primary-foreground border-0 overflow-hidden rounded-2xl">
          <CardContent className="p-5 relative min-h-[180px]">
            <div className="absolute -top-2 left-3 w-20 h-20">
              <img
                src="/logoCeumaBranco.png"
                alt="CEUMA Universidade"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10 pt-8 text-start -left-2">
              <h3
                className="text-xl font-semibold mb-2 leading-tight"
                style={{ color: "#383839" }}
              >
                Centralize
                <br />
                seus atendimentos.
              </h3>
              <p
                className="text-[10px] max-w-[75%] leading-relaxed"
                style={{ color: "#383839" }}
              >
                O AVAL centraliza seus atendimentos <br /> presenciais e
                transforma cada feedback <br /> em dados que melhoram sua
                operação <br /> em tempo real.
              </p>
            </div>

            <div className="absolute right-2 bottom-2 w-40 h-40 top-15">
              <div className="w-full h-full flex items-end justify-end">
                <img
                  src="/Whisk_db7d0faca6288e982ee4123c4712587fdr 1.png"
                  alt="CEUMA Universidade"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Topics Section */}
        <div className="mb-10">
          <h2 className="text-xl font-normal text-foreground mb-4">Tópicos</h2>

          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic) => (
              <Card
                key={topic.title}
                className="border aspect-square flex flex-col items-center justify-between transition-all duration-200 hover:border-[#0043FA]"
                style={{
                  backgroundColor: "#F7F9FB",
                  borderColor: "#949494",
                }}
              >
                {/* Título */}
                <h3 className="text-xs font-semibold text-center text-foreground mt-3 whitespace-pre-line leading-tight">
                  {topic.title}
                </h3>

                {/* Ícone centralizado */}
                <div className="flex-grow flex items-center justify-center">
                  <img
                    src={topic.icon}
                    alt={topic.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* Botão */}
                <CardContent className="p-2 w-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs bg-transparent hover:bg-[#121212] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <img
                      src="/seta2.png"
                      alt="Ícone de seta"
                      className="w-5 h-5 object-contain"
                    />
                    VER MAIS
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
