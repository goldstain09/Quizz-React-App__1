import { createContext, useState } from "react";

const Init = {
  QuizHard: [
    {
      id: "1",
      question:
        "Which data structure is typically used to implement a priority queue?",
      opt1: "Array",
      opt2: "Stack",
      opt3: "Linked List",
      opt4: "Binary Heap",
      rightAnswer: "Binary Heap",
    },
    {
      id: "2",
      question:
        "Which sorting algorithm has the best average case time complexity?",
      opt1: "Bubble Sort",
      opt2: "Quick Sort",
      opt3: "Insertion Sort",
      opt4: "Selection Sort",
      rightAnswer: "Quick Sort",
    },
    {
      id: "3",
      question:
        "What is the time complexity of performing a linear search in an unsorted array?",
      opt1: "O(n)",
      opt2: "O(log n)",
      opt3: "O(n^2)",
      opt4: "O(1)",
      rightAnswer: "O(n)",
    },
    {
      id: "4",
      question:
        "In OOP, which concept allows a class to have multiple methods with the same name but different parameters?",
      opt1: "Inheritance",
      opt2: "Polymorphism",
      opt3: "Abstraction",
      opt4: "Encapsulation",
      rightAnswer: "Polymorphism",
    },
    {
      id: "5",
      question:
        "What is the output of the following code snippet?    Code:-  [  print(2 ** 3 ** 2) ]",
      opt1: "64",
      opt2: "512",
      opt3: "4096",
      opt4: "Syntax Error",
      rightAnswer: "4096",
    },
    {
      id: "6",
      question: "Which is a valid way to declare an array in C++?",
      opt1: "array<int>arr;",
      opt2: "int arr[];",
      opt3: "int[] arr;",
      opt4: "int arr[10]",
      rightAnswer: "int arr[10]",
    },
    {
      id: "7",
      question:
        "What is the time complexity of a binary search algorithm in a sorted array of size n?",
      opt1: "O(n)",
      opt2: "O(log n)",
      opt3: "O(n log n)",
      opt4: "O(1)",
      rightAnswer: "O(log n)",
    },
    {
      id: "8",
      question:
        "Which data structure is used to implement a LIFO (Last-In-First-Out) behavior?",
      opt1: "Queue",
      opt2: "Stack ",
      opt3: "Heap",
      opt4: "Linked List ",
      rightAnswer: "Stack ",
    },
    {
      id: "9",
      question: 'What is the purpose of the "super" keyword in Java?',
      opt1: "Call a method from a superclass",
      opt2: "Create a new object",
      opt3: "Define an interface",
      opt4: "Handle exceptions",
      rightAnswer: "Call a method from a superclass",
    },
    {
      id: "10",
      question:
        "Which is NOT a valid way to access elements in a dictionary in Python?",
      opt1: "dictionary[key]",
      opt2: "dictionary.get(key)",
      opt3: "dictionary.pop(key)",
      opt4: "dictionary.remove(key)",
      rightAnswer: "dictionary.remove(key)",
    },
  ],
  QuizNormal: [
    {
      id: "11",
      question:
        "Which of the following is used in React.js to increase performance?",
      opt1: "Virtual DOM",
      opt2: "Orignal DOM",
      opt3: "Both A and B",
      opt4: "None of the above",
      rightAnswer: "Virtual DOM",
    },
    {
      id: "22",
      question: "What is ReactJS?",
      opt1: "Server-side framework",
      opt2: "User Interface Library",
      opt3: "Both  A and B",
      opt4: "None of the above",
      rightAnswer: "User Interface Library",
    },
    {
      id: "33",
      question:
        "Identify the one which is used to pass data to components from outside?",
      opt1: "Render with arguments",
      opt2: "setState",
      opt3: "PropTypes",
      opt4: "props",
      rightAnswer: "props",
    },
    {
      id: "44",
      question: "Who created React.js?",
      opt1: "Jordan Mike",
      opt2: "Jordan Walke",
      opt3: "Tim Lee",
      opt4: "Jordan Lee",
      rightAnswer: "Jordan Walke",
    },
    {
      id: "55",
      question: "What is Babel?",
      opt1: "Javascript Compiler",
      opt2: "Javascriptw Interpreter",
      opt3: "Javascript Transpiler",
      opt4: "None of the above",
      rightAnswer: "Javascript Compiler",
    },
    {
      id: "66",
      question: "Identify the command used to create a react app?",
      opt1: "npm install create-react",
      opt2: "npm i-create-react-app",
      opt3: "npx create-react-app",
      opt4: "npx Install create-react-app",
      rightAnswer: "npx create-react-app",
    },
    {
      id: "77",
      question:
        "Which of the following port is the default where webpack-dev-server runs?",
      opt1: "3300",
      opt2: "3303",
      opt3: "3000",
      opt4: "8080",
      rightAnswer: "8080",
    },
    {
      id: "88",
      question: "How many elements can a valid react component return?",
      opt1: "1",
      opt2: "2",
      opt3: "3",
      opt4: "4",
      rightAnswer: "1",
    },
    {
      id: "99",
      question: "A state in React.js is also known as?",
      opt1: "Internal storage of the component",
      opt2: "External storage of the component",
      opt3: "Permanent storage",
      opt4: "All of the above",
      rightAnswer: "Internal storage of the component",
    },
    {
      id: "110",
      question:
        "Which of the following method is used to access the state of a component from inside of a member function?",
      opt1: "this.values",
      opt2: "this.getState()",
      opt3: "this.state",
      opt4: "this.prototype.stateValue",
      rightAnswer: "this.values",
    },
  ],
  QuizEasy: [
    {
      id: "111",
      question: "What do shell windows show in Python?",
      opt1: "Program Output",
      opt2: "Print Command",
      opt3: "Code",
      opt4: "IDLE",
      rightAnswer: "Program Output",
    },
    {
      id: "222",
      question: "What are people who write computer code?",
      opt1: "Programmers",
      opt2: "Professors",
      opt3: "Cryptographers",
      opt4: "Manufacturers",
      rightAnswer: "Programmers",
    },
    {
      id: "333",
      question: "What is computer coding?",
      opt1: "A radio show",
      opt2: "A list of functions",
      opt3: "Telling a computer what to do",
      opt4: "A TV show",
      rightAnswer: "Telling a computer what to do",
    },
    {
      id: "444",
      question:
        "What word describes characters that can be moved in a Scratch program?",
      opt1: "Imp",
      opt2: "Pixie",
      opt3: "Goblin",
      opt4: "Sprite",
      rightAnswer: "Sprite",
    },
    {
      id: "555",
      question: "Which of these does NOT run using a computer program?",
      opt1: "Bicycle",
      opt2: "Rocket",
      opt3: "Train",
      opt4: "Car",
      rightAnswer: "Bicycle",
    },
    {
      id: "666",
      question: "How many types of windows does Python use?",
      opt1: "Five",
      opt2: "Four",
      opt3: "One",
      opt4: "Two",
      rightAnswer: "Two",
    },
    {
      id: "777",
      question: "Which of these is a programming language?",
      opt1: "Scratch",
      opt2: "Bite",
      opt3: "Itch",
      opt4: "Gnaw",
      rightAnswer: "Scratch",
    },
    {
      id: "888",
      question: "Which of these is NOT a programming language?",
      opt1: "Java",
      opt2: "Banana",
      opt3: "Ruby",
      opt4: "Python",
      rightAnswer: "Banana",
    },
    {
      id: "999",
      question:
        "What word describes the set of instructions that computers need to do work?",
      opt1: "Blueprint",
      opt2: "Agenda",
      opt3: "Synopsis",
      opt4: "Program",
      rightAnswer: "Program",
    },
    {
      id: "1110",
      question: "What symbols are used to makeup the Python language?",
      opt1: "Runes",
      opt2: "Words",
      opt3: "Heiroglyphics",
      opt4: "Sprites",
      rightAnswer: "Words",
    },
  ],
};

const Store = createContext(Init);
export default Store;

const StoreFunction = (props) => {
  const [QuizNormal, setQuizNormal] = useState(Init.QuizNormal);
  const [QuizHard, setQuizHard] = useState(Init.QuizHard);
  const [QuizEasy, setQuizEasy] = useState(Init.QuizEasy);

  return (
    <Store.Provider
      value={{
        ...Init,
        QuizNormal: [...QuizNormal],
        QuizHard: [...QuizHard],
        QuizEasy: [...QuizEasy],
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export { StoreFunction };
