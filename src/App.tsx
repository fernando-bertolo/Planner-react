import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus} from "lucide-react"
import { FormEvent, useState } from "react"

function App() {

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    'fernando@gmail.com',
  ]);


  function openGuestsInput(){
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput(){
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal(){
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal(){
    setIsGuestsModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsToInvite.includes(email)){
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string){
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove);

    setEmailsToInvite(newEmailList);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?"  className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>

            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?"  className="bg-transparent text-lg placeholder-zinc-400 outline-none"/>          
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {isGuestsInputOpen ? (
              <button
                className="bg-zinc-800 text-zinc-200 px-5  py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700"
                onClick={closeGuestsInput}
              > 
                Alterar local/data
                <Settings2 className="size-5"/>
              </button>
            ): (
              <button 
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
                onClick={openGuestsInput}
              >
                Continuar
                <ArrowRight className="size-5"/>
              </button>
            )}

          </div>

          {isGuestsInputOpen && (
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">

            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 flex-1">
              <UserRoundPlus className="size-5 text-zinc-400"/>
              <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
            </button>

            <div className="w-px h-6 bg-zinc-800"></div>

            <button 
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
              onClick={openGuestsInput}
            >
              Confirmar viagem
              <ArrowRight className="size-5"/>
            </button>

          </div>
          )}

        </div>


        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="">políticas de privacidade</a>
        </p>
      </div>
      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
            <div className="bg-zinc-900 w-[640px] rounded-xl py-5 px-6 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Selecionar convidados</h2>

                  <button type="button" onClick={closeGuestsModal}>
                    <X className="size-5 text-zinc-400"/>
                  </button>
                </div>
                <p className="text-sm text-zinc-400"> Os convidados receberão e-mails para confirmar a participação na viagem.</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {emailsToInvite.map((email, index) => {
                  return (
                    <div key={index} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                      <span className="text-zinc-300">{email}</span>
                      <button type="button">
                        <X className="size-4 text-zinc-400" onClick={() => removeEmailFromInvites(email)}/>
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="w-full h-px bg-zinc-800"></div>

              <form onSubmit={addNewEmailToInvite} className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <AtSign className="text-zinc-400 size-5"/>
                <input 
                  type="email"
                  name="email" 
                  placeholder="Digite o e-mail do convidado" 
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
                
                <button type="submit" className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                  <span>Confirmar</span>
                  <Plus className="size-5"/>
                </button>

              </form>

            </div>
        </div>
      )}    
          

    </div>
  )
}

export default App
