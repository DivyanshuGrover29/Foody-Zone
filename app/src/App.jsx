import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchFood from "./components/SearchResults/SearchResult";

//Url of server side
export const BASE_URL = "http://localhost:9000";

const App = () => {

    const [data , setData] = useState(null);
    const [filteredData,setFilteredData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [selectedBtn , setSelectedBtn] = useState("all");

    
    useEffect(() => {
    //complete response in try catch
     const fetchFoodData = async() =>{
        setLoading(true);

       try{
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
     }
     catch(error){
         setError("Unable to fetch data");
     } 
    }; 
    //Function call
    fetchFoodData();
} , [] );
    

const findingFood = (e) => {
  const searchValue = e.target.value;

  console.log(searchValue);

  if(searchValue === ""){
    setFilteredData(null);
  }

  const filter = data?. filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())
);
   setFilteredData(filter);
};

//For button click all breakfast lunch dinner etc
const filterFood =(type) =>{
    if(type === "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?. filter((food) => food.type.toLowerCase().includes(type.toLowerCase())
);
    setFilteredData(filter);
    setSelectedBtn(type);
};

const filterBtns = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];


    //If there is error
    if(error) return <div>{error}</div>
    
    if(loading) return <div> loading.....</div>


    return(
    <>
      <Container>
        <TopContainer>
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
            </div>

            <div className="search">
                <input onChange={findingFood} placeholder="Search Food" />
            </div>
        </TopContainer>

        <ButtonContainer>
            {filterBtns.map((value) => (
              <Button 
              isSelected={selectedBtn === value.type}
              key ={value.name} onClick = {() => filterFood(value.type)}>
                {value.name}
              </Button>
            ))}
        </ButtonContainer>
      </Container>
      <SearchFood data= {filteredData}/>
    </>
    );
};

export default App;


{/* For CSS*/}

export const Container = styled.div` 
   max-width:1200px;
   margin: 0 auto;
`;

const TopContainer = styled.section`
   
   min-height: 140px;
   display:flex;
   justify-content: space-between;
   align-items: center;
   padding:16px;

   .search{
    input{
        background-color: transparent;
        border: 1px solid red;
        color:white;
        border-radius: 5px;
        height: 40px;
        font-size: 16px;
        padding: 0 10px; 
    }
   }

   @media (0 < width < 600px) {
    flex-direction: column;
    height: 122px;
  }
`;

const ButtonContainer = styled.section`
  display:flex;
  justify-content:center;
  align-itmes:center;
  gap:9px;
  padding-bottom:40px;
  
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#b22222" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  background-color:#ff4343;
  border-radius:5px;
  padding: 6px 15px;
  border:none;
  color:white;
  cursor:pointer;
  &:hover{
    background-color: #b22222;
  }
`;



  

