import React from "react";

interface Props {

  children?: React.ReactNode;

  onClick: () => void;

}

const Button1: React.FC<Props> = ({ 

    children,

    onClick, 

  }) => { 
  return (
    <button 
      onClick={onClick}
    >
    {children}
    </button>
  );
}

export default Button1;