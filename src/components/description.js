import React from 'react'

function description({copydata, question_one, question_two}) {
    return (
        <div>
            {question_one}
        
    
        
                {
                    copydata.map((item, index) => {
                        if(index < 4){
                            return(
                                <checkbox>{item}</checkbox>
                            )
                            }
                        } )
                }
        
        
        </div>
    )
}

export default description
