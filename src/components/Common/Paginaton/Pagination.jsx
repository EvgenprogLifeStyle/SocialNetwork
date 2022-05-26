import React, {useState} from 'react';
import s from './Pagination.module.scss'
import arrowIcon from './../../../assets/img/arrow.svg'

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
            <button className={`${s.arrow} ${s.arrow__left}`} onClick={() => setPortionNumber(portionNumber - 1)}>
                <img src={arrowIcon} alt="Left"/>
            </button>
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
            <button className={`${s.arrow} ${s.arrow__right}`} onClick={() => setPortionNumber(portionNumber + 1)}>
                <img src={arrowIcon} alt="Right"/>
            </button>
        }
    </div>
}

export default Pagination;