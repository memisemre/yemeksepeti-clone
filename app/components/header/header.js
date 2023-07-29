import Link from "next/link";
import Style from "./header.module.scss";
import Image from "next/image";
const Header = () => {
  return (
    <header className={Style.header}>
      <div className={Style.logoWrapper}>
        <Link href="/">
          <Image src="/logo.svg" width={120} height={31} />
        </Link>
      </div>
      <div className={Style.userControl}>
        <div className={Style.languageSwitcher}>TR</div>
        <div className={Style.loginBTN}>
          <Link href="/">
            <Image src="/login.svg" width={24} height={24} /> LOGIN
          </Link>
        </div>
        <div className={Style.cart}>
          <Link href="/">
            <Image src="/cart.svg" width={24} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
