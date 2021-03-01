import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
function Header() {
  return (
    <nav>
      <div className="logo">
        <h1>Hardware Selling Portal</h1>
      </div>
      <div className="menu">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">GALLERY</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
        <AddShoppingCartRoundedIcon />
      </div>
    </nav>
  );
}

export default Header;
