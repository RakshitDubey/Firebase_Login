// ... (previous imports)
import { useState } from "react";

function Practise() {
    const [person, setPerson] = useState(false);
    const [animal, setAnimal] = useState(false);

    const handleOptionClick = (option) => {
        setPerson(option === 'person');
        setAnimal(option === 'animal');
    };

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <div onClick={() => handleOptionClick('person')}>
                <div>Person</div>
                {person && <p>Rakshit</p>}
            </div>

            <div onClick={() => handleOptionClick('animal')}>
                <div>Animal</div>
                {animal && <p>Dog</p>}
            </div>
        </div>
    );
}

export default Practise;
