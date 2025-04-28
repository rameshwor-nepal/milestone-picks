import Link from 'next/link'

export default function Forbidden() {
    return (
        <div className='h-full w-full text-navy-dark flex items-center justify-center '>
            <div>
                <h2>Forbidden</h2>
                <p>You are not authorized to access this resource.</p>
                <Link href="/">Return Home</Link>
            </div>

        </div>
    )
}