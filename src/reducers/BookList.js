const initialState = [
    {
        id:Math.random(),
        title: ' à lécole des sorcières ', 
        image: ' http://t3.gstatic.com/images?q=tbn:ANd9GcTWrLtlYkoBWaBnUuN6SiAy2bezgQl6P3AVgFAX0cQL1sEI2nfy' , 
        rating: 4,
    },
    {id:Math.random(),
        title: 'harry potter et la chambre des secrets',
        image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTM1ciOW5UjOLji5CxwIUglJz13fLQwH1M1vJ0k8EU-hN5oKUT6 ', 
        rating: 2},
    {id:Math.random(),
        title: ' Harry Potter et le Prisonnier dAzkaban',
        image:' http://t0.gstatic.com/images?q=tbn:ANd9GcTTsDwf1sZYSWguZZ0hnVP1Tn84QYFyTDso_WoQp_TWRbp68YBu',

        rating: 5},
    {id:Math.random(),
        title: ' harry potter et la coupe de feu',
        image:' http://t3.gstatic.com/images?q=tbn:ANd9GcROgVty40ZNXpyiop6cRdyOqVT2kTb_pf6M-8XJ4hZAEy0yxPWd ', 
        rating: 2}
    
]

const BookListReducer =(state=initialState, action)=>{
    if (action.type==='ADDBOOKS'){
        return state.concat(action.book)
    }
    if (action.type==='EDITBOOKS'){
        return state.map(el=>{
            if(el.id===action.id){
                return action.book
            }
            return state
        })


        
    }
    if (action.type==='DELETEBOOKS'){
        return state.filter((el,index)=>index!==action.newId)
    

     
     
    }
    return state
}
export default BookListReducer;
