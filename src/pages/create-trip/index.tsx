import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, User} from "lucide-react"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";

export function CreateTripPage() {

  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  
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

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false);
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

  function createTrip(){

    navigate('/trips/123');
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
              {emailsToInvite.length > 0 ? (
                  <span className="text-zinc-100 text-lg flex-1 text-left">{emailsToInvite.length} pessoa(s) convidada(s)</span>
              ): (
                <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
              )}
            </button>

            <div className="w-px h-6 bg-zinc-800"></div>

            <button 
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
              onClick={openConfirmTripModal}
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
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          emailsToInvite={emailsToInvite}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}


      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
