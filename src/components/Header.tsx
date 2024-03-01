
import logo from '../../public/logo.svg'

export default function Header() {
    return (
        <header className='w-full border-b'>
            <div className="flex justify-between 
                        items-center p-4 w-full
                         bg-gradient-to-r from-green-600 via-green-400 to-green-200 text-white border-0 h-16 shadow-md">
                <div>
                    <img src={logo} alt='Biogen' />
                </div>
                <div>
                    <h3 className='text-3xl font-bold text-green-800'>Stay Green</h3>
                </div>
            </div>
        </header>

    )
}
