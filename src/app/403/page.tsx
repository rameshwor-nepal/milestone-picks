import Link from 'next/link'

export default function Forbidden() {
    return (
        <section className="bg-gold-lighter min-h-screen">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-navy">
                        404 Forbidden
                    </h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                        Something&apos;s missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-gray-500 ">
                        You are not authorized to access this resource.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex text-white bg-navy hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </section >
    )
}