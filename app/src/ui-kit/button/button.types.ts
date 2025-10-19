type CommonButtonPropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  wide?: boolean;

  className?: never;
};

export type BaseButtonPropsType = CommonButtonPropsType & {
  customClasses?: string;
};

export type ButtonFilledPropsType = CommonButtonPropsType & {
  appearance?: "accent";
};
