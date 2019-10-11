What problem does the context API help solve? 

A context API problem solves the problem of having to send props down a list of components to where it's needed. This can become tedious and not scalable friendly wtih the more components we are dealing with.

In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is what is needed to change states in redux. When an action is fired, the reducer will find its matching action and perform the corresponding behavior. A reducer is normally a switch case that has various action names and behaviors. The store is known as the single source of truth because everything that is displayed from state lives in state. It is no longer the question of where the information is coming from. 

 What is the difference between Application state and Component state? When would be a good time to use one over the other?
 
 Application state refers to state that can provide information to the entire app. Component state refers to state that lives in the given component. Information can be sent down as props, but ultimately it acts more like a local storage and isn't as scalable. Component state is best for smaller projects without too many moving parts, whereas application state is better structured for bigger projects.
 
 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
 
redux-thunk is middleware that intercepts action calls from dispatches before making their way to the store where an action takes place. This is crucial for action calls that may need extra functionality before making getting to the reducer.
Middleware can:
- stop actions.
- forward an action untouched.
- dispatch a different action.
- dispatch multiple actions.  
 
 What is your favorite state management system you've learned and this sprint? Please explain why!
 
 My favorite is redux because it beginning to make much more sense for me and it's pretty intuitive. Accessing the data was always an issue for me. So now knowing where it's coming from and knowing how to 1) access it 2) update it is awesome.
