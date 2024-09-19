import axios from 'axios'
 async function fetchData () {
    
        
     
     try {
        let response = await axios.get('https://dummyjson.com/todos')
        console.log(response.data.todos)
     } catch (error) {
        console.log(error)
     }

    // .then(response =>console.log(response.data.todos))
    // .catch(error =>console.log(error))
    }

fetchData()
