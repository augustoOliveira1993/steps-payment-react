import styles from './Steps.css'
import {FiSend} from 'react-icons/fi'
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
export const Steps = ({ currentStep }) => {
	return (
		<div className="steps">
			<div className="step active">
				<AiOutlineUser />
				<p>Indentificação</p>
			</div>
			<div className={`step ${currentStep >= 1 ? styles.active : ''}`}>
				<AiOutlineStar />
				<p>Avaliação</p>
			</div>
			<div className={`step ${currentStep >= 2 ? styles.active : ''}`}>
				<FiSend />
				<p>Envio</p>
			</div>
		</div>
	)
}
