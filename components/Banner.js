const Banner = ({ img, title, text }) => {
  return (
    <div className='banner_container'>
      <img src={img}></img>
      <div className='banner_wrapper'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Banner;
