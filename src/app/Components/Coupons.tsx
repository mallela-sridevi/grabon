











import Image from 'next/image';
import Link from 'next/link';
import { getData } from "@/services/clickhouse/db";
import { offerquery } from "@/services/clickhouse/query";
interface CouponsProps {
  title: string;
  description: string;
  link: string;
  eof: string;
  deal: string;
  off: string;
  flat: string;
  subDes: string;
}

const Coupons: React.FC<CouponsProps> = async({
  title,
  description,
  link,
  eof,
  deal,
  off,
  flat,
  subDes,
}) => 
  
  {
    const offers=await getData(offerquery)
    console.log(offers)
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Domino's Logo */}
            <Image
              src={link}
              alt="Domino's Logo"
              width={50}
              height={50}
              className="rounded-md" // Optional: Tailwind classes for styling
              priority // Loads the image with high priority
            />
            <h1 className="text-2xl font-bold">{title}'s Coupon Codes Today</h1>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">⭐ 4/5 (1981 Votes)</span>
            <button className="bg-white text-blue-800 px-3 py-1 rounded-md">
              Existing User
            </button>
          </div>
        </div>
      </header>

      {/* Main Section */}
     

<main className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
  {/* Filters Section */}
  <div className="lg:col-span-1 space-y-6">
    <aside className="bg-gray-100 p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Filter</h3>
      <input
        type="text"
        placeholder="Search in Filters"
        className="w-full border rounded-md p-2 mb-4"
      />
      <div>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Fast Food
        </label>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" />
          Food Delivery
        </label>
        <label className="block">
          <input type="checkbox" className="mr-2" />
          Pizza
        </label>
      </div>
    </aside>

    <aside className="bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-lg font-semibold mb-2">Popular Merchants</h1>
      <div className="space-y-2">
        <a
          href="#"
          className="block text-blue-600 hover:underline hover:text-blue-800"
          aria-label="Dominos Coupons"
        >
          Dominos Coupons
        </a>
        <a
          href="/myntra"
          className="block text-blue-600 hover:underline hover:text-blue-800"
          aria-label="Myntra Coupons"
        >
          Myntra Coupons
        </a>
        <a
          href="#"
          className="block text-blue-600 hover:underline hover:text-blue-800"
          aria-label="Amazon Coupons"
        >
          Amazons Coupons
        </a>
        <a
          href="#"
          className="block text-blue-600 hover:underline hover:text-blue-800"
          aria-label="Samsung Coupons"
        >
          Samsung Coupons
        </a>
        <a
          href="#"
          className="block text-blue-600 hover:underline hover:text-blue-800"
          aria-label="Ajio Coupons"
        >
          Ajio Coupons
        </a>
        <a
          href="#"
          className="block text-blue-600 hover:underline hover:text-blue-800"
          aria-label="udemy Coupons"
        >
          Udemy Coupons
        </a>
      </div>
    </aside>
  </div>

  {/* Coupons Section */}
  <div className="lg:col-span-3">
    {offers.map((offer: any, index: number) => (
      <div
        key={offer.id || index}
        className="border rounded-md p-4 bg-white shadow-md mb-4"
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{offer.name}</h2>
          <span className="text-sm text-green-600">✔ Verified</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{offer.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">473 uses today</span>
          <Link
            href="/coupons"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Show Coupon
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-2">Valid till 31st Dec, 2024</p>
      </div>
    ))}
  </div>
</main>


      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Domino's Coupons - All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Coupons;
