import Image from 'next/image';

import Methods from '../../public/methods.png';

export default function Copyright() {
  return (
    <div className="w-full absolute bottom-0 left-0 bg-gray-800 py-4">
      <div className="container flex flex-col items-center justify-between md:flex-row">
        <p className="pb-4 text-white md:pb-0">
          &copy; TailCommerce - All Right Reserved
        </p>
        <div>
          <Image src={Methods} alt="methods" className="w-full h-5" />
        </div>
      </div>
    </div>
  );
}
