import { withRouter } from 'react-router-dom';
import './Left.css';


function Left( props ) {
    const { selectLeft, onSelectLeft, testRef1, testRef2, testRef3, testRef4 } = props;

    const scrollToElement1 = () => {
        onSelectLeft( '#1' );
        testRef1.current.scrollIntoView( {block: "start", behavior: "smooth"} )
    };
    const scrollToElement2 = () => {
        onSelectLeft( '#2' );
        testRef2.current.scrollIntoView( {block: "start", behavior: "smooth"} )
    };
    const scrollToElement3 = () => {
        onSelectLeft( '#3' );
        testRef3.current.scrollIntoView( {block: "start", behavior: "smooth"} )
    };
    const scrollToElement4 = () => {
        onSelectLeft( '#4' );
        testRef4.current.scrollIntoView( {block: 'start', behavior: 'smooth'} )
    };

    return (
        <div className="Left">
            <div></div>
            <div>
                <button className={selectLeft === '#1' ? 'active' : '' } onClick={scrollToElement1}></button>
                <button className={selectLeft === '#2' ? 'active' : '' } onClick={scrollToElement2}></button>
                <button className={selectLeft === '#3' ? 'active' : '' } onClick={scrollToElement3}></button>
                <button className={selectLeft === '#4' ? 'active' : '' } onClick={scrollToElement4}></button>
            </div>
            <div>
                <div className={selectLeft === '#1' ? 'L-scroll' : 'L-scroll active' }>
                    <p>SCROLLDOWN</p>
                <div></div>
            </div>
            </div>
        </div>
    );
}

export default withRouter( Left );