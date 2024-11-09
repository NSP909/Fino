import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, to }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]"
      onClick={handleClick}
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span className="text-white">{children}</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default Button;