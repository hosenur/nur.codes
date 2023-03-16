import Link from "next/link";
export default function Header() {
  return (
    <div className="max-w-5xl p-5 mx-auto flex items-center justify-between font-medium text-xl">
      <Link href="/">nur.codes</Link>
    </div>
  );
}
