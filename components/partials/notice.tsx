
type Props = {
    content?: string,
    onClose?() : void
}

export function Notice({ content = 'notice - insert promotion here', onClose } : Props){
    return (<div>
        <h6 className='uppercase bg-black text-center text-brand-primary py-2.5 px-4'>{ content }</h6>
    </div>
    )
}
