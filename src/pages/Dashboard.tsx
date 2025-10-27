import { Bell, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const userName = "Vitória";
  const userFullName = "Vitor Rocha";
  const userMatricula = "Matrícula: 028366";
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
      <header className="bg-card border-b">
        <div className="container max-w-md mx-auto px-4 py-4">
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder.svg" alt={userFullName} />
                <AvatarFallback>VR</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold text-foreground">{userFullName}</h2>
                <p className="text-xs text-muted-foreground">{userMatricula}</p>
                <Badge variant="secondary" className="mt-1 text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                  Cargo: {userRole}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-md mx-auto px-4 py-6">
        {/* Welcome Message */}
        <h1 className="text-xl font-medium text-foreground mb-4">
          Bem vinda de volta {userName}, 👋
        </h1>

        {/* Featured Card */}
        <Card className="mb-6 bg-primary text-primary-foreground border-0 overflow-hidden">
          <CardContent className="p-6 relative">
            <Badge className="mb-2 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              DESTAQUE
            </Badge>
            <h3 className="text-lg font-semibold mb-2">
              Centralize<br />seus atendimentos.
            </h3>
            <p className="text-sm text-primary-foreground/90 mb-4 max-w-[70%]">
              A AVAL centraliza seus atendimentos em apenas um só lugar, facilitando simulações que melhoram seu atendimento real!
            </p>
            <div className="absolute right-4 bottom-4 w-24 h-24 opacity-80">
              <div className="w-full h-full bg-yellow-400 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-gray-800" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Topics Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-foreground mb-4">Tópicos</h2>
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
