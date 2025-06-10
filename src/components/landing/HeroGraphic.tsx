import Image from 'next/image';

export function HeroGraphic() {
  // IMPORTANT: Replace "/my-hero-image.png" with the actual filename of your image in the public folder.
  const userImagePath = "/my-hero-image.png"; 

  return (
    <Image
      src={userImagePath}
      alt="Hero section image"
      width={500} 
      height={500} 
      className="mx-auto sm:w-full lg:order-last object-contain rounded-xl shadow-lg" 
      priority 
    />
  );
}
