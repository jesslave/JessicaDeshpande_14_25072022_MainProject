import './Menu.css'
import { Link } from 'react-router-dom';

export function Menu(props) {
    return (
        <div className="menu">
            <div className='logo-title'>
                <img src="/logo.jpg" alt="leLogo" className='logo'></img>
                <h1 className='title'>HRnet</h1>
            </div>
            
            {
                props.section === "home" ? 
                    <Link to="/employee-list" className='main-nav-logo list'>
                        <img src="/table.jpg" alt="displayEmployeeList" className='table'></img>
                        <h2>View Current Employees</h2>
                    </Link>
                :
                    <Link to="/" className='main-nav-logo home'>
                        <img src="/add-employee.jpg" alt="addEmployee" className='table'></img>
                        <h2>Add Employee</h2>
                    </Link>
            }
        </div>
    )
}

export default Menu;