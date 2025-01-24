
import './App.css'
import { Button } from "./component/ui/Button";
import { PlusIcon } from './icons/plusicon';
import { ShareIcon } from './icons/share';
import { Card } from "./component/ui/Card";


function App() {
  return (
    <>
      <Button startIcon={<ShareIcon size="md"/>} size="sm" text="Share" variant="primary"/>
      <Button startIcon={<PlusIcon  size="md"/>} size="md" text="add content" variant="secondary"/>
      <Card title="Title" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="youtube"/>
      
    </>
  )
}

export default App
