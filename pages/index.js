import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className='flex flex-col h-screen items-center'>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        {/* Left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />

          {/* Avatar */}
          <Avatar url='https://i.ibb.co/W5wbJWz/IMG-20200110-WA0028-2.jpg' />
        </div>
      </header>

      {/* Body */}
      <form className='flex flex-col items-center mt-20 flex-grow w-4/5 '>
        <Image
          src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          width={300}
          height={100}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200  px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-6 mr-3 text-gray-500' />
          <input
            ref={searchInputRef}
            type='text'
            placeholder='Search Google or type a URL'
            className='focus:outline-none flex-grow placeholder-gray-600 '
          />
          <MicrophoneIcon className='h-6 ' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-x-4 sm:flex-row sm:space-y-0'>
          <button onClick={search} className='btn'>
            Google Search
          </button>
          <button onClick={search} className='btn'>
            I'm feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
