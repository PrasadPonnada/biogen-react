
import logo from '../../public/logo.svg'

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="flex justify-between 
                        items-center p-4 w-full
                         bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white border-0 h-10 shadow-md">
                <div>
                    <img width={80} height={80} src={logo} alt='Biogen' />
                </div>
                <p>
                    2024 Biogen. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
