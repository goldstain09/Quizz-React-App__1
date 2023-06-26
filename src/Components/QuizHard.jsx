import QuizReducer from '../Reducer'
import Store from '../Store'
import Result from './Result'
import './style.css'
import React, { useContext, useState, useEffect, useReducer } from 'react'

export default function QuizHard() {
    const [markH, setMarkH] = useState(0)

    const [checkH, setCheckH] = useState(false)

    const [selectedOption, setSelectedOption] = useState('')

    const [btn_click, setBtn_Click] = useState(0)


    const [totalMarkHs, dispatch] = useReducer(QuizReducer, 0)
    // console.log(totalMarkHs);

    useEffect(() => {
        if (btn_click === 10) {
            document.getElementById('QuizHardResult_btn').style.display = 'inline-block';
        }
    },
        [btn_click === 10]
    )


    useEffect(() => {
        if(checkH){
            dispatch({
                type:'Hard',
                payload:markH
            });
            document.getElementById('QuizHardResult_btn').style.display='none';     
        }
      },[checkH])
    



    const c = useContext(Store)
    return (
        <>

            <h2 align='center'>Hard Level</h2>
            {
                c.QuizHard.length > 0 ? c.QuizHard.map((item, index) => (
                    <div key={item.id}>
                        <h3 className='text-center' >Ques.{index + 1}){item.question}</h3>
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
                                    setCheckH(false)
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
                                    setCheckH(false)
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
                                    setCheckH(false)
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
                                    setCheckH(false)
                                    setSelectedOption(event.target.value);
                                    document.getElementById(item.id).style.display = 'inline-block';
                                }} />

                        </div>
                        <div>
                            <button id={item.id} className={`btn btn-outline-success submitbtn ${item.id}`} onClick={() => {
                                if (item.rightAnswer === selectedOption) {
                                    setMarkH(markH + 1);
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
                )) : <p></p>
            }

           
            <div className='text-center py-4'>
                <button 
                id='QuizHardResult_btn' 
                style={{ display: 'none' }}  
                className=' btn btn-outline-warning text-center'
                onClick={() => {
                    setCheckH(true);
                    dispatch({type:'result'}) 
                }}
                >Show Results
                </button>
            </div>

            <div className='text-center'>
                {
                    checkH && <Result checkH={checkH}/>
                }
            
            </div>


        </>
    )
}
