function XLBlock({ img, title, category }) {
  return (
    <div className='xl_block container'>
      <img src={img}></img>
      <div className='show'>
        <span>{title}asdfasdf</span>
        <span>{category}asdfasdfaafd</span>
      </div>
    </div>
  );
}

export default XLBlock;
