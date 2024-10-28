function Student({name,roll,id,session}) {

    
    return (
        <div style={{
            border:'2px solid #974323',
            margin:'20px',
            padding:'20px',
            borderRadius:'15px'
        }}>
           
            <p>Student is: {name}</p>
            <p>Roll: {roll}</p>
            <p>ID: {id}</p>
            <p>Session: {session}</p>
        </div>
    );
}

export default Student;