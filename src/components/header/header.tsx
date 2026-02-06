import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaPenNib } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";

import SplitText from "../split/SplitText";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <Link href="/">
        <SplitText
          text="© Code by Luiz"
          className={styles.logo}
          splitType="chars"
          delay={40}
          duration={0.8}
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="left"
        />
      </Link>

      <nav>
        <ul className={styles.menu}>
          <NavItem href="/" label="Home">
            <IoMdHome />
          </NavItem>

          <NavItem href="/work" label="Work">
            <FaPenNib />
          </NavItem>

          <NavItem href="/contact" label="Contact">
            <MdPermPhoneMsg />
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}

function NavItem({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className={styles.navItem}>
        <span className={styles.content}>
          <span className={styles.icon}>{children}</span>
          <span className={styles.label}>{label}</span>
        </span>
      </Link>
    </li>
  );
}
