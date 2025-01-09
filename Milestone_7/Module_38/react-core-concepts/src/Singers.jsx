export default function Singers({id, name, age}){
    return (
        <div>
            <h3>Singers:::</h3>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
            <p>Age: {age}</p>
        </div>
    )
}