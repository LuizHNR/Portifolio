import Link from "next/link";
import { GoArrowDownLeft } from "react-icons/go";
import { SaoPauloClock } from "../time/saoPauloClock";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* Contact */}
      <section>
        <p>&lt;contact&gt;</p>

        <p>
          Feel free to reach me on{" "}
          <Link href="https://www.linkedin.com/in/luiz-henrique-neri-reimberg-6ab0032b8/" target="_blank">
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link href="https://www.instagram.com/lu_lhnr/" target="_blank">
            Instagram
          </Link>
        </p>

        <p>&lt;/contact&gt;</p>
      </section>

      {/* Divider */}
      <section>
        <GoArrowDownLeft />
        <hr />
        <p>Get to know me</p>
      </section>

      {/* Contact Info */}
      <address>
        <p>luizhneri19@gmail.com</p>
        <p>+55 11 97307-6649</p>
      </address>

      {/* Footer Bottom */}
      <section>
        <div>
          <p>Version</p>
          <p>2026 &copy; Edition</p>
        </div>

        <div>
          <p>Time São Paulo</p>
          <SaoPauloClock />
        </div>
      </section>

    </footer>
  );
}
