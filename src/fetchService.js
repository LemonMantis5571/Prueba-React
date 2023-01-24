export const getAllUsers = async () => {

    try {
        let response = await fetch('https://reqres.in/api/users');
        return response.json(); 
        // return response.json();
        
    } catch (error) {
        console.log('error');
    }
   

    
}

export const getAllPagedUsers = async (page) => {

    try {
        let response = await fetch(`https://reqres.in/api/users?page=${page}`);
        return response.json(); 
        // return response.json();
        
    } catch (error) {
        console.log('error');
    }

}

export const getUserDetails = async(id) => {

    try {
        let response = await fetch(`https://reqres.in/api/users/${id}`);
        return response.json(); 
        // return response.json();
        
    } catch (error) {
        console.log('error');
    }


}