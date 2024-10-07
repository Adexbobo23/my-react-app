import '../styles/header.css'

function Header() {
    return (
        <div className='nav-container'>
            <h1 className='web-logo'>JEXCEL</h1>
            <div className='nav-list'>
                <ul className='nav-item'>
                    <li className='nav-item-list'>Home</li>
                    <li className='nav-item-list'>About</li>
                    <li className='nav-item-list'>Service</li>
                    <li className='nav-item-list'>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;