import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';


export function App() {
  return (
    <div className="w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4"> Design System </Heading>
        <Text size="lg" className="text-grey-400 mt-1"> Login and start using!</Text>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold"> Email </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder='Type your email' />
          </TextInput.Root>
        </label>
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold"> Password </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder='*********' />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-grey-200">Remember me for 30 days</Text>
        </label>
        <Button type="submit" className="mt-4"> Login </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-grey-400 underline hover:text-grey-200">Forgot your password?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-grey-400 underline hover:text-grey-200">Sign up</a>
        </Text>
      </footer>
    </div>
  )
}

