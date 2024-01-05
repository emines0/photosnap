'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu } from 'react-icons/tb';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import Button from './Button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Moible Navigation */}
      <header className="mobile_header">
        <div className="logo">
          <Link href="/">
            <Image
              src="assets/shared/desktop/logo.svg"
              alt="logo"
              width={170}
              height={16}
            />
          </Link>
        </div>
        <nav className={`mobile_nav ${isMenuOpen ? 'visible' : 'hidden'}`}>
          <ul className="mobile_nav_list">
            <li>
              <Link
                href="/stories"
                className="mobile_nav_link"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="mobile_nav_link"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="mobile_nav_link"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <div className="content_underline"></div>
            </li>
            <li>
              <Button
                classNames={'btn_mobile btn_primary mobile_nav_link'}
                clickAction={'Get An Invite - Mobile Navigation'}
                icon={''}
                label={'GET AN INVITE'}
              />
            </li>
          </ul>
        </nav>
        <div className="icons">
          {!isMenuOpen ? (
            <TbMenu
              size={24}
              onClick={() => setIsMenuOpen(true)}
            />
          ) : (
            <GrClose
              size={24}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </header>

      {/* Desktop Navigation */}
      <header className="desktop_header">
        <div className="logo">
          <Link href="/">
            <Image
              src="assets/shared/desktop/logo.svg"
              alt="logo"
              width={170}
              height={16}
            />
          </Link>
        </div>
        <nav>
          <ul className="desktop_nav">
            <li>
              <Link
                href="/stories"
                className="desktop_nav_link"
              >
                Stories
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="desktop_nav_link"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="desktop_nav_link"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          classNames={'btn btn_primary'}
          icon={''}
          label={'GET AN INVITE'}
          clickAction={'Get An Invite - Desktop Navigation'}
        />
      </header>
    </>
  );
};

export default Navigation;
