import { User, AtSign, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"
import { Input } from "../../components/input"


interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}


export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>

            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianopolis</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de agosto de 2024</span> preencha os dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <Input>
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </Input>

          <Input>
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </Input>

          <Button type="submit" variant="primary" size="full">
            <span>Confirmar criação da viagem</span>
          </Button>

        </form>
      </div>
    </div>
  )
}