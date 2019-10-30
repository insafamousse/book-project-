import React from 'react';
import BookCard from './BookCard';
import ImagePlus from './ImagePlus.gif';
import {connect} from 'react-redux';





const BookCardList = ({books,onAddbook,rating, value})=>{
    return(
        <container> 

        <div className='card-List'> 
 <h1 className='Titre '>  harry potter book collection </h1>
 
 
         
          
            </div>
           
    
    
    
        <img src={ImagePlus} className='prompt-button' onClick={onAddbook}
                
            type="button" alt="image-prompt"/>
  
    </container>
      )    
    
}
const mapStateToProps= state =>{
    return {
        books:state.bookListReducer,
        rating: state.ratingFilterReducer.minRating,
        value:state.titleFilterReducer
    }
}
 const mapDispatchToProps=dispatch=>{
    return{
        onAddbook:()=>{
            dispatch({
            type:'ADDBOOKS',
            book:{
                id:Math.random(),
                title: prompt('book title: '),
                image: prompt('book image: '),
                rating: Number(prompt('book rating: '))
            }})
        }
    }
}
const BookCardListReducer=connect (mapStateToProps,mapDispatchToProps)(BookCardList)
export default BookCardListReducer;

