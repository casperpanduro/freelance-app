interface TextInputProps {
  type: "email" | "password" | "text";
  placeholder?: string;
  name: string;
  id?: string;
  autoComplete?: string;
  autoCorrect?: string;
  label?: string;
}

const TextInput = ({
  type = "text",
  id,
  autoComplete,
  label,
  autoCorrect,
  placeholder,
  name,
}: TextInputProps) => {
  return (
    <div className={"relative"}>
      {label && (
        <label className={"text-xl mb-2 block text-white"} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        placeholder={placeholder}
        autoCapitalize="none"
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        className="w-full text-xl p-4 rounded-md border-zinc-800 border bg-zinc-800 focus:border-pink-600 focus:ring-0 transition-colors focus:outline-0 duration-200 ease-in-out"
        type={type}
        name={name}
      />
    </div>
  );
};

export default TextInput;
