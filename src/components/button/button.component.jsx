import { BaseButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
  }[buttonType]);

const Button = ({ buttonType, children, type, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton type={type || 'button'} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
