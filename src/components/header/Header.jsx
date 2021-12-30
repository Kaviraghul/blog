import './header.css'

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Royal Enfield Bikes</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/re1_1200x768.jpeg?55slN64APfBb7.LpYnnxWEiDiD3QxBW9&size=1200:675" alt="" className="headerImg" />
        </div>
    )
}
