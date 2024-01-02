'use client';
import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';
const Button = ({ label, classNames, clickAction, icon }) => {
  const buttonAction = (text) => {
    text !== '' ? alert(text) : alert('Button Clicked');
  };
  return (
    <button
      className={classNames}
      onClick={() => buttonAction(clickAction)}
    >
      {label}
      {icon !== '' && <MdArrowRightAlt size={30} />}
    </button>
  );
};

export default Button;
