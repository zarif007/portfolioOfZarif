import React from 'react'
import { useRecoilState } from 'recoil';
import { StatusState } from './../atoms/StatusStateAtom';

const FootBar = () => {
  const [status, setStatus] = useRecoilState(StatusState);
  return (
    <div className='fixed bottom-0 bg-[#ff6932] w-full p-[0.5] z-30'>
      {status}
    </div>
  )
}

export default FootBar
