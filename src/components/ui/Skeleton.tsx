interface Props {
  width?: string;
  height?: string;
}

const Skeleton = ({ width, height }: Props) => {
  return (
    <div
      className={"bg-gray-100 rounded w-full h-4"}
      style={{
        width: width,
        height: height,
      }}
    ></div>
  );
};

export default Skeleton;
