import "./App.css";
import Home from "./pages/Home";
const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd2910fcb91msh8f8eead376a8f8cp11587ajsndd60aa322734',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const App = () => {
  return(
    <div className="font-gabraito" >
        <Home/>
    </div>
  );
};

export default App;
