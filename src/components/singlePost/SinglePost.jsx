import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://user-images.githubusercontent.com/41876764/94856480-e7b8b200-03e4-11eb-949d-c3a447b43df2.jpeg" alt="" className="singlePostImg" />
            </div>
            <h1 className="singlePostTitle">
            10 Most Underrated Places In India  
            <div className="singlePostEdit">
                <i class=" singlePostIcon far fa-edit"></i>
                <i class=" singlePostIcon far fa-trash-alt"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Sourav</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
What Is React?Why React?Features of ReactComponents in ReactProps in ReactView More
The world can't live without mobile and web applications in this day and age. Everything is digitized, from booking cabs to ordering food to make bank transactions. Thanks to the efficient frameworks that provide a seamless user experience. One such robust frontend library is React. This tutorial on ‘what is React’ will help you understand the library's fundamentals and work with a simple demo.

Post Graduate Program: Full Stack Web Development
in Collaboration with Caltech CTMEENROLL NOWPost Graduate Program: Full Stack Web Development
What Is React?
React-Frontend_Language

React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.

React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.

Why React?
React’s popularity today has eclipsed that of all other front-end development frameworks. Here is why:

Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly.
Improved performance: React uses Virtual DOM, thereby creating web applications faster. Virtual DOM compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do. 
Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time.
Unidirectional data flow: React follows a unidirectional data flow. This means that when designing a React app, developers often nest child components within parent components. Since the data flows in a single direction, it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.
Small learning curve: React is easy to learn, as it mostly combines basic HTML and JavaScript concepts with some beneficial additions. Still, as is the case with other tools and frameworks, you have to spend some time to get a proper understanding of React’s library.
It can be used for the development of both web and mobile apps: We already know that React is used for the development of web applications, but that’s not all it can do. There is a framework called React Native, derived from React itself, that is hugely popular and is used for creating beautiful mobile applications. So, in reality, React can be used for making both web and mobile applications.
Dedicated tools for easy debugging: Facebook has released a Chrome extension that can be used to debug React applications. This makes the process of debugging React web applications faster and easier.
The above reasons more than justify the popularity of the React library and why it is being adopted by a large number of organizations and businesses. Now let’s familiarize ourselves with React’s features.
            </p>
        </div>
    )
}
