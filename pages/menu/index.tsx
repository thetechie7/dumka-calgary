import { GetServerSideProps } from "next";
import MenuCard from "../../components/MenuCard";
import { sanityClient } from "../../sanity";
import { MenuCollection } from "../../typings";
import { Link } from "react-scroll";

interface MenuProps {
  collections: MenuCollection;
}
function Menu({ collections }: MenuProps) {
  return (
    <>
      <section className="h-full bg-opacity-10 bg-[url('/bg/menu.png')] bg-cover bg-center bg-no-repeat">
        <div className="fixed top-0  flex w-full flex-row items-center space-x-5 overflow-hidden overflow-x-scroll bg-beige/50 pb-5 pr-5 pl-5 pt-20 backdrop-blur-3xl md:pt-24  xl:justify-center">
          <Link
            to="appetizerssides"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Appetizers
          </Link>
          <hr className="mb-6 border-darkred/10" />

          <Link
            to="entrees"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Entrees
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="ricedish"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Rice
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="noodles"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Noodles
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="bread"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Bread
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="kids"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Kids
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="breakfast"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Breakfast
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="kebabstandoor"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Tandoor
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="desserts"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Desserts
          </Link>
          <hr className="mb-6 border-darkred/10" />
          <Link
            to="drinks"
            smooth={true}
            duration={800}
            spy={true}
            offset={-180}
            className="text-md nowrap cursor-pointer font-medium text-darkred hover:text-midred"
          >
            Drinks
          </Link>
          <hr className="mb-6 border-darkred/10" />
        </div>
        <div className="mx-auto  max-w-screen-xl px-8 py-52 md:px-16 md:py-64 ">
          <h1 className="mb-8 mt-8 max-w-2xl text-4xl font-black  text-darkred md:text-5xl xl:text-6xl">
            Menu
          </h1>

          <div id="appetizerssides" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Appetizers & Sides
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.appetizerssides.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="entrees" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Entrees
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.entrees.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="ricedish" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Rice Dishes
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.ricedish.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="noodles" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Noodles
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.noodles.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="bread" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Bread
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.bread.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="kids" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Kids
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.kids.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="breakfast" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Breakfast
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.breakfast.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="kebabstandoor" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Kebabs & Tandoor
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.kebabstandoor.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="desserts" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Desserts
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.desserts.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div id="drinks" className="mb-8">
            <h6 className="mb-8 max-w-2xl text-xl font-bold text-midred md:text-3xl xl:text-4xl">
              Drinks
            </h6>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {collections.drinks.map((item, index) => (
                <MenuCard
                  key={index}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
    {
 "appetizerssides": *[_type =="appetizerssides"]{
    _id,
    title,
    type,
    price,
   },
 "bread": *[_type == 'bread']{
    _id,
    title,
    type,
    price,
   },
   "breakfast": *[_type == 'breakfast']{
    _id,
    title,
    type,
    price,
   },
     "desserts": *[_type == 'desserts']{
    _id,
    title,
    type,
    price,
   },
     "drinks": *[_type == 'drinks']{
    _id,
    title,
    type,
    price,
   },
     "entrees": *[_type == 'entrees']{
    _id,
    title,
    type,
    price,
   },
     "kebabstandoor": *[_type == 'kebabstandoor']{
    _id,
    title,
    type,
    price,
   },
      "kids": *[_type == 'kids']{
    _id,
    title,
    type,
    price,
   },
      "noodles": *[_type == 'noodles']{
    _id,
    title,
    type,
    price,
   },
      "ricedish": *[_type == 'ricedish']{
    _id,
    title,
    type,
    price,
   }
}
`;

  const collections = await sanityClient.fetch(query).catch((err) => {
    console.log(err);
  });
  console.log(collections);
  return {
    props: {
      collections,
    },
  };
};
