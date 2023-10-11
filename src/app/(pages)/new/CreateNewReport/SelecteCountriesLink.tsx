import Link from "next/link";

export function SelecteCountriesLink() {
  return (
    <div className="w-full flex justify-end">
      <Link
        href="/selectcontry"
        className="w-40 block text-center bg-primary-blue_50 text-black rounded-md py-2 text-sm"
      >
        Selecionar países
      </Link>
    </div>
  );
}
