const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
       <img src="/public/brand_logo (1).png" alt="brand-logo"></img>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;