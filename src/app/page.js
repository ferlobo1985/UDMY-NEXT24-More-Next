import Image from 'next/image';

export default function Home() {
  return (
    <>
     {/* <img src="/images/image_one.jpg" width="300"/>  */}
      <Image
        src="/images/image_one.jpg"
        alt="Picture of a horse"
        fill={true}
      />
    </>
  );
}
