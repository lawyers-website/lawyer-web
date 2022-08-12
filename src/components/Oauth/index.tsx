import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react';
import { GoogleIcon, TwitterIcon } from './ProviderIcons';
import { signIn } from 'next-auth/react';

const providers = [
  {
    name: 'Google',
    icon: <GoogleIcon boxSize='5' />,
    onClick: () => {
      signIn('google', {
        callbackUrl: '/',
        redirect: true,
      });
    },
  },
  { name: 'Twitter', icon: <TwitterIcon boxSize='5' /> },
];

export default function OAuthButtonGroup() {
  return (
    <ButtonGroup variant='outline' spacing='4' width='full'>
      {providers.map(({ name, icon, onClick }) => (
        <Button key={name} width='full' onClick={onClick}>
          <VisuallyHidden>Sign in with {name}</VisuallyHidden>
          {icon}
        </Button>
      ))}
    </ButtonGroup>
  );
}
