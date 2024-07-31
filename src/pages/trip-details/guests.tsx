import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests(){
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Fernando Bertolo </span>
            <span className="block text-sm text-zinc-400 truncate">
              fernando.bertolo.jr123@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">Ana Julia Wenzel</span>
            <span className="block text-sm text-zinc-400 truncate">
              anajuliawenzel2004@hotmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        Gerenciar convidados
        <UserCog className="size-5" />
      </Button>
    </div>
  )
}