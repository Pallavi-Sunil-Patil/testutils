import React, { useState } from 'react';

export default function Testform(props) {

  return (
    <>
    <div class="container my-5">
        <p class="text-center" style={{color:props.mode==='light'?'black':'white'}}>This is text utility tool allows you to quickly edit and analyze your text with ease. You can convert text to uppercase or lowercase, clear the input, capitalize sentences, remove extra spaces, and copy the final text instantly. It also provides a live summary of your content, including word count, character count, and estimated reading time, along with a real-time preview.</p>
    </div>
  
    </>
  );
}