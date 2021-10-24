import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div className='flex flex-col h-screen items-center'>
      <Head>
        <title>Google</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <Header />

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
            type='text'
            placeholder='Search Google or type a URL'
            className='focus:outline-none flex-grow placeholder-gray-600 '
          />
          <MicrophoneIcon className='h-6 ' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-x-4 sm:flex-row sm:space-y-0'>
          <button className='btn'>Google Search</button>
          <button className='btn'>I'm feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
