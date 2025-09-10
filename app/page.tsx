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
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")

  const toggleUsed = (id: string) => {
    setKeys(keys.map((key) => (key.id === id ? { ...key, used: !key.used } : key)))
  }
  const popUp = (message: string) => {
    setModalMessage(message)
    setModalOpen(true)
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
      {/* Modal personalizado */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2">
          <div className="bg-card/90 border border-border rounded-lg shadow-lg p-4 sm:p-8 max-w-xs sm:max-w-sm w-full relative static-effect">
            <button
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              onClick={() => setModalOpen(false)}
              aria-label="Cerrar"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-4">
              <img
                src="icono.png"
                alt="Silent Hill"
                width={40}
                height={40}
                className="horror-flicker"
                style={{ objectFit: "cover" }}
              />
              <p className="text-lg text-center text-foreground font-semibold">{modalMessage}</p>
              <button
                className="mt-4 px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-accent transition"
                onClick={() => setModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60 pointer-events-none mist-effect"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none fog-drift"></div>

      <div className="relative z-10">
        <div className="border-b border-border bg-gradient-to-r from-background/80 via-muted/60 to-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-2 sm:px-6 py-4 sm:py-8">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2">
              <div className="w-8 h-8 border-2 border-primary rotate-45 flex items-center justify-center horror-flicker">
                <img
                  src="icono.png"
                  alt="Silent Hill"
                  width={24}
                  height={24}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-wider text-foreground static-effect text-center sm:text-left">SILENT HILL 2 REMAKE</h1>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm justify-center sm:justify-start">
              <div className="w-2 h-2 bg-primary animate-pulse horror-flicker"></div>
              <span>Encuentra a tu Mary</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-2 sm:px-6 py-12 sm:py-80">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-6">
              <img
                src="icono.png"
                alt="Silent Hill"
                width={24}
                height={24}
                style={{ objectFit: "cover" }}
              />
              <h2 className="text-base sm:text-xl font-bold text-foreground tracking-wide text-center sm:text-left">Esperemos que te guste</h2>
            </div>

            {keys.length === 0 ? (
              <Card className="bg-card/50 border-border border-dashed">
                <div className="p-8 sm:p-12 text-center">
                  <Key className="w-8 h-8 sm:w-12 sm:h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground tracking-wide text-sm sm:text-base">No tienes keys</p>
                </div>
              </Card>
            ) : (
              keys.map((key) => 
                (
                  <Card
                    key={key.id}
                    className={`bg-card/80 border-border backdrop-blur-sm transition-all duration-200 hover:bg-card/90 static-effect ${key.used ? "opacity-60" : ""}`}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-3">
                            <h3 className="text-base sm:text-lg font-bold text-card-foreground tracking-wide">{key.game}</h3>
                            <Badge variant="outline" className="border-border text-muted-foreground">
                              {key.platform}
                            </Badge>
                          </div>

                          <div className="bg-input p-2 sm:p-3 rounded border border-border mb-3">
                            <div className="flex items-center justify-between gap-2">
                              <code className="text-foreground tracking-widest font-mono text-xs sm:text-base">
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

                          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
                            Fecha: {new Date(key.dateAdded).toLocaleDateString()}
                          </p>
                        </div>

                        <div className="flex gap-2 mt-2 sm:mt-0 ml-0 sm:ml-4 w-full sm:w-auto justify-center sm:justify-end">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => popUp("Habla con tu guía para que te ayude por esta ciudad y no perderte con la niebla")}
                            className="border-border text-foreground hover:bg-muted hover:text-foreground w-full sm:w-auto"
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
