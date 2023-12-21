import Link from 'next/link';
import { MdArrowRightAlt } from 'react-icons/md';

const Button = ({ label, classNames, clickAction, icon }) => {
  return (
    <Link
      href="#"
      className={classNames}
      // onClick={() => alert(clickAction)}
    >
      {label}
      {icon !== '' && <MdArrowRightAlt size={30} />}
    </Link>
  );
};

export default Button;
