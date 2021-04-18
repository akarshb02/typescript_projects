import React, { useState, useRef } from 'react';



interface Props {
 text: string;
 ok?: boolean;
 i: number;
 fn?: (bob: string) => string;
 obj?: {
  f1: string
 }
}

export const TextField: React.FC<Props> = () => {

 const [count, setCount] = useState<number | null | undefined | string>(5)
 const inputRef = useRef<HTMLInputElement>(null);

 setCount(null)

 return (
  <div>
   <input ref={inputRef} />
  </div>
 )
}


export default TextField;
