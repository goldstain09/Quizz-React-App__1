import Store from '../Store'
import './style.css'
import React, { useContext, useState, useEffect, useReducer } from 'react'
import QuizHard from './QuizHard'
import QuizReducer from '../Reducer'


export default function QuizNormal() {

    const [markN, setMarkN] = useState(0)

    const [checkE, setCheckE] = useState(false)

    const [selectedOption, setSelectedOption] = useState('')

    const [btn_click, setBtn_Click] = useState(0)


    const [totalMarkNs, dispatch] = useReducer(QuizReducer, 0)
    // console.log(totalMarkNs);



    useEffect(() => {
        if (btn_click === 10) {
            document.getElementById('QuizNormalResult_btn').style.display = 'inline-block';
        }
    },
        [btn_click === 10]
    )

    useEffect(() => {
        if (checkE) {
            dispatch({
                type: 'Normal',
                payload: markN
            });
            document.getElementById('QuizNormalResult_btn').style.display = 'none';
        }
    }, [checkE])





    const c = useContext(Store)
    return (
        <>

            <h2 align='center'>Normal Level</h2>

            {
                c.QuizNormal.length > 0 ? c.QuizNormal.map((item, index) => (
                    <div key={item.id}>
                        <h3 className='text-left' align='left' >Ques.{index + 1}){item.question}</h3>
                        <div className='text-left mx-1' align='left'>
                            <p className='form-check-label' >(a)&nbsp;{item.opt1}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt1}
                                className={` ${item.id} for_result_btn mx-sm-1 mx-1 mx-lg-2`}
                                checked={selectedOption === item.opt1}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value)
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />
                        </div>
                        <div className='text-left mx-1'align='left'>
                            <p className='form-check-label'>(b)&nbsp;{item.opt2}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt2}
                                className={`${item.id}  for_result_btn mx-sm-1 mx-1 mx-lg-2`}
                                checked={selectedOption === item.opt2}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value)
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />
                        </div>
                        <div className='text-left mx-1'align='left'>
                            <p className='form-check-label' >(c)&nbsp;{item.opt3}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt3}
                                className={`${item.id} for_result_btn mx-sm-1 mx-1 mx-lg-2`}
                                checked={selectedOption === item.opt3}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value)
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />
                        </div>
                        <div className='text-left mx-1'align='left'>
                            <p className='form-check-label'>(d)&nbsp;{item.opt4}</p>
                            <input
                                required
                                name={index}
                                type='radio'
                                value={item.opt4}
                                className={`${item.id} for_result_btn mx-sm-1 mx-1 mx-lg-2`}
                                checked={selectedOption === item.opt4}
                                onChange={(event) => {
                                    setCheckE(false)
                                    setSelectedOption(event.target.value);
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />

                        </div>
                        <div>
                            <button id={item.id} className={`btn btn-outline-secondary submitbtn ${item.id}`} onClick={() => {
                                if (item.rightAnswer === selectedOption) {
                                    setMarkN(markN + 1);
                                }
                                // its for disabbling a quiz which is submmitted 
                                let elem = document.getElementsByClassName(item.id)
                                for (let i = 0; i < elem.length; i++) {
                                    elem[i].setAttribute('disabled', '')
                                }
                                setBtn_Click(btn_click + 1)

                            }} type='submit' style={{marginLeft:'0%', display: 'none' }} ><i class="bi bi-check2-circle p-0 m-0"></i></button>
                        </div>
                    </div>
                )) : <p></p>
            }

            <div className='text-center py-4'>
                <button
                    id='QuizNormalResult_btn'
                    style={{ display: 'none' }}
                    className=' btn btn-outline-warning text-center'
                    onClick={() => {
                        setCheckE(true)
                    }}
                >Submit & <br /> Move on to Hard Level
                </button>
            </div>

            <div className='text-center'>
                {
                    checkE && <QuizHard />
                }
            </div>

        </>
    )
}
