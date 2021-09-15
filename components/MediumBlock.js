function MediumBlock({ img, title, category }) {
  return (
    <div className='medium_block container'>
      <img src={img}></img>
      <div className='show'>
        <span>{title}</span>
        <span>{category}</span>
      </div>
    </div>
  );
}

export default MediumBlock;
