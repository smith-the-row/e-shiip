const Footer = () => {
  return (
    <footer className="font-main">
      <div className="flex items-center justify-center">
        <div className="text-sm py-4">
          Copyright © {new Date().getFullYear()} | Delivery and logistics
        </div>
      </div>
    </footer>
  );
};

export default Footer;
