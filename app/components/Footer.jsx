import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="box-1">
          <div className="footer_logo">
            <Link href="/">
              <Image
                src="/assets/shared/desktop/logo-white.svg"
                alt="logo"
                width={170}
                height={16}
              />
            </Link>
          </div>
          <div className="footer_nav">
            <Link
              href="/"
              className="footer_link"
            >
              HOME
            </Link>
            <Link
              href="/stories"
              className="footer_link"
            >
              STORIES
            </Link>
            <Link
              href="/features"
              className="footer_link"
            >
              FEATURES
            </Link>
            <Link
              href="/pricing"
              className="footer_link"
            >
              PRICING
            </Link>
          </div>
          <div className="footer_socials">
            <Image
              src="/assets/shared/desktop/facebook.svg"
              alt="facebook"
              priority
              width={20}
              height={20}
            />
            <Image
              src="/assets/shared/desktop/youtube.svg"
              alt="youtube"
              priority
              width={20}
              height={20}
            />
            <Image
              src="/assets/shared/desktop/twitter.svg"
              alt="twitter"
              priority
              width={20}
              height={20}
            />
            <Image
              src="/assets/shared/desktop/pinterest.svg"
              alt="pinterest"
              priority
              width={20}
              height={20}
            />
            <Image
              src="/assets/shared/desktop/instagram.svg"
              alt="instagram"
              priority
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="box-2">
          <Button
            classNames={'btn_out_primary btn_footer'}
            icon="/assets/shared/desktop/arrow.svg"
            label={'GET AN INVITE'}
          />
          <p className="copyright">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
