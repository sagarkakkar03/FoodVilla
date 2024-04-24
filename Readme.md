- **React** has two layers
  - **UI**
    - (Static part) ,
    - (powered by data layer)
  - **Data**
    - States
    - props

# Higher Order Components

What is an Higher order function inside js? The same goes here
They are a function(component) that takes a function and returns a function(Component).

- Acts as an enhancer which tweaks an older component
For example , I want to show some restaurants as `Promoted`.

## Code

```js
const withPromotedLabel = (FunctionalComponent) => {
    //returning a component.
    //look , where the props are passed
    return (props) => {
        return(
            <div>
                <h1  className="text-white bg-black ">Promoted</h1>
                <FunctionalComponent resData={...props} />
            </div>
        )
    }
}
```

## Usage

```js
{ 
listOfRestaurants.map((restaurant) => 
    

    
        <Link 
            to={"/restaurants/"+restaurant.info.id} 
            key={restaurant.info.id} > {
                restaurant.info.promoted >=4.4 ? withPromotedLabel(RestaurantComponent)(restaurant.info): <RestaurantComponent resData={restaurant.info} />
            }
        </Link>
    
)
}
```

`React developer tools` extension for debugging and monitoring react

# Controlled and un-controlled Component

A component with its own state is an **uncontolled component**.
For example :

```js

RestaurantMenu(){
    Categories.map(
        <RestaurantCategory data= {category}/>
    )
}

RestaurantCompoent(){
    useState to show the items
}
```

A component which donot have its own state is an **contolled component**.
For example :

```js
RestaurantMenu(){
    Categories.map(
        <RestaurantCategory data= {category, whetherToShowItemsOrNot}/>
    )
}

RestaurantCompoent(){
    //No useState to show the items
}
```

# Lifting up the state

**Lifting State Up in React:**
`(Generally done through passing a useState which will tell which one to open and whcih to close, for example in case of Restaurant menu sections : Recommended, Rolls, Noddles, SweetDishes, Shakes, What i may do is write a logic to show the internal items when the index==Menu'sCategory INdex. and this index is set using useState passed to each Category, so that whenever a user clicks on the same we will setIndex(toTheComponentIndex). This will make index==CategoryIndex true for current One and false for all the others)`
(Example : I want that all the other restaurant menu cards should collapse as soon as i open one . jaise ki agar mai recommended open krun , toh cuisines, sweet-dishes, rolls wala parts close ho jaayein)

**Definition:**
"Lifting state up" in React refers to the practice of managing state in a component higher up in the component tree and passing that state down to child components as props. This is a fundamental pattern in React that allows sharing state and behavior between components.

**Theory:**
In React, each component can have its own local state. However, when multiple components need to share the same state or when a state change in one component affects another, it's a good idea to lift the state up to a common ancestor.

By doing this, you create a single source of truth for the shared state, making your application more predictable and easier to maintain. It also follows the principles of a unidirectional data flow in React, where data flows from parent to child components.

**Use Case:**
Consider an accordion component where each section can be expanded or collapsed independently. The state of each section (whether it's expanded or collapsed) can be managed in the parent component, and this state is then passed down to the individual accordion sections as props.

**Code Example: Accordion Component:**

Let's create a simple Accordion component with two sections that can be expanded or collapsed:

```jsx
import React, { useState } from 'react';

// Child AccordionSection component
const AccordionSection = ({ title, content, isOpen, onToggle }) => (
  <div>
    <div
      onClick={onToggle}
      style={{
        cursor: 'pointer',
        borderBottom: '1px solid #ddd',
        padding: '10px',
        backgroundColor: isOpen ? '#f0f0f0' : 'white',
      }}
    >
      {title}
    </div>
    {isOpen && (
      <div style={{ padding: '10px' }}>
        {content}
      </div>
    )}
  </div>
);

// Parent Accordion component
const Accordion = () => {
  const [section1Open, setSection1Open] = useState(false);
  const [section2Open, setSection2Open] = useState(false);

  const toggleSection1 = () => {
    setSection1Open(!section1Open);
    setSection2Open(false); // Close other sections when this is opened
  };

  const toggleSection2 = () => {
    setSection2Open(!section2Open);
    setSection1Open(false); // Close other sections when this is opened
  };

  return (
    <div>
      <AccordionSection
        title="Section 1"
        content="Content for section 1."
        isOpen={section1Open}
        onToggle={toggleSection1}
      />
      <AccordionSection
        title="Section 2"
        content="Content for section 2."
        isOpen={section2Open}
        onToggle={toggleSection2}
      />
    </div>
  );
};

export default Accordion;
```

In this example:

- The `Accordion` component manages the state (`section1Open` and `section2Open`) and passes it down to the `AccordionSection` components as props.
- Each `AccordionSection` component receives the state and callbacks as props, allowing them to update the state in the parent component.

This pattern makes it easy to add more sections to the accordion without duplicating state management logic in each section. The state is lifted up to the common ancestor, promoting a more maintainable and scalable code structure.

# Props Drilling /React-context

**Problem** : Props Drilling
**Solution** : React context `createContext`


- data flows in one dirn in react i.e. from parents to children
- when app is big, a lot of nesting will be there.
- **Problem** we can't directly pass the data from level 1 to 3 or 3+.
- To make global data, `react-context is used`. The example of global-data can include :
    - Logged-in info
    - Theme

## React-context
```js
import {createContext} from "react"
```

- Stored in utils as a name of `UserContext.js`

### Creation

```js
import { createContext } from "react";
//accepts the data in form of an json
const userContext = createContext({
    loggedInUser : "default User"
})

export default userContext;
```

### Accesing in functional Component (`.Provider`)

- With the help of a react-hook (`useContext`)

```js
import {useContext} from "react"
import UserContext from "../utils/UserContext"
const data = useContext(UserContext) 
```

### Accessing inside the class-based-component

```js
import UserContext from "./utils/UserContext"

<div>
    <userContext.Consumer> 
        {
            (data) => console.log(data)
        }
    </userContext.Consumer>
</div>
```

### Updating the value

```js
import userContext from "./utils/userContext"

// Hooks for updating the val
const [userName, setUserName] = useState("");

useEffect(() => {
  const data = {
    name :Sagar Kakkar"
  };
  setUserName(data.name);
})

//Now, whichever component i want to send the new values, i will wrap them insside the Provider.

<div>
  //Suppose i just wanna to modify the header
  <UserContext.Provider value={{loggedInUser : userName}}>
    <Header/>
  </UserContext.Provider>

  <Outlet>
</div>
```

Import point to note is that all the `Outlets` will still have name set as `DefaultUser` while in `header` it will be `Sagar Kakkar;`

### How does nesting of provider works/ performs

```js
<div>
  <UserContext.Provider value={{loggedInUser : "Sagar"}}>
    <Component_A/> 
    <div>
      <UserContext.Provider value={{loggedInUser : "Akshay"}}>
        <Component_b/>
      </UserContext.Provider>
    </div>

  </UserContext.Provider>

  <Component_C>
</div>
```

- **Component_A** ==> Sagar
- **Component_B** ==> Akshay
- **Component_C** ==> DefaultName

**To Set the Variable in the `context` from inside of one state we will pass the `setState` Variable to the component and modify the same .** 
## Difference between `Context` and `Redux`

- Redux is external , required to be install by npm install redux while `context` comes from react itself
- Context is recommended for small scale projects while `redux` for large scale due to ease of usage