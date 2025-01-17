import React from "react";

const Button = ({
  text,
  icon,
  position = "left",
  handleClick,
  otherClasses,
}: {
  text: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button
        className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-px focus:outline-none md:mt-10 md:w-60"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex size-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses || ""}`}
        >
          {position === "left" && icon}
          {text}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default Button;
