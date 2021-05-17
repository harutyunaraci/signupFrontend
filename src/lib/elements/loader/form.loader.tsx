import styled from 'styled-components';
import Image from 'next/image';

export function FormLoader() {
  return (
    <FormLoaderContainer>
      <Image src="/static/img/testloader.gif" width={25} height={25} />
    </FormLoaderContainer>
  );
}

const FormLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
