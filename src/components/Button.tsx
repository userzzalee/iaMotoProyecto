interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md';
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: false;
  className?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger'
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: ''
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};