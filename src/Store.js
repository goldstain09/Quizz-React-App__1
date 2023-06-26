import { createContext, useState } from "react";

const Init = {
    QuizHard:[
        {   id:'1',
            question:'What is Reconciliation?',
            opt1:'The process through which React deletes the DOM.',
            opt2:'The process through which React updates and deletes the component.',
            opt3:'It is a process to set the state.',
            opt4:' The process through which React updates the DOM.',
            rightAnswer:' The process through which React updates the DOM.'
        },
        {   id:'2',
            question:'Which are the correct phases of component lifecycle?',
            opt1:'Mounting: getDerivedStateFromProps(); Updating: componentWillUnmount(); Unmounting: shouldComponentUpdate()',
            opt2:'Mounting: componentWillUnmount(); Updating: render(); Unmounting: setState()',
            opt3:'Mounting: componentDidMount(); Updating: componentDidUpdate(); Unmounting: componentWillUnmount()',
            opt4:'Mounting: constructor(); Updating: getDerivedStateFromProps(); Unmounting: render()',
            rightAnswer:'Mounting: componentDidMount(); Updating: componentDidUpdate(); Unmounting: componentWillUnmount()'
        },
        {   id:'3',
            question:' Controlled Component vs Uncontrolled Component?',
            opt1:'Controlled Components: every state mutation will have an associated handler function; Uncontrolled Components: store their own states internally',
            opt2:'Controlled Components: store their own states internally; Uncontrolled Components: every state mutation will have an associated handler function',
            opt3:'Controlled Components: A component who is so good at controlling itself; Uncontrolled Components: A component who has no idea how to control itself',
            opt4:'Controlled Components: every state mutation does not have an associated handler function; Uncontrolled Components: does not store their own states internally',
            rightAnswer:'Controlled Components: every state mutation will have an associated handler function; Uncontrolled Components: store their own states internally'
        },
        {   id:'4',
            question:' State vs Props?',
            opt1:' Props is something that the parent doesn’t need and decide to throw around among other parents; State is the parent’s favorite child and something the component wants to nurture.',
            opt2:'Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.',
            opt3:'Props is a copy of real DOM; State is the definition of the real DOM.',
            opt4:' Prop is managed within the component and holds some information that may change over the lifetime of the component; State gets passed to the component, like a function parameter',
            rightAnswer:'Props get passed to the component using naming conventions, like a function parameter; State is managed within the component and holds some information that may change over the lifetime of the component.'
        },
        {   id:'5',
            question:'What is the “key” prop??',
            opt1:'“Key” prop is just there to look pretty and there is no benefit whatsoever.',
            opt2:'“Key” prop is a way for React to identify a newly added item in a list and compare during the “diffing” algorithm.',
            opt3:' It is one of the attributes in HTML.',
            opt4:'All I know is that it is NOT commonly used in array.',
            rightAnswer:'“Key” prop is a way for React to identify a newly added item in a list and compare during the “diffing” algorithm.'
        },
        {   id:'6',
            question:'Which of the following are the advantages of React.js?',
            opt1:"React.js can increase the application's performance with Virtual DOM.",
            opt2:'React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.',
            opt3:'React.js can render both on client and server side.',
            opt4:'All of the above',
            rightAnswer:'All of the above'
        },
        {   id:'7',
            question:'Which of the following is not a disadvantage of React.js?',
            opt1:'React.js has only a view layer. We have put your code for Ajax requests, events and so on.',
            opt2:'The library of React.js is pretty large.',
            opt3:'The JSX in React.js makes code easy to read and write.',
            opt4:'The learning curve can be steep in React.js.',
            rightAnswer:'The JSX in React.js makes code easy to read and write.'
        },
        {   id:'8',
            question:' A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?',
            opt1:'Constructor',
            opt2:'Class',
            opt3:'Object',
            opt4:'DataObject',
            rightAnswer:'Class'
        },
        {   id:'9',
            question:'Which of the following acts as the input of a class-based component?',
            opt1:'Render',
            opt2:'Props',
            opt3:'Class ',
            opt4:'Factory',
            rightAnswer:'Props'
        },
        {   id:'10',
            question:'Which of the following keyword is used to create a class inheritance?',
            opt1:'Inherits',
            opt2:'Create',
            opt3:'This',
            opt4:'Extends',
            rightAnswer:'Extends'
        }
    ],
    QuizNormal:[
        {id:'11',
            question:'Which of the following is used in React.js to increase performance?',
            opt1:'Virtual DOM',
            opt2:'Orignal DOM',
            opt3:'Both A and B',
            opt4:'None of the above',
            rightAnswer:'Virtual DOM'
        },
        {id:'22',
            question:'What is ReactJS?',
            opt1:'Server-side framework',
            opt2:'User Interface Library',
            opt3:'Both  A and B',
            opt4:'None of the above',
            rightAnswer:'User Interface Library'
        },
        {id:'33',
            question:'Identify the one which is used to pass data to components from outside?',
            opt1:'Render with arguments',
            opt2:'setState',
            opt3:'PropTypes',
            opt4:'props',
            rightAnswer:'props'
        },
        {id:'44',
            question:'Who created React.js?',
            opt1:'Jordan Mike',
            opt2:'Jordan Walke',
            opt3:'Tim Lee',
            opt4:'Jordan Lee',
            rightAnswer:'Jordan Walke'
        },
        {id:'55',
            question:'What is Babel?',
            opt1:'Javascript Compiler',
            opt2:'Javascriptw Interpreter',
            opt3:'Javascript Transpiler',
            opt4:'None of the above',
            rightAnswer:'Javascript Compiler'
        },
        {id:'66',
            question:'Identify the command used to create a react app?',
            opt1:'npm install create-react',
            opt2:'npm i-create-react-app',
            opt3:'npx create-react-app',
            opt4:'npx Install create-react-app',
            rightAnswer:'npx create-react-app'
        },
        {id:'77',
            question:'Which of the following port is the default where webpack-dev-server runs?',
            opt1:'3300',
            opt2:'3303',
            opt3:'3000',
            opt4:'8080',
            rightAnswer:'8080'
        },
        {id:'88',
            question:'How many elements can a valid react component return?',
            opt1:'1',
            opt2:'2',
            opt3:'3',
            opt4:'4',
            rightAnswer:'1'
        },
        {id:'99',
            question:'A state in React.js is also known as?',
            opt1:'The internal storage of the component',
            opt2:'The external storage of the component',
            opt3:'Permanent storage',
            opt4:'All of the above',
            rightAnswer:'The internal storage of the component'
        },
        {id:'110',
            question:'Which of the following method is used to access the state of a component from inside of a member function?',
            opt1:'this.values',
            opt2:'this.getState()',
            opt3:'this.state',
            opt4:'this.prototype.stateValue',
            rightAnswer:'this.values'
        }
    ], QuizEasy:[
        {   id:'111',
            question:'What do shell windows show in Python?',
            opt1:'Program Output',
            opt2:'Print Command',
            opt3:'Code',
            opt4:'IDLE',
            rightAnswer:'Program Output'
        },
        {   id:'222',
            question:'What are people who write computer code?',
            opt1:'Programmers',
            opt2:'Professors',
            opt3:'Cryptographers',
            opt4:'Manufacturers',
            rightAnswer:'Programmers'
        },
        {   id:'333',
            question:'What is computer coding?',
            opt1:'A radio show',
            opt2:'A list of functions',
            opt3:'Telling a computer what to do',
            opt4:'A TV show',
            rightAnswer:'Telling a computer what to do'
        },
        {   id:'444',
            question:'What word describes characters that can be moved in a Scratch program?',
            opt1:'Imp',
            opt2:'Pixie',
            opt3:'Goblin',
            opt4:'Sprite',
            rightAnswer:'Sprite'
        },
        {   id:'555',
            question:'Which of these does NOT run using a computer program?',
            opt1:'Bicycle',
            opt2:'Rocket',
            opt3:'Train',
            opt4:'Car',
            rightAnswer:'Bicycle'
        },
        {   id:'666',
            question:'How many types of windows does Python use?',
            opt1:'Five',
            opt2:'Four',
            opt3:'One',
            opt4:'Two',
            rightAnswer:'Two'
        },
        {   id:'777',
            question:'Which of these is a programming language?',
            opt1:'Scratch',
            opt2:'Bite',
            opt3:'Itch',
            opt4:'Gnaw',
            rightAnswer:'Scratch'
        },
        {   id:'888',
            question:'Which of these is NOT a programming language?',
            opt1:'Java',
            opt2:'Banana',
            opt3:'Ruby',
            opt4:'Python',
            rightAnswer:'Banana'
        },
        {   id:'999',
            question:'What word describes the set of instructions that computers need to do work?',
            opt1:'Blueprint',
            opt2:'Agenda',
            opt3:'Synopsis',
            opt4:'Program',
            rightAnswer:'Program'
        },
        {   id:'1110',
            question:'What symbols are used to makeup the Python language?',
            opt1:'Runes',
            opt2:'Words',
            opt3:'Heiroglyphics',
            opt4:'Sprites',
            rightAnswer:'Words'
        }
    ]
    
    
}



const Store = createContext(Init)
export default Store;

const StoreFunction = (props) => {


    const [QuizNormal,setQuizNormal] = useState(Init.QuizNormal)
    const [QuizHard,setQuizHard] = useState(Init.QuizHard)
    const [QuizEasy,setQuizEasy] = useState(Init.QuizEasy)

    return <Store.Provider value={{...Init,QuizNormal:[...QuizNormal],QuizHard:[...QuizHard], QuizEasy:[...QuizEasy] }}>{props.children}</Store.Provider>

}

export {StoreFunction}
