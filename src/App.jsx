import './App.css'
import { GrFormNext, GrFormPrevious} from "react-icons/gr";
import {UserForm} from "./components/UserForm.jsx";
import {ReviewForm} from "./components/ReviewForm/ReviewForm.jsx";
import {ThanksForm} from "./components/ThanksForm/ThanksForm.jsx";

import { FiSend } from "react-icons/fi";

// Hooks
import { useForm } from './hooks/useForm'
import {Steps} from "./components/Steps/Steps.jsx";
import {useState} from "react";
const formTemplate = {
    name: "",
    email: "",
    review: "",
    comment: "",
}

function App() {
    const [data, setData] = useState(formTemplate)

    const updateFielHandler = (key, value) => {
        setData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }
    const formComponents = [
        <UserForm data={data} updateFielHandler={updateFielHandler} />,
        <ReviewForm data={data} updateFielHandler={updateFielHandler} />,
        <ThanksForm data={data} />
    ]

    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className="app">
       <div className="header">
           <h2>Deixe sua avaliação</h2>

           <p>
               Ficamos felizes com a sua compra, ultilize o formulário abaixo para avaliar o produto.
           </p>
       </div>

        <div className="form-container">
            <Steps currentStep={currentStep} />
            <form onSubmit={event => changeStep(currentStep + 1, event)}>
                <div className="inpiuts-container">
                    {currentComponent}
                </div>
                <div className="actions">
                    {!isFirstStep && (
                        <button onClick={(e) => changeStep(currentStep - 1, e)}>
                            <GrFormPrevious />
                            <span>Voltar</span>
                        </button>
                    )}
                    {!isLastStep ? (
                        <button type="submit">
                            <span>Avançar</span>
                            <GrFormNext />
                        </button>
                    ) : (
                        <button type="button">
                            <span>Enviar</span>
                            <FiSend />
                        </button>
                    )}
                </div>
            </form>
        </div>

    </div>
  )
}

export default App
