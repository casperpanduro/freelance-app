import { ReactNode } from "react";

interface TextInputProps {
  type: "email" | "password" | "text";
  placeholder?: string;
  name: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoCorrect?: string;
  label?: string;
}

const TextInput = ({
  type = "text",
  id,
  autoComplete,
  label,
  onChange,
  value,
  autoCorrect,
  placeholder,
  name,
}: TextInputProps) => {
  return (
    <div className={"relative w-full"}>
      {label && (
        <label
          className={"text-sm font-semibold mb-2 block text-zinc-800"}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        value={value}
        placeholder={placeholder}
        autoCapitalize="none"
        onChange={onChange}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        className="w-full text-sm px-3 py-1.5 h-9 rounded-md border-gray-300 border focus:border-zinc-600 focus:ring-0 transition-colors focus:outline-0 duration-200 ease-in-out"
        type={type}
        name={name}
      />
    </div>
  );
};

export default TextInput;
