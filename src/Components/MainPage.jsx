import React, { useEffect, useReducer, useState } from 'react'
import './style.css'
import QuizEasy from './QuizEasy'
import QuizReducer from '../Reducer'

export default function MainPage() {


  const [checkEasy, setCheckEasy] = useState(false)

  const [name, setName] = useState('')
  const [nameCheck, setNameCheck] = useState(false)

  const [value, dispatch] = useReducer(QuizReducer, '')
  useEffect(() => {
    if (checkEasy) {
      let btn = document.getElementsByClassName('quizbtn');

      for (let i = 0; i < btn.length; i++) {
        btn[i].style.display = 'none'
      }
    }
  },
    [checkEasy]
  )

  const submit = (event) => {
    event.preventDefault();
    if (name === 0) {

    } else {
      dispatch({ type: 'name', payload: name })
    }
  }

  const inputChange = (event) => {
    event.preventDefault();
    setName(event.target.value)
    if (event.target.value == 0) {
      document.getElementById('continue_btn').style.display = 'none'
    } else {
      document.getElementById('continue_btn').style.display = 'inline-block'
    }
  }


  return (
    <>
      <div className='container-fluid bg p-5'>
        <div className='container bg_cntnr '>
          <h2 align='center' >QUIZZE</h2>
          <h5 align='center'>(Easy, Normal & Hard level)</h5>
          <h6 className='text-center'>Note:
            *You've to "submit" answer one by one, otherwise it will not remains check whenever you click on next quiz..<br />
            *If you submit once a quiz, you'll not able to fill it again..
          </h6>
          <form onSubmit={submit} id='Name_form'>
            <div className='d-flex justify-content-center py-5 gap-2'>
              <input
                required
                autoFocus
                placeholder='Enter your name'
                value={name}
                type='text'
                onChange={inputChange} />
              <button
                style={{ display: 'none' }}
                id='continue_btn'
                type='submit'
                className='btn btn-dark continueBtn'
                onClick={() => {
                  setNameCheck(true);
                  document.getElementById('Name_form').style.display = 'none';
                }}>
                Continue
              </button>
            </div>
          </form>
          {
            checkEasy && <div id='QuizEasyBox'> <QuizEasy /> </div>
          }
          {
            nameCheck && <div className='text-center py-4'>
              <button
              id='start_withasy'
                onClick={() => {
                  setCheckEasy(true)
                }}
                className='btn btn-outline-primary mx-2 quizbtn'
              >
                Start with Easy
              </button>
            </div>
          }

        </div>
      </div>


    </>
  )
}
