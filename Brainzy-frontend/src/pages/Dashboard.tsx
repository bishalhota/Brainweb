

import { useState } from 'react'
import { Button } from "../component/ui/Button";
import { PlusIcon } from '../icons/plusicon';
import { ShareIcon } from '../icons/share';
import { Card } from "../component/ui/Card";
import { CreateContentmodal } from '../component/ui/CreateContentmodal';
import { Sidebar } from '../component/ui/Sidebar';

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
        <CreateContentmodal open={isModalOpen} onClose={() => {
          setIsModalOpen(false);
        }} />

        <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size="md" />} size="sm" text="Share" variant="primary" />
          <Button startIcon={<PlusIcon size="md" />} size="md" text="add content" variant="secondary" onClick={() => {
            setIsModalOpen(true);
          }} />
        </div>
        <div className='flex gap-4'>
          <Card title="Title" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="youtube" />
          <Card title="Title" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" type="youtube" />
        </div>


      </div>


    </div>
  )
}


