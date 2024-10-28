import styled from "styled-components";
import { BASE_URL  , Button , Container } from "../../App";
const SearchFood = ( { data })  => {
  return (
    <FoodSite>
     <Container>
      <FoodCards>
      {/*JavaScript code */}
      {data?.map(({ name , image , text , price}) => (
        <FoodCard key = {name}>
           <div className="food_image">
            <img src= {BASE_URL + image} />
           </div>
           <div className="food_info">
               <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
               </div>
              <Button>&#8377;{price.toFixed(2)}</Button>
            </div>
        </FoodCard>
        ))}
      </FoodCards>
      </Container>
    </FoodSite>
  );
};

export default SearchFood;

const FoodSite = styled.section`
    background-image:url(/bg.png);
    background-size:cover;
    min-height:calc(100vh - 208px);
    max-width:100%;
`;

const FoodCards = styled.div`
    
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    row-gap: 32px;
    column-gap: 35px;
    padding-top:55px;

`;

const FoodCard = styled.div` 
  width: 340px;
  height: 165px;
  border: 0.66px solid;
  display: flex;
  padding: 8px;
  border-radius: 20px;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
    
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);


   .food_info{
     display:flex;
     flex-direction:column;
     justify-content:space-between;    
     align-items:end;
     
     h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 5px;
      font-size: 13px;
    }
    button {
      font-size: 12px;
    }
   } 
`;



