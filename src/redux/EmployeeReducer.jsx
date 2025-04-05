import { ADD_EMP, DELETE_EMP, UPDATE_EMP, VIEW_EMP } from "./actions";

const intialState = {
    employee : [
        {   
            empid : 1,
            name : "Prem",
            email : "pr@gmail.com",
            age : 20
        },
        {   
            empid : 2,
            name : "Keval",
            email : "kg@gmail.com",
            age : 25
        }
    ],
};

const EmployeeReducer = ( state = intialState, action) => {
    switch (action.type) {
        case ADD_EMP:
            return{
                ...state,employee : [...state.employee,action.payload],
            };
        case VIEW_EMP:
            return state;
        case DELETE_EMP:
                return {
                    ...state,
                    employee: state.employee.filter((emp) => emp.empid !=  action.payload),
                } ;
        case UPDATE_EMP:
              return{
                  ...state,
                  employee: state.employee.map(emp => 
                emp.empid === action.payload.empid ? action.payload : emp)
            };
        
        default : 
            return state;
    }
        
}

export default EmployeeReducer;