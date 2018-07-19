import React from "react";
import Subject from '../Subject';





const SubjectList = props =>(
            <ul>
                    {props.subjects.map((subject, idx) =>{
                        const {text} =subject;
                    return (
                        <Subject
                        key={`${subject}-${idx}`}
                        text={text}
                        deleteItem={props.deleteItem}
                      
                        
                       
                        />
                    );
                })}
            </ul>
);
 
 export default SubjectList;