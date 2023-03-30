import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  warning,
  danger,
  rounded,
  outline,
  success,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-700 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-700 text-white": secondary,
      "border-yellow-500 bg-yellow-400 text-white": warning,
      "border-red-700 bg-red-500 text-white": danger,
      "border-green-700 bg-green-500 text-white": success,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-700": outline && primary,
      "text-gray-900": outline && secondary,
      "text-yellow-500": outline && warning,
      "text-red-700": outline && danger,
      "text-green-700": outline && success,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, warning, success, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1)
      return new Error(
        "Only one of primary, secondary, warning, success, danger can be true"
      );
  },
};

export default Button;
