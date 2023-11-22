import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => (
    <button
      type={type}
      ref={ref}
      disabled={disabled}
      className={twMerge(
        "w-full rounded-full bg-zinc-600 border border-transparent p-2 disabled:cursor-not-allowed disabled:opacity-50 text-white font-bold hover:bg-zinc-700 transition duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

export default Button;
