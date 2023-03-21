import Link from 'next/link';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ButtonLink = ({ href, size = 'md', text, leftIcon, rightIcon }) => {
  const buttonSizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
  };

  const buttonStyles = clsx(
    'inline-flex items-center justify-center border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
    buttonSizes[size]
  );

  const iconStyles = clsx(
    'h-5 w-5 mr-2',
    size === 'sm' ? 'mr-1' : 'mr-2'
  );

  return (
    <Link href={href}>
      <a className={buttonStyles}>
        {leftIcon && (
          <span className={iconStyles}>
            {leftIcon}
          </span>
        )}
        {text}
        {rightIcon && (
          <span className={iconStyles}>
            {rightIcon}
          </span>
        )}
      </a>
    </Link>
  );
};

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  text: PropTypes.string.isRequired,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
};

export default ButtonLink;
