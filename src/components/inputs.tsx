import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const InputVariants = tv({
  base: 'bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
})

interface InputProps extends ComponentProps<'input'>, VariantProps<typeof InputVariants> {
}

export function Input({...props }: InputProps) {
  return (
    <input {...props} />
  )
}