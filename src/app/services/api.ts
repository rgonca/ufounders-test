import axios from 'axios';
//Enable CORS in: https://cors-anywhere.herokuapp.com/corsdemo

export const getTicketsData = async () => {
try {
    const result = await axios.get('https://cors-anywhere.herokuapp.com/https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission')
    console.log(result.data);
    return result.data
} catch (error) {
    console.log(error);
}
}