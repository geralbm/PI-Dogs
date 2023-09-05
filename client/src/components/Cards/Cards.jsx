import Card from '../Card/Card';

const Cards = ({characters, onClose}) => {
   
   return (
   <div>
      {
        characters.map (chara => {
         return <Card
         key={chara.id}
         id = {chara.id}
         name={chara.name}
         height={chara.height}
         weight={chara.weight}
         temperament={chara.temperament}
         life_span={chara.life_span}
         reference_image_id={chara.reference_image_id}
         onClose={onClose}
       
         
         />
        }

        )
      }
      
   </div>
   )
}

export default Cards;