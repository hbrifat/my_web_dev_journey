// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li> Finished: {task}</li>
//     } else {
//         return <li> Work on : {task}</li>
//     }
// }



// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? "Finished:" : "Work on"} {task}</li>
//     )
// }



// export default function Todo({task, isDone}){
//     return (
//         <li>{task} : {isDone && "Finished"} {isDone || "Should work"}</li>
//     )
// }


// export default function Todo({task, isDone}){
//     return (
//         <li>{task} : {isDone || "Should work"}</li>
//     )
// }



export default function Todo({task, isDone}){
    let taskItem;
    if(isDone) {
        taskItem = <li> Finished : {task}</li>
    } else {
        taskItem = <li> Work on : {task}</li>
    }
    return taskItem;
}
