import React, { useEffect, useState } from 'react'
import './ProductList.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [prodList, setProList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [orderBy, setOrderBy] = useState("ProjectName")
  const [pageCount, setPageCount] = useState();

  useEffect(() => {
    if (token && token !== null && token !== undefined) {
      const payload = {
        pageNumber: currentPage,
        pageSize: 10,
        searchKeyValue: searchText,
        orderBy: orderBy,

      }
      axios.post(`${process.env.REACT_APP_API_BASEURL}/Project/GetAllProjects`, payload, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        const total = response?.data?.data?.totalProjectsCount;
        const totalPage = Math.ceil(total / 10);
        setPageCount(totalPage)
        setProList(response?.data?.data?.projectDetailsDTOs);
        setShowSearch(false);
      }).catch((err) => {
        console.log("error", err);
        setShowSearch(false);
      });
    } else {
      navigate("/");
    }
  }, [currentPage, showSearch, orderBy])

  const hanldeEnterPress = (e) => {
    if (e.key === "Enter") {
      setShowSearch(true)
    }
  }


  return (
    <>
      <div className='product_list_wrap'>

        <div className='card'>
          <div className='card-body'>
            <div className='top_bar'>
              <div className='card_title'>
                <div className="search_bar_table common_content d-flex">
                <button className="btn search-btn search_btn" onClick={() => setShowSearch(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 21 21" fill="none">
                        <circle cx="9.98856" cy="9.98856" r="8.98856" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.2402 16.7071L19.7643 20.222" stroke="#495057" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  <div className="input-group input_group">

                    <input
                    onKeyDown={(e) => hanldeEnterPress(e)}
                      type="search"
                      className="form-control form_control"
                      placeholder="Search..."
                      aria-label="Search"
                      onChange={(e) =>
                        setSearchText(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className='table_sort_wrap'>
                {console.log("orderBy", orderBy)}
                <span className='sort_by_title'>Sort by :</span>
                <div className='form_field_wrapper'>
                  <select name="report" id="report" onChange={(e) => setOrderBy(e.target.value)}>
                    <option value="ProjectName">Project Name</option>
                    <option value="Reason">Reason</option>
                    <option value="Type">Type</option>
                    <option value="Division">Division</option>
                    <option value="Category">Category</option>
                    <option value="Priority">Priority</option>
                    <option value="Department">Department</option>
                    <option value="Location">Location</option>
                    <option value="Status">Status</option>
                  </select>
                </div>
              </div>

            </div>

            <div className='table_wrapper'>
              <div className='table_inner'>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table table-bordered table-hover'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Project Name</TableCell>
                        <TableCell>Reason</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Division</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Dept.</TableCell>
                        <TableCell>location</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>&nbsp;</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {prodList?.length > 0 && prodList?.map((row) => (
                        <TableRow
                          key={row.orderid}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <div>
                              <p className='bold_black_text mb-0'>
                                {row.projectName}
                              </p>
                              {moment(row.createdDate).format('MM/DD/YYYY')}
                            </div>

                          </TableCell>
                          <TableCell>{row.reason}</TableCell>
                          <TableCell>{row.type}</TableCell>
                          <TableCell>{row.division}</TableCell>
                          <TableCell>{row.category}</TableCell>
                          <TableCell>{row.priority}</TableCell>
                          <TableCell>{row.department}</TableCell>
                          <TableCell>{row.location}</TableCell>
                          <TableCell><div className='bold_blue_text'>{row.status}</div></TableCell>
                          <TableCell>
                            <div className='tbl_btn_group'>
                              <button className='btn tbl-btn-primary'>Start</button>
                              <button className='btn tbl-btn-outline'>Close</button>
                              <button className='btn tbl-btn-outline'>Cancel</button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Stack spacing={2} className='pagination-wrap'>
                  <Pagination count={pageCount} defaultPage={currentPage} showFirstButton showLastButton onChange={(_, page) => setCurrentPage(page)} />
                </Stack>
              </div>

            </div>

          </div>
        </div>
        <div>

        </div>

      </div >
    </>
  )
}

export default ProductList
