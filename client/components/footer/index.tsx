import Image from 'next/image';
import Link from 'next/link';
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill
} from 'react-icons/ri';
import Logo from '../../public/matter-logo-1x.png';

export default function Footer() {
  return (
    <footer className="bg-white mb-10 pt-10 border-t border-gray-100 px-4 md:px-0">
      <div className="container grid grid-cols-12 md:grid-cols-3">
        <div className="col-span-12 flex flex-col justify-between space-y-8 pb-10 md:col-span-1 md:pb-0">
          <Image src={Logo} alt="logo" className="w-30 mx-auto" />
          <div className="max-w-[280px] mx-auto text-center">
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <RiFacebookFill />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <RiInstagramFill />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <RiTwitterFill />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <RiGithubFill />
            </Link>
          </div>
        </div>

        <div className="col-span-12 md:col-span-2 grid grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analitycs
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
