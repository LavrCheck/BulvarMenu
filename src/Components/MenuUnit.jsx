import './MenuUnit.sass' 
import arrow from '../arrow.svg'

export function MenuUnit ({name, composition, price}) { 
    return <>
        <div className="MenuUnit">
            <div className='description'>
                <h2>{name}</h2>
                <p>{composition}</p>
            </div>
            <div className='price'><img src={arrow} alt='___'/><p>{price}</p></div>
        </div>
    </>
}