
import logo from '../../public/logo.svg'

export default function NavBar() {
    return (
        <div className="flex justify-between items-center p-4 w-full bg-green-500 h-16">
            <div>
                <img src={logo} alt='Biogen'/> 
            </div>
            <div>
                <h3 className='text-3xl font-bold text-green-800'>Stay Green</h3>
            </div>
        </div>
    )
}
