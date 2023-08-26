import React from "react";
import Container from "./Container";
import logo from "@/public/icons/Logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <header className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Logo do green bank" className="w-6 h-6" />
          <h2 className="font-bold text-xl">GreenBank</h2>
        </div>
        <nav className="lg:block hidden">
          <ul className="flex items-center gap-8 text-base font-medium">
            <li>
              <Link href="">Why Us</Link>
            </li>
            <li>
              <Link href="">Services</Link>
            </li>
            <li>
              <Link href="">Our Process</Link>
            </li>
            <li>
              <Link href="">Payments</Link>
            </li>
            <li>
              <Link href="">FAQs</Link>
            </li>
          </ul>
        </nav>
        <button className="py-3 px-8 border-2 border-green-base rounded-3xl text-green-base text-base font-bold hover:text-white hover:bg-green-base">
          Contact
        </button>
      </header>
    </Container>
  );
};

export default Header;
