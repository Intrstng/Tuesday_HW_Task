import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any - done
    switch (action.type) {
        case 'sort': { // by name - done
            if (action.payload === 'up') {
                return [...state].sort((a, b) =>
                    a.name.localeCompare(b.name));
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => b.name.localeCompare(a.name));
            }
            return state;
        }

        case 'check': {
            // by age (more than action.payload - 18 years) - done
            return state.filter(person => person.age >= action.payload);
        }
        default:
            return state
    }
}
