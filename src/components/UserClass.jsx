//as we want to use React.component therefore we are required to import the react.
import React from "react";

//extend ==> inherited from react.component, Also tells the react to keep track of this
class UserClass extends React.Component{
    //constructor should be explicitly declared when we are required to pass the parameters
    constructor(props){
        //must use super(props)
        //Because, in JavaScript, a child class constructor must call super() before accessing this. In the context of a React component, it's also common to pass props to the super constructor.
        //this also enables us to use "this.props.property"
        super(props)
        console.log(props)

        //useState
        this.state = {
            count : 0, 
            count2: 2,//another state variable
            userInfo :{
                name : "",
                location :"Default"
            }
        }
    }
     async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sagarKakkar03")
        console.log(data)
        const json = await data.json();

        console.log(json)

        this.setState({
            userInfo : json
        })
    }
    //render returns some peice of jsx that will be shoen on the UI
    
    render(){
        const {login, location} = this.state.userInfo;
        return (
            
            <div className="user-card">
                {//class based component state usage
                }
                <h1>Count value is {this.state.count}</h1>
                <button onClick={()=>{
                    //bellow one is a wrong way. This will create inconsistencies in the code.
                    // this.state.count+=1;

                    this.setState(
                        //pass an object containing the updated value of the state variables.
                        {
                            count : this.state.count+1
                        }
                    )
                }}>Button</button>


                <h2>Name : {login}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : XYZ </h4>
            </div>
        )
    }
}

export default UserClass;