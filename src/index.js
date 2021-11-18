import { useState } from 'react'
import PropTypes from 'prop-types';

const usePaginator = ({itemsPerPage}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(itemsPerPage)
    const [itemData, setItemData] = useState([])
    
    const handleNextPage = () => {
      setCurrentPage(currentPage+1)
    }
  
    const handlePreviousPage = () => {
      if (currentPage > 1) setCurrentPage(currentPage-1)
    }
    
  
    const indexOfLastPage = currentPage * perPage
    const indexOfFirstPage = indexOfLastPage - perPage
    const data = itemData && itemData.slice(indexOfFirstPage, indexOfLastPage)
    const totalPage = itemData && Math.ceil(itemData.length / perPage)

    return { data, totalPage, currentPage, setItemData, handleNextPage, handlePreviousPage}
}

usePaginator.propTypes = {
  itemsPerPage: PropTypes.number
}

export default usePaginator