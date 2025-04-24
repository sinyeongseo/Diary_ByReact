import {getEmotionImage} from '../util/get-emotion-image';
import Button from '../components/Button';
import './Diaryitem.css';
import {useNavigate} from 'react-router-dom';

const Diaryitem = ({id, emotionId, createdDate, content}) => {
    const nav = useNavigate();

    return (
        <div className="Diaryitem">
            <div
            onClick={() => nav(`/diary/${id}`)} 
            className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}></img>
            </div>
            <div
                onClick={()=> nav(`/diary/${id}`)}
            className="info_section">
                <div className="created_date">
                    {createdDate}
                </div>
                <div className="content">
                   {content}
                </div>
            </div>
            <div className="button_section">
                <Button 
                onClick={()=> nav(`/edit/${id}`)}
                text={"수정하기"}></Button>
            </div>
        </div>
    );
}

export default Diaryitem;