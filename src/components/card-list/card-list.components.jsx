
import Card from "./card.components";
import './card-list.styles.css';
import './card.styles.css'

const CardList =({monsters}) => (
            <div className="card-list"> 
                {monsters.map( (monster) => {
                    return <Card key={monster.id} monster={monster} />
                                    
                    })} 
            </div>
        )

export default CardList