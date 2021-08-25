import Headlines from '../Components/Headlines';

function Home() {
  return (
    <div className='home--container'>
      <div className='home-pics'>
        <img
          className='home-pics--main-big'
          src='https://1.bp.blogspot.com/-geDpMJ0zxrY/X_DHnqr3oXI/AAAAAAAABHo/V7eqcwwqEdomMZEHLe5wAvaQ2dIbUhn9QCLcBGAsYHQ/s1000/DFS110320030.jpg'
          alt='Connor McDavid Pic'
        />
        <img
          className='home-pics--bottom-left'
          src='https://cms.nhl.bamgrid.com/images/photos/326006024/1704x960/cut.jpg'
          alt='Brady Tkachuk Pic'
        />
        <img
          className='home-pics--bottom-right'
          src='https://cms.nhl.bamgrid.com/images/photos/325991698/1704x960/cut.jpg'
          alt='Philip Grubauer Pic'
        />
      </div>
      <Headlines />
    </div>
  );
}

export default Home;
