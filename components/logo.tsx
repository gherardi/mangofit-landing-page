import Image from "next/image";

export function Logo() {
  const logo =
    "https://framerusercontent.com/images/jj8GhmMU6gOKRMNsQrqckOd9NSU.png?scale-down-to=512";
  return <Image src={logo} alt="logo" width={100} height={100} />;
}
