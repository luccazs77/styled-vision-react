import { Bell, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = "vitória";
  const userFullName = "Vitor Rocha";
  const userMatricula = "025266";
  const userRole = "Administrador";

  const topics = [
    {
      title: "STATUS",
      icon: "📊",
      color: "bg-yellow-100",
      iconBg: "bg-yellow-400",
    },
    {
      title: "LISTA",
      icon: "👥",
      color: "bg-blue-100",
      iconBg: "bg-blue-400",
    },
    {
      title: "FEEDBACK",
      icon: "📈",
      color: "bg-orange-100",
      iconBg: "bg-orange-400",
    },
    {
      title: "NOVO ATENDIMENTO",
      icon: "➕",
      color: "bg-primary/10",
      iconBg: "bg-primary",
      featured: true,
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
                <h2 className="font-semibold text-foreground text-base">{userFullName}</h2>
                <p className="text-sm text-muted-foreground">Matrícula: {userMatricula}</p>
                <Badge variant="secondary" className="mt-1.5 text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-100 font-normal">
                  Cargo: {userRole}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-xl border border-border mt-1">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-md mx-auto px-5">
        {/* Welcome Message */}
        <h1 className="text-2xl font-normal text-foreground mb-5">
          Bem vinda de volta {userName}, 👋
        </h1>

        {/* Featured Card */}
        <Card className="mb-6 bg-primary/90 text-primary-foreground border-0 overflow-hidden rounded-2xl">
          <CardContent className="p-5 relative min-h-[180px]">
            <div className="absolute top-3 left-3 text-[10px] text-primary-foreground/70 font-medium">
              CEUMA<br />UNIVERSIDADE
            </div>
            <div className="relative z-10 pt-8">
              <h3 className="text-xl font-semibold mb-2 leading-tight text-primary-foreground/95">
                Centralize<br />seus atendimentos.
              </h3>
              <p className="text-xs text-primary-foreground/80 max-w-[65%] leading-relaxed">
                O AVAL centraliza seus atendimentos presenciais e transforma cada feedback em dados que melhoram sua operação em tempo real.
              </p>
            </div>
            <div className="absolute right-2 bottom-2 w-32 h-32">
              <div className="w-full h-full flex items-end justify-end">
                <div className="text-6xl">💁‍♀️</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Topics Section */}
        <div className="mb-8">
          <h2 className="text-xl font-normal text-foreground mb-4">Tópicos</h2>
          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic) => (
              <Card key={topic.title} className={`${topic.color} border-0`}>
                <CardContent className="p-4">
                  <div className={`w-16 h-16 ${topic.iconBg} rounded-2xl flex items-center justify-center mb-4 mx-auto text-3xl`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-xs font-semibold text-center mb-3 text-foreground">
                    {topic.title}
                  </h3>
                  <Button
                    variant={topic.featured ? "default" : "ghost"}
                    size="sm"
                    className={`w-full text-xs ${
                      topic.featured
                        ? "bg-gray-900 hover:bg-gray-800 text-white"
                        : "bg-transparent hover:bg-black/5"
                    }`}
                  >
                    ◉ VER MAIS
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
