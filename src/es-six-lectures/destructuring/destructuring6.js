

//desctructing list of objects 
const active = () =>{
    const Google = {
        locations: ['Mountain View', 'New York', 'London']
    }
    
    const {locations: [location]} = Google
    console.log(location)
 }

 export default active;
