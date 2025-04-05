export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const VIEW_EMP = "VIEW_EMP";
export const ADD_EMP = "ADD_EMP";
export const DELETE_EMP = "DELETE_EMP";
export const UPDATE_EMP = "UPDATE_EMP"

    export const increment = () => ({
      type  :  INCREMENT,
    })


    export const decrement = () => ({
       type  :  DECREMENT,
    })

  
    export const viewwEmployeeData = () => ({
       type  :  VIEW_EMP,
    });

    export const addEmp = (empData) => ({
       type  :  ADD_EMP,
       payload: empData,
    });


    export const deleteEmployee = (id) => ({
       type  :  DELETE_EMP,
       payload: id,
    });


    export const updateEmployee = (emp) => ({
       type  :  UPDATE_EMP,
       payload: emp,
    });

