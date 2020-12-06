import {
    useState
} from "react";

export function useForm(initialState) {
    const [fields, setFields] = useState(initialState);

    return [
        fields,
        function (event) {
            if (event.target) {
                const value = event.target.type === 'number' ? +event.target.value : event.target.value
                setFields({
                    ...fields,
                    [event.target.name]: value
                });
            } else {
                const field = event.field
                const value = event.value
                setFields({
                    ...fields,
                    [field]: value
                });
            }
        },
    ];
}