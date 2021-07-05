import React from "react";

interface NavItem {
  title: string;
  href: string;
}

export interface NavigationProps {
  navItems: NavItem[];
  className?: string;
}

const Navigation = ({ navItems = [], className = "" }: NavigationProps) => {
  return (
    <nav className={`c-navigation align-items-center ${className}`}>
      {navItems.map((item, index) => (
        <a
          key={index}
          className={`c-navigation-link ${
            index + 1 !== navItems.length ? "h-mr-7" : ""
          }`}
          href={item.href}
        >
          <strong>{item.title}</strong>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
