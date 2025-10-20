import swimmingImage from '../../assets/swimming.png';
import classImage from '../../assets/class.png';
import playImage from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold'>QZone</h2>
            <div className='space-y-5 flex justify-center items-center flex-col'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;