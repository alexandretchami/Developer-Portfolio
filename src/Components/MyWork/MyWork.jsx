import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>Mon dernier travail</h1>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                    work.link ? (
                        <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt={work.w_name} />
                        </a>
                    ) : (
                        <img key={index} src={work.w_img} alt={work.w_name} />
                    )
                );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Afficher plus</p>
            <img src={arrow_icon} alt="arrow icon" />
        </div>
    </div>
  );
}

export default MyWork;
