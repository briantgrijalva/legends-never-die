import { useState } from 'react';

interface ITags {
    tag?: string;
    searchText?: string;
}


export const useForm = ( initialState: ITags ): [ ITags, (event: React.ChangeEvent<HTMLInputElement>) => void, any] => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    

    return [ values, handleInputChange, reset ];

}