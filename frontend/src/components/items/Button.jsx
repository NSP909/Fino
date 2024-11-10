import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ onClick, children, className, href }) => {
  const Component = href ? Link : 'button';
  const props = href ? { to: href } : { onClick };

  return (
    <Component
      {...props}
      className={`relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ${className}`}
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span>{children}</span>
    </Component>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  className: '',
  href: null,
};

export default Button;
