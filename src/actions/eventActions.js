import { GET_EVENTS, DELETE_EVENT, ADD_EVENT ,
GET_EVENT, UPDATE_EVENT} from './types';
import axios from 'axios';



export const getEvents =()=> async dispatch=>{

    const res= await axios.get('http://my-json-server.typicode.com/amandeep231/events/events');


    dispatch({
        type: GET_EVENTS,
        payload: res.data
    });
};


export const getEvent =(id)=> async dispatch=>{

    const res= await axios.get(`http://my-json-server.typicode.com/amandeep231/events/events/${id}`);


    dispatch({
        type: GET_EVENT,
        payload: res.data
    });
};



export const deleteEvent =(id)=> async dispatch=>{

    try{

        await axios.delete(`http://my-json-server.typicode.com/amandeep231/events/events/${id}`);
    dispatch({
        type: DELETE_EVENT, 
        payload: id
    });

    }catch(e){

        dispatch({
            type: DELETE_EVENT, 
            payload: id
        });

    }
    
};


export const addEvent =(event)=>async dispatch=>{
    

    const res=await axios.post
    ('http://my-json-server.typicode.com/amandeep231/events/events',event);

    dispatch({
        type: ADD_EVENT,
        payload: res.data
    });
};



export const updateEvent =(event)=>async dispatch=>{
    

    const res=await axios.put
    (`http://my-json-server.typicode.com/amandeep231/events/events/${event.id}`,event);

    dispatch({
        type: UPDATE_EVENT,
        payload: res.data
    });
};



