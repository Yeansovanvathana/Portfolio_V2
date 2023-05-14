const LineGradient = ({ width = "w-full" }) => {
  return (
    <div
      className={`h-0.5 ${width} bg-gradient-to-r from-secondary-100 to-secondary-200`}
    />
  );
};

export default LineGradient;
