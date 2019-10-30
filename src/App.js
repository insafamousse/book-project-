import React,{Component} from 'react';
import './App.css';
import BookName from './BookName';
import BookCardList from './BookCardList';  
import BookRating from './BookRating';






               class App extends Component {
              
              
                
                render() {
                  return (
                  <div className="App">
                    <div className="container">
                      <div className='row name-rating'>
                       <BookName 
                       />
                       <BookRating/>
                       </div>
                      
                       <BookCardList
                       />
                        
                      
              
              
              
                    </div>
                    
                    
                  </div>)}
              }
              
              
              export default App;
              
