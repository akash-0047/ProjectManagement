import React from 'react'
import '../Dashboard/Dashboard.scss';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Sector, Pie, PieChart, } from 'recharts';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function createData(
  orderid,
  date,
  billingname,
  amount,
  status,
  action
) {
  return { orderid, date, billingname, amount, status, action };
}

const rows = [
  createData('Line Filter', 'Business', 'Internal', 'Compressor', 'Quality A', 'High', 'Startegy', 'pune', 'Running'),
  createData('#DS0214', '05 Oct, 2021', 'Paul Reynolds', '$24.20', 'Paid', 'action'),
  createData('#DS0214', '05 Oct, 2021', 'Paul Reynolds', '$24.20', 'Paid', 'action'),
  createData('#DS0214', '05 Oct, 2021', 'Paul Reynolds', '$24.20', 'Paid', 'action'),
  createData('#DS0214', '05 Oct, 2021', 'Paul Reynolds', '$24.20', 'Paid', 'action'),
];


const Dashboard = () => {


  // Bar chart
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // Pie Chart
  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

  return (
    <>
      <div className='dashboard'>
        <div className='row'>
          <div className='col-lg-7 col-xl-8'>
            <div className='card'>
              <div className='card-body'>
                <div className='top_bar'>
                  <div className='card_title'>Sales Statistics</div>
                  <div className='form_field_wrapper'>
                    <select name="report" id="report">
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>
                </div>
                <div className='bottom_bar'>
                  <div className='row'>
                    <div className='chart'>
                      <div className='chart_inner'>
                        <div className='bar_chart' >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              width={500}
                              height={300}
                              data={data}
                            >
                              <CartesianGrid strokeDasharray="2 2" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="pv" fill="#8884d8" />
                              <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='card'>
          <div className='card-body'>
            <div className='top_bar'>
              <div className='card_title'>Manage Orders</div>
              <div className='form_field_wrapper'>
                <select name="report" id="report">
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
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
                      {rows.map((row) => (
                        <TableRow
                          key={row.orderid}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderid}
                          </TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>{row.billingname}</TableCell>
                          <TableCell>{row.amount}</TableCell>
                          <TableCell>{row.status}</TableCell>
                          <TableCell>{row.action}</TableCell>
                          <TableCell>{row.action}</TableCell>
                          <TableCell>{row.action}</TableCell>
                          <TableCell>{row.action}</TableCell>
                          <TableCell>
                            <button>Start</button>
                            <button>Close</button>
                            <button>Cancel</button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard
