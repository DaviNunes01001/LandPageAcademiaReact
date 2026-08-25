import { forwardRef } from "react";

const variants = {
  primary:
    "bg-[#DC2626] text-[#F5F5F5] hover:bg-[#b91c1c] focus-visible:ring-[#DC2626]",
  secondary:
    "bg-transparent border-2 border-[#F5F5F5] text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#0B0B0B] focus-visible:ring-[#F5F5F5]",
  outline:
    "bg-transparent border-2 border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-[#F5F5F5] focus-visible:ring-[#DC2626]",
  ghost:
    "bg-transparent text-[#F5F5F5] hover:bg-[#171717] focus-visible:ring-[#F5F5F5]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      type = "button",
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center gap-2
          font-semibold uppercase tracking-wide
          rounded-sm transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0B]
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variants[variant] || variants.primary}
          ${sizes[size] || sizes.md}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;