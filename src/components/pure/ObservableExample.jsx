import React, {useState} from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setnumber] = useState(0);

    const obtainNumber = () => {
        console.log('Subscription to observable');

        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('New number', newNumber);
                    setnumber(newNumber)
                },
                error(error){
                    alert(`Something went wrong ${error}`);
                },
                complete() {
                    alert(`Finished with ${number}`);
                    console.log('Finished receiving numbers');
                    console.log('Done with the observable');
                }
            }
        )

       
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNumber}>Obtin new Number</button>
        </div>
    );
}

export default ObservableExample;
