import { useState } from 'react';
import { Textarea, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';

function VerifyText() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text, setText] = useState('');
  const [response, setResponse] = useState<any>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const responses = await axios.post('http://127.0.0.1:5000/predict', { data: text });
      setResponse(responses.data);
      onOpen();
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextareaChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Textarea
          width="500px"
          borderRadius={10}
          padding={10}
          color={'#464F41'}
          height="140px"
          fontSize={16}
          placeholder='Text'
          value={text}
          onChange={handleTextareaChange}
        />
        <Button
          mt={8}
          colorScheme='teal'
          type='submit'
          width="150px"
          borderRadius={20}
          border={'none'}
          color={'#367E18'}
          height="40px"
          fontSize={16}
          backgroundColor="#A8E890"
        >
          Submit
        </Button>
      </form>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {response && (
              <div>
                <p>adult: {response.adult}</p>
                <p>no_adult: {response.no_adult}</p>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default VerifyText;
