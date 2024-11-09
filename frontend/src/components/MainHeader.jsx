import Logo from '../assets/logo.png';
import Menu from '../assets/menu.png';
import Button from './items/Button';

export const MainHeader = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block rounded-xl"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <img src={Logo} alt="Logo" className="h-8 w-8" />
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Home
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Features
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Connect
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button to="/home">JOIN PLEASE</Button>
            <div>
              <img src={Menu} alt="Logo" className="h-8 w-8 md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
