import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const InputVariants = tv({
  base: "h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
})

interface InputProps extends ComponentProps<'div'>, VariantProps<typeof InputVariants> {
  children: ReactNode
}

export function Input({children, ...props}: InputProps) {
  return (
    <div {...props} className={InputVariants()} >
      {children}
    </div>
  )
}