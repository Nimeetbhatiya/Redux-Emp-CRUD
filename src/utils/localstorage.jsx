export const loadState = () => {
    try {
        let data = localStorage.getItem('employee');
        if(data === null){
            return undefined
        }
        else{
            return JSON.parse(data);
        }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
        console.log("Data not load");
        return undefined;
    }
};

export const saveState = (state) => {
    try{
        localStorage.setItem("employee",JSON.stringify(state));
    // eslint-disable-next-line no-unused-vars
    } catch (err){
        console.log("data not set");
    }
};