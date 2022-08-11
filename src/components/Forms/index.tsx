import Final from './finalForm';
import Form from './form';
import Start from './start';
import SecondStep from './whatINeed';

interface Props {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Forms({ index, setIndex }: Props) {
  switch (index) {
    case 0:
      return <Start setPosition={setIndex} />;
    case 1:
      return <SecondStep setPosition={setIndex} />;
    case 2:
      return <Form setPosition={setIndex} />;
    default:
      return <Final setPosition={setIndex} />;
  }
}
