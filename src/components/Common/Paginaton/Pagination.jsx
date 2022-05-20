import React, {useState} from 'react';
import s from './Pagination.module.scss'

function Pagination({totalItemsCount, pageSize, onPageChange, currentPage, portionSize}) {
    let pagesCount, pages


    pagesCount = Math.ceil(totalItemsCount / pageSize)
    pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionsCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    return <div className={s.pagination}>
        {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>Left</button>
        }
        {pages
            .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
            .map(el =>
                <span key={el} onClick={() => onPageChange(el)}
                      className={currentPage === el ? s.active_page : ''}>
                        {el}
                    </span>
            )}
        {portionsCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>Rigth</button>
        }
    </div>
}

export default Pagination;