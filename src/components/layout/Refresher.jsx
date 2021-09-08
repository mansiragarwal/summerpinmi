import React, {useState} from 'react';
import { Box, Container } from '@material-ui/core';
import {ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Fragment } from 'react';
import { useUserModeValue, useActiveStepValue } from '../../context';
import ColorLibButton from './ColorLibComponents/ColorLibButton';
import ColorLibTextField from './ColorLibComponents/ColorLibTextField';

const Refresher = () => {
	const {curActiveStep: activeStep, setCurActiveStep: setActiveStep} = useActiveStepValue();
	const [question1Ans, setQuestion1Ans] = useState('');
	const [question2Ans, setQuestion2Ans] = useState('');

	const {userMode, setUserMode} = useUserModeValue();

	const handleUserMode = (event, newMode) => {
		if (newMode !== null) {
			setUserMode(newMode);
		}
	};

	const handleQestion1 = (event, newAns) => {
	  if (newAns !== null) {
		setQuestion1Ans(newAns);
	  }
	};

	const handleQestion2 = (event, newAns) => {
		if (newAns !== null) {
		  setQuestion2Ans(newAns);
		}
	  };

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	return (
		<Fragment>
      <Container maxWidth='md'>
        <Box align="left" m = {2}> 
          <ToggleButtonGroup
            value={userMode}
            exclusive
            onChange={handleUserMode}
          >
            <ToggleButton value="caller" aria-label="left aligned">
              caller
            </ToggleButton>
            <ToggleButton value="callee" aria-label="centered">
              callee
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box fontStyle="normal" fontSize={25} textAlign="center" fontWeight="fontWeightBold" >
          Complete the exercises to unlock today's session!
        </Box>
        <div style={{ display: 'flex' }}>
          <Box textAlign="left" fontSize={18} fontWeight="fontWeightMedium" m={3.5}> 
          Closed questions are bad.
          </Box>
          <Box align="left" m = {2}>          
            <ToggleButtonGroup
              value={question1Ans}
              exclusive
              onChange={handleQestion1}
            >
              <ToggleButton value="true" aria-label="left aligned">
                True
              </ToggleButton>
              <ToggleButton value="false" aria-label="centered">
                False
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>  
        </div>
        {question1Ans === '' ? null :
        <Box fontStyle="italic" pl = {3.5} textAlign="left" fontSize={16} fontWeight="fontWeightMedium">
          {question1Ans === "false" ? "Correct!" : "Sorry, try again."} Closed questions are not “bad.” They simply are limited as a tool, so we try to avoid using them in favor of open-ended questions. However, there are situations in which closed questions are desirable. In general, the aim is to ask more open-ended than closed questions.
        </Box>}
        <div style={{ display: 'flex' }}>
          <Box textAlign="left" fontSize={18} fontWeight="fontWeightMedium" m={3.5}> 
            We use reflections to help clients not only see what they've told us, but to also help organize and understand their experience.
          </Box>
          <Box align="left" m = {2}>          
            <ToggleButtonGroup
              value={question2Ans}
              exclusive
              onChange={handleQestion2}
            >
              <ToggleButton value="true" aria-label="left aligned">
                True
              </ToggleButton>
              <ToggleButton value="false" aria-label="centered">
                False
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>  
        </div>
        {question2Ans === '' ? null :
        <Box fontStyle="italic" pl = {3.5} textAlign="left" fontSize={16} fontWeight="fontWeightMedium">
          {question2Ans === "true" ? "Correct!" : "Sorry, try again."} If we simply hold up the mirror, then we aren’t helping clients become unstuck. In addition to helping clients hear again what they’re told us, we also selectively attend to certain elements and not to others and then present that information back in a manner that helps them attain greater understanding of their situation
        </Box>}

        <Box pt = {1} fontStyle="normal" fontSize={20} textAlign="center" fontWeight="fontWeightBold" >
          Practicing Open-ended Questions
        </Box>
        <Box textAlign="left" fontSize={18} fontWeight="fontWeightMedium" pl={3.5}> 
          Are you doing OK today?                                
        </Box>
        <Box pl = {3.5} width = {900} >
          <ColorLibTextField
              id="outlined-secondary"
              label="Convert the closed question to open-ended..."
              fullWidth
              variant="outlined"
              multiline
              rowsMax={2}
              margin="normal"       
          />
        </Box>
        <Box textAlign="left" fontSize={18} fontWeight="fontWeightMedium" pl={3.5}> 
          How much do you drink on a typical drinking occasion?                               
        </Box>
        <Box pl = {3.5} width = {900} >
          <ColorLibTextField
              id="outlined-secondary"
              label="Convert the closed question to open-ended..."
              fullWidth
              variant="outlined"
              multiline
              rowsMax={2}
              margin="normal"
          />
        </Box>
        <Box textAlign="left" fontSize={18} fontWeight="fontWeightMedium" pl={3.5}> 
          I don’t get what we’re supposed to be doing here.                               
        </Box>
        <Box pl = {3.5} width = {900} >
          <ColorLibTextField
            id="outlined-secondary"
            label="Form a question in response to the client statement..."
            fullWidth
            variant="outlined"
            multiline
            rowsMax={2}
            margin="normal"
          />
        </Box>
        <Box textAlign="left" fontSize={18} fontWeight="fontWeightMedium" pl={3.5}> 
          I love my kids, but sometimes they push me to the edge, and then I do things I shouldn’t.
        </Box>
        <Box pl = {3.5} width = {900} >
          <ColorLibTextField
              id="outlined-secondary"
              label="Form a question in response to the client statement..."
              fullWidth
              variant="outlined"
              multiline
              rowsMax={2}
              margin="normal"
          />
        </Box>
      </Container>
      
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0px 50px 0px'}}>
        <ColorLibButton variant='outlined' size='medium' onClick={handleNext}>
          Submit
        </ColorLibButton>
			</div>
			
		</Fragment>
	);
}
 
export default Refresher;