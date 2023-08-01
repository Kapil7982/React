import Button from "./Button";

const ExampleComponent  = () =>{

    return (

        <div>
            <Button variant="primary" onClick={() => console.log("Primary button clicked")}>
                Primary Buttton
            </Button>
            <Button variant="secondary" onClick={() => console.log("Secondary button clicked")}>
                Secondary Buttton
            </Button>
        </div>
    )
}

export default ExampleComponent ;