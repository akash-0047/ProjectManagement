import React from 'react'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }




const Prescription = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <>
        <div className='prescription'>

             <div className='card'>
                  <div className='card-body'>
                        <div className='main_title'>Prescription</div>
                        <div className='tabs'>
                        <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="Item One" {...a11yProps(0)} />
                                        <Tab label="Item Two" {...a11yProps(1)} />
                                        <Tab label="Item Three" {...a11yProps(2)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                     Item One
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    Item Two
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    Item Three
                                </CustomTabPanel>
                        </Box>
                               
                        </div>
                  </div>
             </div>

             <div className='card'>
                <div className='card-body'>
                    <div className='main_title'>Prescription</div>
                    <div className='accordion'>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Accordion 1</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                        </Accordion>
                    </div> 
                </div>
             </div>







        </div>


    </>
  )
}

export default Prescription
