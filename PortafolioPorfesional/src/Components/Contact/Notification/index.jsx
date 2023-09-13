import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
function Notification(){
    return (
        <div className='fixed top-20 left-auto right-auto w-40 h-10 rounded-md bg-orange flex justify-center items-center'>
            <FontAwesomeIcon className='w-5 h-5 text-white mr-2' icon={faCheckCircle} />
            <span className='text-bold text-md font-monserrat text-white'>Sent Message!</span>
        </div>
    )
}
export default Notification;