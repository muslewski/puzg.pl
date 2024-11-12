import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  border: "bl" | "br" | "tl" | "tr";
  textarea?: boolean;
}

export default function Input({
  label,
  id,
  border,
  textarea,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-brandNeutrals-900">
        {label}
      </label>
      <div
        className={clsx(
          " from-brandPrimaryBlue via-brandBrightBlue/30 to-washedBlue-500/0 w-full h-fit rounded-xl text-base md:text-lg 3xl:text-xl font-outfit font-normal",
          border === "bl" && " pb-0.5 pl-0.5 bg-gradient-to-tr",
          border === "br" && " pb-0.5 pr-0.5 bg-gradient-to-tl",
          border === "tl" && " pt-0.5 pl-0.5 bg-gradient-to-br",
          border === "tr" && " pt-0.5 pr-0.5 bg-gradient-to-bl"
        )}
      >
        {textarea ? (
          <textarea
            id={id}
            className="min-h-[200px] md:min-h-[312px] p-4 rounded-xl w-full bg-white shadow-inner3 focus:outline-none transition-colors focus:border-washedBlue-600 border-2 border-washedBlue-200 border-double block"
            required
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={id}
            className="p-4 rounded-xl w-full bg-white shadow-inner3 focus:outline-none transition-colors focus:border-washedBlue-600 border-2 border-washedBlue-200 border-double"
            type={id === "email" ? id : "text"}
            required
            {...rest}
          />
        )}
      </div>
    </div>
  );
}
