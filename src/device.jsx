function Device(props) {

    
    return (
        <div style={{
            border:'2px solid aqua',
            margin:'20px',
            padding:'20px',
            borderRadius:'15px'
        }}>
            <p>My Device is: {props.name}</p>
            <p>Price: {props.price} BDT</p>
        </div>
    );
}

export default Device;