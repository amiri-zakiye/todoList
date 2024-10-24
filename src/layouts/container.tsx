const Container =  ({children} : {children: React.ReactNode}) => {
    return(
        <main className="max-w-4xl	py-5 mx-auto">
            {children}
        </main>
    )
}

export default Container