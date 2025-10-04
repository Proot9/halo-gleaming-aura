import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-background via-background to-primary/10">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Selamat Datang
        </h1>
        <p className="text-lg text-muted-foreground">
          Kelola profil dan akun Anda dengan mudah
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={() => navigate("/auth")} size="lg">
            <LogIn className="mr-2 h-5 w-5" />
            Masuk / Daftar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
