import ListCourse from './ListCourse';

const flex_style = {
    display: 'flex',
    flexBasis: '33%',
    flexWarp: 'wrap',
    flexDirection: 'col',
    paddingLeft: '40px'
}

function Home() {
    return (
      <div>
        <h1 style={{paddingLeft: '20px'}}>List course</h1>
        <div style={flex_style}>
          <ListCourse />
        </div>
      </div>
    )      
}

export default Home;