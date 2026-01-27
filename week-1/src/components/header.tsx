interface ImagesInterface {
  src: string;
  alt: string;
}

interface HeaderProps {
  navLinks: {
    link: string;
    href: string;
  }[];
  images: {
    logo: ImagesInterface;
    search: ImagesInterface;
    bag: ImagesInterface;
  };
}

// props: {
//     navLinks:,
//     images: ,
// }

// props.navLinks, props.images

function Header({ navLinks, images }: HeaderProps) {
  return (
    <header className="inline-flex items-center justify-center">
      <div>
        <img src={images.logo.src} alt={images.logo.alt} />
      </div>
      <div>
        <nav>
          {navLinks.map((link) => (
            <a href={link.href}>{link.link}</a>
          ))}
        </nav>
      </div>
      <div>
        <button>
          <img src={images.search.src} alt={images.search.alt} />
        </button>
        <button>
          <img src={images.bag.src} alt={images.bag.alt} />
        </button>
      </div>
    </header>
  );
}

export default Header;
