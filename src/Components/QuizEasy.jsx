
import QuizReducer from '../Reducer'
import Store from '../Store'
import QuizNormal from './QuizNormal'
import './style.css'
import React, { useContext, useEffect, useReducer, useState } from 'react'

export default function QuizEasy() {

    const [markE, setMarkE] = useState(0)

    const [checkE, setCheckE] = useState(false)

    const [selectedOption, setSelectedOption] = useState('')

    const [btn_click, setBtn_Click] = useState(0)


    // reducer
    const [totalMarkEs, dispatch] = useReducer(QuizReducer, 0)
    // console.log(totalMarkEs);


    useEffect(() => {
        let btn_cls = document.getElementsByClassName('for_result_btn');
        for (let i = 0; i < btn_cls.length; i++) {
            if (btn_cls[i].hasAttribute('disabled', '')) {
                document.getElementById('QuizEasyResult_btn').style.display = 'inline-block';
            }
        }
    },
        [btn_click === 10]
    )

    useEffect(() => {
        if (checkE) {
            dispatch({
                type: 'Easy',
                payload: markE
            })
            document.getElementById('QuizEasyResult_btn').style.display = 'none';
        }
    },
        [checkE])





    const c = useContext(Store)
    return (
        <>
            <h2 align='center'>Easy Level</h2>
            {
                c.QuizEasy.length > 0 && c.QuizEasy.map((item, index) => (
                    <div key={item.id} >
                        <h3 className='text-center mt-4' >Ques.{index + 1}){item.question}</h3>
                        <div className='text-center mx-1'>
                            <p className='form-check-label' >(a)&nbsp;{item.opt1}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt1}
                                className={`form-check-input   ${item.id} for_result_btn`}
                                checked={selectedOption === item.opt1}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value)
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />
                        </div>
                        <div className='text-center mx-1'>
                            <p className='form-check-label'>(b)&nbsp;{item.opt2}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt2}
                                className={`form-check-input  ${item.id}  for_result_btn`}
                                checked={selectedOption === item.opt2}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value)
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />
                        </div>
                        <div className='text-center mx-1'>
                            <p className='form-check-label' >(c)&nbsp;{item.opt3}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt3}
                                className={`form-check-input  ${item.id} for_result_btn`}
                                checked={selectedOption === item.opt3}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value)
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />
                        </div>
                        <div className='text-center mx-1'>
                            <p className='form-check-label'>(d)&nbsp;{item.opt4}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt4}
                                className={`form-check-input  ${item.id} for_result_btn`}
                                checked={selectedOption === item.opt4}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value);
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />

                        </div>
                        <div>
                            <button id={item.id} className={`btn btn-outline-success submitbtn ${item.id}`} onClick={() => {
                                if (item.rightAnswer === selectedOption) {
                                    setMarkE(markE + 1);
                                }
                                // its for disabbling a quiz which is submmitted 
                                let elem = document.getElementsByClassName(item.id)
                                for (let i = 0; i < elem.length; i++) {
                                    elem[i].setAttribute('disabled', '')
                                }
                                setBtn_Click(btn_click + 1)

                            }} type='submit' style={{ display: 'none' }} ><i class="bi bi-check2-circle"></i></button>
                        </div>
                    </div>
                ))
            }


            <div className='text-center py-4'>
                <button
                    id='QuizEasyResult_btn'
                    style={{ display: 'none' }}
                    className=' btn btn-outline-warning text-center'
                    onClick={() => {
                        setCheckE(true);
                    }}>Submit & <br /> Move on to Normal Level
                </button>
            </div>
            <div className='text-center'>
                {
                    checkE && <QuizNormal />
                }
            </div>

        </>
    )
}

// I've to create one quiz app in carousel type also...
