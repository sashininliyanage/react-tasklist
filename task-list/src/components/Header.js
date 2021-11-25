import Button from "./Button";

const Header = (props) => {
    const onClick =() => {
        console.log("Click")
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="green" text="Add"  onClick={onClick} ></Button>
        </header>
    )
}

Header.defaultProps = {
    title : "Task List",
}


export default Header
