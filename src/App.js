
import './App.css';

function App() {


  const reviews=[
    {
      pic:"https://igimages.gumlet.io/tamil/home/kgf2-3032022m.jpg?w=376&dpr=2.6",
      name:"K.G.F. Chapter 2",
      rating:4.8,
      content:"The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their saviour, the government sees him as a threat to law and order; enemies are clamouring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy."
    },

    {
      pic:"https://pbs.twimg.com/media/FAsVc4FUcAYxfAe?format=jpg&name=900x900",
      name:"RRR",
      rating:4.5,
      content:"RRR is a period drama set in India during the 1920s, revolving around the inspiring journey of two of India`s freedom fighters - Alluri Sitarama Raju and Komaram Bheem."

    },

    {
      pic:"https://tamilpedia.net/movies/uploads/large/vaaitha.jpg",
      name:"VAAITHA",
      rating:3.8,
      content:"An injured laundry worker finds himself struggling for justice while his family suffers due to conflicts among two different caste groups"

    },

    {
      pic:"https://m.media-amazon.com/images/M/MV5BMmYxYjk3NzctZDU2Yy00MGQyLWI4NTctZDg2YTdkNzdjNWQ4XkEyXkFqcGdeQXVyMzYxOTQ3MDg@._V1_.jpg",
      name:"NENJUKU NEEDHI",
      rating:4.2,
      content:"Nenjuku Needhi is a Tamil movie starring Udhayanidhi Stalin, Aari and Tanya Ravichandran in lead roles."

    }
  ];
  return(
    <div className="movies">
      {reviews.map((review) =>(
        <Moviecards pic={review.pic} name={review.name} rating={review.rating} content={review.content} />
      ))}
    </div>

  )
}

export default App;


function Moviecards(props) {
  return (
    
    <div className="container">
      {/* <h1> Movies.com</h1> */}
      <img className="movie-card" src={props.pic} alt={props.name} />
      
      <div id ="singleline">

      <h2 className="left">{props.name}</h2> 
      <h2 className="right">⭐{props.rating}</h2>
      </div>
      
      <div className="content">

      <p>{props.content}</p>
      </div>


    </div>
  )
}