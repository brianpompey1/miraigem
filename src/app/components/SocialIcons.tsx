// app/components/SocialIcons.tsx
"use client";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className="flex">
      <a
        href="https://www.instagram.com/themiraigroup/"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 social-icon-link"
      >
        <Image
          src="/instagram.svg" // Corrected path: starts with /
          alt="Instagram"
          width={24}
          height={24}
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCwoPGReEgmveJdCg9JT1K_g"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 social-icon-link"
      >
        <Image
          src="/youtube.svg"   // Corrected path: starts with /
          alt="YouTube"
          width={24}
          height={24}
        />
      </a> 
    </div>
  );
};

export default SocialIcons;