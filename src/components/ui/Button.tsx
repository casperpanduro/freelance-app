interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button
      type={"submit"}
      className={
        "px-8 py-4 bg-pink-600 text-white font-medium text-xl w-full mt-12"
      }
    >
      {text}
    </button>
  );
};

export default Button;
