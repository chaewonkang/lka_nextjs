function LargeBlock({ img, title, category }) {
  return (
    <div className='large_block container'>
      <img src={img}></img>
      <div className='show'>
        <span>{title}</span>
        <span>{category}</span>
      </div>
    </div>
  );
}

export default LargeBlock;
