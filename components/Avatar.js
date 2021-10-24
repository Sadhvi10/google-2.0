function Avatar({ url }) {
  return (
    <img
      loading='lazy'
      src={url}
      alt='profile picture'
      className='h-9 rounded-full cursor-pointer hover:ring-4 hover:ring-gray-200'
    />
  );
}

export default Avatar;
