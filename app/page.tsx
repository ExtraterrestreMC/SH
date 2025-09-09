"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Copy, Plus, Key, Skull, Icon } from "lucide-react"

interface GameKey {
  id: string
  game: string
  key: string
  platform: string
  dateAdded: string
  used: boolean
}

export default function SilentHillKeysPage() {
  const [keys, setKeys] = useState<GameKey[]>([
    {
      id: "1",
      game: "Silent Hill",
      key: "1234-5678-1234-5678",
      platform: "Steam",
      dateAdded: "2025-09-11",
      used: false,
    },
  ])





  const toggleUsed = (id: string) => {
    setKeys(keys.map((key) => (key.id === id ? { ...key, used: !key.used } : key)))
  }

  const copyKey = (keyValue: string) => {
    navigator.clipboard.writeText(keyValue)
  }

  return (
    <div id="page-container"
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(42, 42, 42, 0.7), rgba(42, 42, 42, 0.8)), url('https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/10/silent-hill-2-remake-4252029.jpg?tf=1200x')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 pointer-events-none mist-effect"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none fog-drift"></div>

      <div className="relative z-10">
        <div className="border-b border-border bg-gradient-to-r from-background/80 via-muted/60 to-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-8 border-2 border-primary rotate-45 flex items-center justify-center horror-flicker">
                <img
                  src="icono.png"
                  alt="Silent Hill"
                  width={24}
                  height={24}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h1 className="text-4xl font-bold tracking-wider text-foreground static-effect">SILENT HILL 2 REMAKE</h1>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <div className="w-2 h-2 bg-primary animate-pulse horror-flicker"></div>
              <span>Encuentra a tu Mary</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-80">
         
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
                <img
                  src="icono.png"
                  alt="Silent Hill"
                  width={24}
                  height={24}
                  style={{ objectFit: "cover" }}
                />
              <h2 className="text-xl font-bold text-foreground tracking-wide">Esperemos que te guste</h2>

            </div>

            {keys.length === 0 ? (
              <Card className="bg-card/50 border-border border-dashed">
                <div className="p-12 text-center">
                  <Key className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground tracking-wide">No tienes keys</p>
                </div>
              </Card>
            ) : (
              keys.map((key) => 
                (
                  <Card
                    key={key.id}
                    className={`bg-card/80 border-border backdrop-blur-sm transition-all duration-200 hover:bg-card/90 static-effect ${key.used ? "opacity-60" : ""}`}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-lg font-bold text-card-foreground tracking-wide">{key.game}</h3>

                            <Badge variant="outline" className="border-border text-muted-foreground">
                              {key.platform}
                            </Badge>
                          </div>

                          <div className="bg-input p-3 rounded border border-border mb-3">
                            <div className="flex items-center justify-between">
                              <code className="text-foreground tracking-widest font-mono">
                                {key.used ? key.key : key.key.replace(/./g, "•")}
                              </code>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => copyKey(key.key)}
                                className="text-foreground hover:text-muted-foreground hover:bg-muted/20"
                              >
                                <Copy className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>

                          <p className="text-muted-foreground text-sm">
                            Fecha: {new Date(key.dateAdded).toLocaleDateString()}
                          </p>
                        </div>

                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => toggleUsed(key.id)}
                            className="border-border text-foreground hover:bg-muted hover:text-foreground"
                          >
                            {key.used ? "USADO" : "SIN USAR"}
                          </Button>

                        </div>
                      </div>
                    </div>
                  </Card>
                ))
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
