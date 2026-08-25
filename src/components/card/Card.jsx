const Card = ({
  children,
  className = "",
  hover = true,
  padding = true,
  ...props
}) => {
  return (
    <div
      className={`
        bg-[#171717] border border-[#2a2a2a] rounded-lg
        ${padding ? "p-6 md:p-8" : ""}
        ${hover ? "transition-all duration-300 hover:border-[#DC2626]/40 hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.35)]" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;