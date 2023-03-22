import Link from "next/link";
export default function Header() {
  return (
    <div className=" fixed w-full z-50 forst  font-medium text-xl">
      <div className="max-w-5xl mx-auto p-5 flex justify-between items-center">
        <Link href="/">nur.codes</Link>
      </div>
    </div>
  );
}
