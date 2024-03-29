import { IManufacturers } from '@/interfaces/Manufacturers';
import { ICategory } from '@/interfaces/Category';
import { IProducts } from '@/interfaces/Products';
import fetchJson from '@/utils/fetchJson';
import {
  calcDiscountPrice,
  getRelatedManufacturerLength,
  toCapitalizeWord
} from '@/utils/helpers';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HiHeart, HiMagnifyingGlass } from 'react-icons/hi2';
import { FaGripVertical, FaGripHorizontal } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

interface IProps {
  products: IProducts;
  categories: ICategory;
  manufacturers: IManufacturers;
  slug: string;
}

export default function Category(props: IProps) {
  const [isHorizontalList, setIsHorizontalList] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>{`Matter - ${props.slug}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container grid grid-cols-12 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-3 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5">
            {props.categories.data && props.categories.data.length > 0 && (
              <div>
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  Categories
                </h3>
                <div className="space-y-2">
                  {props.categories.data.map(category => (
                    <Link
                      key={category._id}
                      className="flex items-center"
                      href={{
                        pathname: '/category/[slug]',
                        query: {
                          slug: category.slug
                        }
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {props.manufacturers.data &&
              props.manufacturers.data.length > 0 && (
                <div className="pt-4">
                  <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                    Manufacturers
                  </h3>
                  <div className="space-y-2">
                    {props.manufacturers.data.map(
                      manufacturer =>
                        Number(
                          getRelatedManufacturerLength(
                            props.products,
                            manufacturer._id
                          )
                        ) > 0 && (
                          <div
                            key={manufacturer._id}
                            className="flex items-center"
                          >
                            <input
                              type="checkbox"
                              name={`manufacturer-${manufacturer._id}`}
                              id={`manufacturer-${manufacturer._id}`}
                              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                            />
                            <label
                              htmlFor={`manufacturer-${manufacturer._id}`}
                              className="text-gray-600 ml-3 cusror-pointer"
                            >
                              {manufacturer.name}
                            </label>
                            <div className="ml-auto text-gray-600 text-sm">
                              (
                              {getRelatedManufacturerLength(
                                props.products,
                                manufacturer._id
                              )}
                              )
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )}

            {/* <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="min"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="max"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xs"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-sm"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-sm"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-m"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-l"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xl"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="hidden"
                  />
                  <label
                    htmlFor="red"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#fc3d57' }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="black"
                    className="hidden"
                  />
                  <label
                    htmlFor="black"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#000' }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="white"
                    className="hidden"
                  />
                  <label
                    htmlFor="white"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                    style={{ backgroundColor: '#fff' }}
                  ></label>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="col-span-9">
          <div className="flex items-center mb-4">
            <select
              name="sort"
              id="sort"
              className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
            >
              <option value="">Default sorting</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
              <option value="latest">Latest product</option>
            </select>

            <div className="flex gap-2 ml-auto">
              {/*  border-primary text-white bg-primary */}
              <div
                className={`${
                  !isHorizontalList
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 text-gray-600'
                } "border border-[1px] w-10 h-9 flex items-center justify-center rounded cursor-pointer`}
                onClick={() => setIsHorizontalList(false)}
              >
                <FaGripVertical />
              </div>
              <div
                className={`${
                  isHorizontalList
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 text-gray-600'
                } "border border-[1px] w-10 h-9 flex items-center justify-center rounded cursor-pointer`}
                onClick={() => setIsHorizontalList(true)}
              >
                <FaGripHorizontal />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {props.products.data && props.products.data.length > 0 ? (
              props.products.data.map(product => (
                <div
                  key={product._id}
                  className={`${
                    isHorizontalList
                      ? 'col-span-12 sm:col-span-6 md:col-span-3'
                      : 'col-span-6'
                  } bg-white shadow rounded overflow-hidden group`}
                >
                  <div className="relative">
                    <Image
                      src={product.thumbnail}
                      width={350}
                      height={271}
                      alt={product.alt}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                    >
                      <Link
                        href={{
                          pathname: '/product/[slug]',
                          query: {
                            slug: product.slug
                          }
                        }}
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      >
                        <HiMagnifyingGlass />
                      </Link>
                      <a
                        href="#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                      >
                        <HiHeart />
                      </a>
                    </div>
                  </div>
                  <div className="pt-4 pb-3 px-4">
                    <Link
                      href={{
                        pathname: '/product/[slug]',
                        query: { slug: product.slug }
                      }}
                    >
                      <p className="w-[100%] h-[40px] line-clamp-2 font-medium text-sm mb-2 text-gray-800 hover:text-primary transition">
                        {product.title}
                      </p>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2">
                      {product.discountPercentage > 0 ? (
                        <>
                          <p className="text-xl text-primary font-semibold">
                            $
                            {calcDiscountPrice(
                              product.price,
                              product.discountPercentage
                            )}
                          </p>
                          <p className="text-sm text-gray-400 line-through">
                            ${product.price}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-xl text-primary font-semibold">
                            ${product.price}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm">
                        {[0, 1, 2, 3, 4].map(index => (
                          <span key={index}>
                            <AiFillStar
                              className={`${
                                product.rating > index && 'fill-yellow-400'
                              }`}
                            />
                          </span>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 ml-3">
                        ({product.reviews.length})
                      </div>
                    </div>
                  </div>
                  <Link
                    href={{
                      pathname: '/product/[slug]',
                      query: {
                        slug: product.slug
                      }
                    }}
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                  >
                    Review Product
                  </Link>
                </div>
              ))
            ) : (
              <p>{`Data doesn't exist`}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const slug = context.params?.slug;

  const products: IProducts = await fetchJson(
    `${process.env.API_BASE_URL}/api/products/category/${slug}`
  )
    .then(response => response)
    .catch(() => {
      return [];
    });

  const categories: ICategory = await fetchJson(
    `${process.env.API_BASE_URL}/api/category`
  )
    .then(response => response)
    .catch(() => []);

  const manufacturers: IManufacturers = await fetchJson(
    `${process.env.API_BASE_URL}/api/manufacturers`
  )
    .then(response => response)
    .catch(() => []);

  return {
    props: {
      products,
      categories,
      manufacturers,
      slug: toCapitalizeWord(slug)
    }
  };
}
