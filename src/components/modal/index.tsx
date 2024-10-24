import { createPortal } from "react-dom"

const Modal = ({children,onClose}: {children: React.ReactNode,onClose: () => void }) => {
    return (
        createPortal(
            <>
                <div id="backdrop" className="bg-slate-400 fixed top-0 left-0 w-full h-full opacity-80" />
                <div className="fixed w-96 bg-white rounded p-5 left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                    <button className="bg-rose-600 px-5 py-1 text-white rounded" type="button" onClick={onClose}>Close</button>
                    {children}
                </div>
            </>,
        document.querySelector('#modal')!!
    ))
}

export default Modal